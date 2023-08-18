import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";

window.SSG_TemplateEngine = {
  render(templateStr, data) {
    // 让模板字符串能够变为tokens数组
    var tokens = parseTemplateToTokens(templateStr);

    // 让tokens数组变为dom字符串
    var domStr = renderTemplate(tokens, data);

    return domStr;
  },
};
