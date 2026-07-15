#!/usr/bin/env node
import { logger } from './utils/logger.js';
import { handleBaseCommand } from './commands/base.js';
import { handleRequestCommand } from './commands/request.js';

const METHODS = ['get', 'post', 'put', 'patch', 'delete'];

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    logger.usage();
    return;
  }

  const [command, ...rest] = args;
  const cmdLower = command.toLowerCase();

  if (cmdLower === 'base') {
    await handleBaseCommand(rest);
    return;
  }

  if (METHODS.includes(cmdLower)) {
    if (rest.length === 0) {
      logger.error(`Destination required for ${cmdLower.toUpperCase()}`);
      return;
    }

    try {
      await handleRequestCommand(cmdLower, rest);
    } catch (err: any) {
      logger.error(err.message);
    }
    return;
  }

  logger.usage();
}

main().catch((err) => {
  logger.error(err.message);
  process.exit(1);
});
