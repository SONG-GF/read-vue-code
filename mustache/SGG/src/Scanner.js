/**
 * 扫描器类
 */

export default class Scanner {
  constructor(templateStr) {
    // 将模板字符串写到实例上
    this.templateStr = templateStr;
    this.pos = 0;
    // 尾巴一开始就是模板字符串
    this.tail = templateStr;
  }

  //   功能弱，就是走过指定内容，没有返回值
  scan(tag) {
    if (this.tail.indexOf(tag) == 0) {
      this.pos += tag.length;
      this.tail = this.templateStr.substring(this.pos);
    }
  }
  //让指针进行扫描，直到遇到指定内容结束，并且能够返回结束之前路过的文字
  scanUtil(stopTag) {
    const pos_backup = this.pos;
    while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
      this.pos++;
      this.tail = this.templateStr.substring(this.pos);
    }
    return this.templateStr.substring(pos_backup, this.pos);
  }

  eos() {
    return this.pos >= this.templateStr.length;
  }
}
