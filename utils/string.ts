export function splitTextOnNumber(posts: string): string[] {
  return posts
    .split(/\d\./)
    .filter(Boolean)
    .filter((v) => /\S/.test(v));
}
