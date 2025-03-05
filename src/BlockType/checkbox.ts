import { OutputData } from "../types";

interface CheckboxItem {
  checked: boolean;
  text: string;
}

type CheckboxBlockJSON = OutputData<{ type: string; items: CheckboxItem[] }>;

export function parseCheckboxToMarkdown(blocks: CheckboxBlockJSON[]): string {
  let items: string[] = [];

  blocks.forEach((block) => {
    if (block.data && block.data.items) {
      const blockItems = block.data.items.map((item) => {
        return item.checked ? `- [x] ${item.text}` : `- [ ] ${item.text}`;
      });
      items = items.concat(blockItems);
    }
  });

  return items.join("\n");
}
