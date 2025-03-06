import type { OutputBlockData } from "@sse-editor/types";

export const quote = ({ data }: OutputBlockData): string => {
  return `<blockquote>${data.text}</blockquote> - ${data.caption}`;
};
