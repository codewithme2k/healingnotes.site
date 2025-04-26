import type { TableHTMLAttributes } from "react";

export function TableWrapper(props: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto">
      <table {...props}>{props.children}</table>
    </div>
  );
}
