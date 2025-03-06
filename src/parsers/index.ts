import { parseCheckboxToMarkdown } from "./checkbox";
import { parseCodeToMarkdown, parseMarkdownToCode } from "./code";
import {
  parseDelimiterToMarkdown,
  parseMarkdownToDelimiter,
} from "./delimiter";
import { parseHeaderToMarkdown, parseMarkdownToHeader } from "./header";
import { parseImageToMarkdown, parseMarkdownToImage } from "./image";
import { parseListToMarkdown } from "./list";

export default {
  // code
  code: {
    md: {
      parse: parseCodeToMarkdown,
      import: parseMarkdownToCode,
    },
    html: {},
  },

  // checkbox
  checkbox: {
    md: {
      parse: parseCheckboxToMarkdown,
      // import :
    },
    html: {},
  },

  //delimiter
  delimiter: {
    md: {
      parse: parseDelimiterToMarkdown,
      import: parseMarkdownToDelimiter,
    },
    html: {},
  },

  // header
  header: {
    md: {
      parse: parseHeaderToMarkdown,
      import: parseMarkdownToHeader,
    },
    html: {},
  },

  // image
  image: {
    md: {
      parse: parseImageToMarkdown,
      import: parseMarkdownToImage,
    },
    html: {},
  },

  // list
  list: {
    md: {
      parse: parseListToMarkdown,
      // import:
    },
    html: {},
  },
};
