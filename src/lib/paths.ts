import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** Prefix a public-folder path (e.g. "images/a.png") with the site base. */
export function url(path: string): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** True when a file exists in /public. Used to swap placeholders for real media at build time. */
export function publicExists(path: string): boolean {
  return existsSync(join(process.cwd(), 'public', path.replace(/^\//, '')));
}
