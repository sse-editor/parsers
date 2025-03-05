import { nanoid } from "nanoid";

/**
 * Create a block id
 *
 * @returns {string}
 */
export function generateBlockId(): string {
  const idLen = 10;
  return nanoid(idLen);
}
