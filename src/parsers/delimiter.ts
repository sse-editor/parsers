import { OutputBlockData } from "@sse-editor/types";
import * as _ from "../utils/id";

type Delimiter = OutputBlockData<"delimiter", { items: string[] }>;

export function parseDelimiterToMarkdown() {
  const delimiter = "---";
  return delimiter.concat("\n");
}

export function parseMarkdownToDelimiter(): Delimiter {
  return {
    id: _.generateBlockId(),
    type: "delimiter",
    data: { items: [] },
  };
}
