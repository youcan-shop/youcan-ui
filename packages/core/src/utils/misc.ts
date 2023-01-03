export function uid(prefix: string): string {
  return prefix + Date.now().toString(36).substring(4) + Math.random().toString(36).substring(2);
}
