// ==UserScript==
// @name        微信读书字体修改
// @description  微信读书使用浏览器默认衬线字体
// @match       https://weread.qq.com/web/reader/*
// @grant       GM_addStyle
// @version     0.1.0
// @author      @todd
// @description 2023/9/13 20:49:59
// ==/UserScript==

GM_addStyle("*{font-family: serif !important;}");
GM_addStyle(".readerChapterContent{font-weight: 500 !important;}");
