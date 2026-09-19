import { useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { chatWithAssistant, type ChatMessage } from "@/lib/chat-server";
import { company } from "@/lib/company";

const GREETING = `Hi! I'm the ${company.name} assistant. Ask me about our products or services, and I'll do my best to help.`;

type DisplayMessage = ChatMessage & { id: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: DisplayMessage = { id: crypto.randomUUID(), role: "user", content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const { reply } = await chatWithAssistant({
        data: { messages: nextMessages.map(({ role, content }) => ({ role, content })) },
      });
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content: reply },
      ]);
    } catch {
      setError(
        `Sorry, I'm having trouble right now. For a quick answer, message us on WhatsApp at ${company.whatsapp}.`,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us"}
        className="fixed bottom-[6.5rem] right-6 z-50 flex size-14 items-center justify-center rounded-full bg-gold text-void shadow-lift transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Bot className="size-6" aria-hidden="true" />
        )}
      </button>

      {open ? (
        <div className="fixed bottom-[11.5rem] right-4 z-50 flex h-[28rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-sm border border-border bg-card shadow-lift sm:right-6">
          <div className="flex items-center gap-2 border-b border-border bg-void px-4 py-3">
            <Bot className="size-4 text-gold" aria-hidden="true" />
            <p className="text-sm font-bold text-on-dark">{company.name} Assistant</p>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <div className="max-w-[85%] rounded-sm bg-muted px-3 py-2 text-sm leading-relaxed text-foreground">
              {GREETING}
            </div>
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-sm bg-gold px-3 py-2 text-sm leading-relaxed text-void"
                    : "max-w-[85%] rounded-sm bg-muted px-3 py-2 text-sm leading-relaxed text-foreground"
                }
              >
                {m.content}
              </div>
            ))}
            {loading ? (
              <div className="max-w-[85%] rounded-sm bg-muted px-3 py-2 text-sm text-muted-foreground">
                Typing…
              </div>
            ) : null}
            {error ? (
              <div className="max-w-[90%] rounded-sm border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs leading-relaxed text-destructive">
                {error}
              </div>
            ) : null}
          </div>

          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a product or service…"
              className="flex-1 rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="grid size-9 shrink-0 place-items-center rounded-sm bg-gold text-void disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="size-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
