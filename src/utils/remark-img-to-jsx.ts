import type { Node, Parent, Literal } from "unist";
import { visit } from "unist-util-visit";
import { sync as sizeOf } from "probe-image-size";
import fs from "fs";
import path from "path";

export type ImageNode = Parent & {
  url: string;
  alt: string;
  name: string;
  attributes: (Literal & { name: string; value: unknown })[];
};

/**
 * Helper: Check if node has children
 */
function isParent(node: Node): node is Parent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return "children" in node && Array.isArray((node as any).children);
}

/**
 * remark plugin: Convert markdown image to next/image jsx
 */
export function remarkImgToJsx() {
  return (tree: Node) => {
    visit(
      tree,
      (node: Node): node is Parent =>
        node.type === "paragraph" &&
        isParent(node) &&
        node.children.some((child) => child.type === "image"),
      (node) => {
        if (!isParent(node)) return;

        const imageNodeIndex = node.children.findIndex(
          (child) => child.type === "image"
        );
        if (imageNodeIndex === -1) return;

        const imageNode = node.children[imageNodeIndex] as unknown as ImageNode;

        const imagePath = path.join(process.cwd(), "public", imageNode.url);

        if (fs.existsSync(imagePath)) {
          const dimensions = sizeOf(fs.readFileSync(imagePath));

          // Check if dimensions is not null
          if (dimensions) {
            imageNode.type = "mdxJsxFlowElement";
            imageNode.name = "Image";
            imageNode.attributes = [
              { type: "mdxJsxAttribute", name: "alt", value: imageNode.alt },
              { type: "mdxJsxAttribute", name: "src", value: imageNode.url },
              {
                type: "mdxJsxAttribute",
                name: "width",
                value: dimensions.width,
              },
              {
                type: "mdxJsxAttribute",
                name: "height",
                value: dimensions.height,
              },
            ];

            node.type = "div"; // avoid p > div error in MDX
            node.children[imageNodeIndex] = imageNode;
          } else {
            console.error(
              `Could not read dimensions for image: ${imageNode.url}`
            );
          }
        }
      }
    );
  };
}
