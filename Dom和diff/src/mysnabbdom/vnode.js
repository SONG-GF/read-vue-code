/**
 * @param {string} sel 选择器
 * @param {object} data 属性，样式
 * @param {Array} children 子元素
 * @param {string | number} text 文本内容
 * @param {object} elm 对应的真正的dom节点
 * @returns
 */

export default function (sel, data, children, text, elm) {
  return { sel, data, children, text, elm };
}
