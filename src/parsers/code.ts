import type { OutputBlockData } from "@sse-editor/types";

export const code = ({ data }: OutputBlockData): string => {
  return `<pre><code>${data.code}</code></pre>`;
};
