import type { OutputBlockData } from "@sse-editor/types";

export const image = ({ data }: OutputBlockData): string => {
  const caption = data.caption ? data.caption : "Image";
  const url = data?.file?.url || data?.url;

  return `<img src="${url}" alt="${caption}" />`;
};
