import type { OutputBlockData } from "@sse-editor/types";

export const header = ({ data }: OutputBlockData) => {
  return `<h${data.level}>${data.text}</h${data.level}>`;
};
