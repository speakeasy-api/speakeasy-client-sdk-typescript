export function MatchContentType(
  contentType: string,
  pattern: string
): boolean {
  if (contentType === pattern || pattern === "*" || pattern === "*/*")
    return true;
  if (contentType === pattern) return true;
  const parts: string[] = contentType.split("/");
  if (parts.length === 2) {
    if (`${parts[0]}/*` === pattern || `*/${parts[1]}` === pattern) return true;
  }
  return false;
}
