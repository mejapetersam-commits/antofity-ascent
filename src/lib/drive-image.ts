/**
 * Google Drive's normal "Share" link (e.g.
 * https://drive.google.com/file/d/FILE_ID/view?usp=sharing) opens Drive's
 * viewer page, not the raw image — so it can't be used directly as an <img>
 * src. This extracts the file ID from any of Drive's common link shapes and
 * rewrites it to Drive's thumbnail endpoint, which serves the actual image
 * and works for hotlinking.
 *
 * The file must be shared as "Anyone with the link" (Viewer) for this to work.
 *
 * Non-Drive URLs are returned unchanged.
 */
export function toDirectImageUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return trimmed;

  const patterns = [
    /drive\.google\.com\/file\/d\/([^/]+)/, // .../file/d/FILE_ID/view
    /drive\.google\.com\/open\?id=([^&]+)/, // .../open?id=FILE_ID
    /drive\.google\.com\/uc\?(?:export=view&)?id=([^&]+)/, // .../uc?export=view&id=FILE_ID
    /drive\.google\.com\/thumbnail\?id=([^&]+)/, // already-converted links
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match?.[1]) {
      return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
    }
  }

  return trimmed;
}
