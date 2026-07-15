import { logger } from '../utils/logger.js';

export async function executeRequest(
  method: string,
  url: string,
  headers: Record<string, string>,
  body?: string
) {
  try {
    const response = await fetch(url, {
      method: method.toUpperCase(),
      headers,
      body: ['GET', 'HEAD'].includes(method.toUpperCase()) ? undefined : body,
    });

    logger.info(`Status: ${response.status} ${response.statusText}`);

    const contentType = response.headers.get('content-type') || '';
    const text = await response.text();

    if (contentType.includes('application/json')) {
      try {
        const json = JSON.parse(text);
        logger.info(JSON.stringify(json, null, 2));
      } catch {
        logger.info(text);
      }
    } else {
      logger.info(text);
    }
  } catch (err: any) {
    throw new Error(`Request failed: ${err.message}`);
  }
}
