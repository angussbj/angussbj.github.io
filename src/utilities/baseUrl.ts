export function baseUrl(url: string): string | undefined {
  return url.match(/(?:.*:\/\/)?([^/]*)/)?.[1] ?? undefined;
}
