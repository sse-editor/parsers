import * as _ from "../utils/id";
import { OutputBlockData } from "@sse-editor/types";

type ListType = "unordered" | "ordered";
// type List = OutputBlockData<{ style: ListType; items: string[] }>;
type List = OutputBlockData<"list", { style: ListType; items: string[] }>;

export function parseListToMarkdown(blocks: List) {
  let items = {};
  switch (blocks.data.style) {
    case "unordered":
      items = blocks.data.items.map((item) => `* ${item}`);
      return items;
    case "ordered":
      items = blocks.data.items.map((item, index) => `${index + 1} ${item}`);
      return items;
    default:
      break;
  }
}

// export function parseMarkdownToList(blocks: string) {
//   let listData = {};
//   const itemData: string[] = [];

//   blocks.children.forEach((items) => {
//     items.children.forEach((listItem) => {
//       listItem.children.forEach((listEntry) => {
//         itemData.push(listEntry.value);
//       });
//     });
//   });

//   listData = {
//     data: {
//       items: itemData,
//       style: blocks.ordered ? "ordered" : "unordered",
//     },
//     type: "list",
//   };

//   return listData;
// }
