import type { OutputBlockData } from "@sse-editor/types";

export const delimiter = ({ data }: OutputBlockData): string => {
  return `<br/>`;
};
