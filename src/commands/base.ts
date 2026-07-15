import { getBaseUrl, setBaseUrl } from '../utils/config.js';
import { logger } from '../utils/logger.js';

export async function handleBaseCommand(args: string[]) {
  if (args.length === 0) {
    const url = await getBaseUrl();
    logger.info(url || 'Base URL not set');
  } else {
    await setBaseUrl(args[0]);
    logger.info(`Base URL set to: ${args[0]}`);
  }
}
