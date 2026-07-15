import { getBaseUrl } from '../utils/config.js';

export async function resolveUrl(destination: string): Promise<string> {
  if (destination.startsWith('/')) {
    const base = await getBaseUrl();
    if (!base) {
      throw new Error('Base URL not set. Use "viii base <url>" or provide a full URL.');
    }
    return `${base.replace(/\/$/, '')}${destination}`;
  }

  if (destination.includes('.') || destination.includes('localhost') || destination.includes('://')) {
    let url = destination;
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }
    try {
      new URL(url);
      return url;
    } catch {
      // Fall through to error
    }
  }

  throw new Error(`Ambiguous destination: "${destination}". Use "/path" for base URL or "example.com" for full domain.`);
}
