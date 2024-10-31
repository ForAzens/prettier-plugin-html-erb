import { parse } from "./parser";
import { print, embed } from "./printer";

const PLUGIN_KEY = "erb-template";

export const languages = [
  {
    name: "ErbTemplate",
    parsers: [PLUGIN_KEY],
    extensions: [".html.erb"],
  },
];

export const parsers = {
  [PLUGIN_KEY]: {
    astFormat: PLUGIN_KEY,
    parse,
    locStart: (node) => node.index,
    locEnd: (node) => node.index + node.length,
  },
};

export const printers = {
  [PLUGIN_KEY]: {
    print,
    embed
  }
}