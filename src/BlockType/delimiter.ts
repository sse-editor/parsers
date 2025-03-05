import * as _ from "../utils/id";
import { OutputData } from "../types";

type Delimiter = OutputData<{ items: string[] }>;

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
