import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { homedir } from 'os';

const CONFIG_DIR = join(homedir(), '.config', 'viii');
const CONFIG_FILE = join(CONFIG_DIR, 'config.json');

interface Config {
  base_url?: string;
}

export async function ensureConfigDir() {
  try {
    await mkdir(CONFIG_DIR, { recursive: true });
  } catch (err) {
    // Ignore if exists
  }
}

export async function readConfig(): Promise<Config> {
  try {
    const data = await readFile(CONFIG_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

export async function writeConfig(config: Config) {
  await ensureConfigDir();
  await writeFile(CONFIG_FILE, JSON.stringify(config, null, 2));
}

export async function getBaseUrl(): Promise<string | undefined> {
  const config = await readConfig();
  return config.base_url;
}

export async function setBaseUrl(url: string) {
  const config = await readConfig();
  config.base_url = url;
  await writeConfig(config);
}
