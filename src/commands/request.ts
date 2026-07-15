import { resolveUrl } from '../core/resolver.js';
import { parseArgs } from '../core/parser.js';
import { executeRequest } from '../core/http.js';

export async function handleRequestCommand(method: string, rest: string[]) {
  const targetUrl = await resolveUrl(rest[0]);
  const { body, headers } = parseArgs(rest);
  await executeRequest(method, targetUrl, headers, body);
}
