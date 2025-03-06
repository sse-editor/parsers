import { OutputBlockData } from "@sse-editor/types";
import * as _ from "../utils/id";

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Alignment = "left" | "right" | "centre" | "justify";
type Header = OutputBlockData<
  "header",
  { level: Level; text: string; alignment?: Alignment }
>;

export function parseHeaderToMarkdown(blocks: Header): string | undefined {
  const alignment = blocks.data.alignment || "left";

  switch (blocks.data.level) {
    case 1:
      return `# <div style="text-align: ${alignment}">${blocks.data.text}</div>`;
    case 2:
      return `## <div style="text-align: ${alignment}">${blocks.data.text}</div>`;
    case 3:
      return `### <div style="text-align: ${alignment}">${blocks.data.text}</div>`;
    case 4:
      return `#### <div style="text-align: ${alignment}">${blocks.data.text}</div>`;
    case 5:
      return `##### <div style="text-align: ${alignment}">${blocks.data.text}</div>`;
    case 6:
      return `###### <div style="text-align: ${alignment}">${blocks.data.text}</div>`;
    default:
      break;
  }
}

export function parseMarkdownToHeader(markdown: string): Header | undefined {
  const match = markdown.match(
    /^(#+)\s+<div style="text-align:\s*(left|right|center|justify)">\s*(.*?)\s*<\/div>$/
  );

  if (match) {
    const level = match[1].length as Level;
    const text = match[3].trim();
    const alignment = match[2] as Alignment;

    if (level >= 1 && level <= 6) {
      return {
        id: _.generateBlockId(),
        type: "header",
        data: {
          level,
          text,
          alignment: alignment || "left",
        },
      };
    }
  }

  return undefined;
}

export function parseHeaderToHTML(blocks: Header): string {
  const alignment = blocks.data.alignment || "left";
  return `<h${blocks.data.level} style="text-align: ${alignment}">${blocks.data.text}</h${blocks.data.level}>`;
}

export function parseHTMLToHeader(html: string): Header | undefined {
  const match = html.match(
    /^(<h([1-6])\s+style="text-align:\s*(left|right|center|justify)">)(.*?)<\/h[1-6]>$/
  );

  if (match) {
    const level = parseInt(match[2], 10) as Level;
    const alignment = match[3] as Alignment;
    const text = match[4].trim();

    return {
      id: _.generateBlockId(),
      type: "header",
      data: {
        level,
        text,
        alignment,
      },
    };
  }
}
