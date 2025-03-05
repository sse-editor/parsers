import * as _ from "../utils/id";
import { OutputData } from "../types";

interface ImageConst {
  file: {
    url: string;
  };
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
  caption: string;
}

type Image = OutputData<ImageConst>;

export function parseImageToMarkdown(blocks: Image) {
  return `![${blocks.data.caption}](${blocks.data.file.url})`.concat("\n");
}

export function parseMarkdownToImage(markdown: string): Image | undefined {
  const imageMatch = markdown.match(/!\[([^\]]*)\]\(([^)]+)\)/);

  if (imageMatch) {
    const caption = imageMatch[1];
    const url = imageMatch[2];

    return {
      id: _.generateBlockId(),
      type: "image",
      data: {
        file: { url },
        withBackground: false,
        withBorder: false,
        stretched: false,
        caption,
      },
    };
  }

  return undefined;
}

export function ImageToHtml(image: Image): string {
  const data = image.data;
  const classes: string[] = ["image-tool__image"];
  
  if (data.withBorder) {
    classes.push("image-tool--withBorder");
  }
  if (data.withBackground) {
    classes.push("image-tool--withBackground");
  }
  if (data.stretched) {
    classes.push("image-tool--stretched");
  }

  const imgHtml = `<img src="${data.file.url}" alt="${data.caption}" class="image-tool__image-picture" />`;
  let captionHtml = "";
  if (data.caption) {
    captionHtml = `<figcaption class="image-tool__caption">${data.caption}</figcaption>`;
  }

  return `<figure class="${classes.join(
    " "
  )}">${imgHtml}${captionHtml}</figure>`;
}

export function HtmlToImage(html: string): Image | undefined {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  const figure = tempDiv.querySelector("figure");
  if (!figure) return undefined;

  const classes = figure.className.split(" ");
  const withBorder = classes.includes("image-tool--withBorder");
  const withBackground = classes.includes("image-tool--withBackground");
  const stretched = classes.includes("image-tool--stretched");

  const img = figure.querySelector("img");
  if (!img) return undefined;
  const url = img.getAttribute("src") || "";

  const captionElement = figure.querySelector("figcaption");
  const caption = captionElement ? captionElement.textContent || "" : "";

  return {
    id: _.generateBlockId(),
    type: "image",
    data: {
      file: { url },
      withBorder,
      withBackground,
      stretched,
      caption,
    },
  };
}
