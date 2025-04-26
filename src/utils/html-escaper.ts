const ca = /[&<>'"]/g;
const esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
};

function pe(m: string): string {
  return esca[m as keyof typeof esca] || m;
}

/**
 * Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input
 */
export function escape(es: string): string {
  return es.replace(ca, pe);
}
