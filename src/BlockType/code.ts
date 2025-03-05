import { OutputData } from "../types";
import * as _ from "../utils/id";

type CodeBlockJSON = OutputData<{ code: string }>;

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
