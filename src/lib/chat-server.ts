import { createServerFn } from "@tanstack/react-start";
import { sql } from "./db";
import { company, solutions } from "./company";

export type ChatMessage = { role: "user" | "assistant"; content: string };

const MODEL = "claude-haiku-4-5-20251001";
const MAX_HISTORY = 12; // keep requests small/cheap

async function buildSystemPrompt(): Promise<string> {
  let catalogueSummary = "The product catalogue could not be loaded right now.";
  try {
    const rows = await sql()`
      select name, price, category, in_stock as "inStock"
      from catalogue_items
      order by sort_order asc, created_at desc
      limit 60
    `;
    const items = rows as {
      name: string;
      price: string | null;
      category: string | null;
      inStock: boolean;
    }[];
    catalogueSummary = items.length
      ? items
          .map(
            (i) =>
              `- ${i.name}${i.category ? ` (${i.category})` : ""}${i.price ? `, ${i.price}` : ""}${
                i.inStock ? "" : " — out of stock"
              }`,
          )
          .join("\n")
      : "The catalogue is currently empty.";
  } catch {
    // fall back to the default message above
  }

  const solutionsSummary = solutions.map((s) => `- ${s.title}: ${s.summary}`).join("\n");

  return `You are the website assistant for ${company.name}, an ICT solutions and hardware company based in Nairobi, Kenya (est. ${company.founded}).

Your job: answer visitor questions about the company's products and services using ONLY the information below. Be concise, friendly and direct — a few sentences at most, no long essays.

CONTACT
Phone/WhatsApp: ${company.phone}
Email: ${company.email}
Address: ${company.address.join(", ")}

SERVICES
${solutionsSummary}

CURRENT PRODUCT CATALOGUE (live)
${catalogueSummary}

RULES
- If asked about a specific product's exact price, stock, or delivery timing, prefer the catalogue data above; if it's not listed or you're unsure, say so plainly and suggest contacting via WhatsApp (${company.whatsapp}) or the catalogue page for the full range.
- Never invent products, prices, specs or stock levels that aren't in the data above.
- For anything transactional (placing an order, negotiating price, delivery specifics, payment), direct the visitor to WhatsApp or a call rather than trying to complete it yourself.
- If asked something entirely unrelated to ${company.name}'s products/services, politely redirect to what you can help with.
- Keep replies short and conversational, suited to a small chat widget.`;
}

export const chatWithAssistant = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as { messages: ChatMessage[] })
  .handler(async ({ data }) => {
    const apiKey = process.env["ANTHROPIC_API_KEY"];
    if (!apiKey) {
      throw new Error("ANTHROPIC_API_KEY is not set");
    }

    const system = await buildSystemPrompt();
    const messages = data.messages.slice(-MAX_HISTORY);

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 400,
        system,
        messages,
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`Anthropic API error (${response.status}): ${text.slice(0, 200)}`);
    }

    const result = (await response.json()) as {
      content: { type: string; text?: string }[];
    };
    const reply = result.content
      .filter((block) => block.type === "text" && block.text)
      .map((block) => block.text)
      .join("\n")
      .trim();

    return { reply: reply || "Sorry, I couldn't come up with a reply — please try again." };
  });
