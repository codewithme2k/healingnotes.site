/* eslint-disable @typescript-eslint/ban-ts-comment */

import type { Parent } from "unist";
import { visit } from "unist-util-visit";
import yaml from "js-yaml";

/**
 * Extracts frontmatter from markdown file and adds it to the file's data object.
 *
 */
export function remarkExtractFrontmatter() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: Parent, file: any) => {
    visit(tree, "yaml", (node: Parent) => {
      //@ts-ignore
      file.data.frontmatter = yaml.load(node.value);
    });
  };
}
