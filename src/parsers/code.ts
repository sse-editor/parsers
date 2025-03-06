import { OutputBlockData } from "@sse-editor/types";
import * as _ from "../utils/id";

type CodeBlockJSON = OutputBlockData<"code", { code: string }>;

interface MarkdownBlock {
  value: string;
}

export function parseCodeToMarkdown(blocks: CodeBlockJSON): string {
  return `\`\`\`\n${blocks.data.code}\n\`\`\`\n`;
}

export function parseMarkdownToCode(blocks: MarkdownBlock): CodeBlockJSON {
  return {
    id: _.generateBlockId(),
    type: "code",
    data: {
      code: blocks.value,
    },
  };
}
