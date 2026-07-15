export interface ParsedInput {
  body?: string;
  headers: Record<string, string>;
}

export function parseArgs(rest: string[]): ParsedInput {
  const result: ParsedInput = { headers: {} };
  let startIndex = 1;

  if (rest.length > 1) {
    const candidate = rest[1];
    const isHeader = candidate.includes('=') && !candidate.startsWith('{') && !candidate.startsWith('[');
    
    if (!isHeader) {
      result.body = candidate;
      startIndex = 2;
    }
  }

  for (let i = startIndex; i < rest.length; i++) {
    const [key, ...values] = rest[i].split('=');
    if (key) result.headers[key] = values.join('=');
  }

  if (result.body) {
    const isJson = (result.body.startsWith('{') && result.body.endsWith('}')) || 
                   (result.body.startsWith('[') && result.body.endsWith(']'));
    
    const hasContentType = Object.keys(result.headers).some(h => h.toLowerCase() === 'content-type');
    
    if (!hasContentType) {
      result.headers['Content-Type'] = isJson ? 'application/json' : 'text/plain';
    }
  }

  return result;
}
