import type { OutputBlockData } from "@sse-editor/types";

export const paragraph = ({ data }: OutputBlockData): string => {
  const align = data.alignment || data.align;

  if (align) {
    return `<p style="text-align:${align}"> ${data.text} </p>`;
  }

  return `<p>${data.text}</p>`;
};
