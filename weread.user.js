// ==UserScript==
// @name        微信读书修改为衬线字体
// @description  微信读书使用浏览器默认衬线字体
// @match       https://weread.qq.com/web/reader/*
// @grant       GM_addStyle
// @version     0.1.0
// @author      @todd
// @homepageURL https://github.com/srk24/UserScript/blob/main/weread.user.js
// @downloadURL https://github.com/srk24/UserScript/raw/main/weread.user.js
// @updateURL https://github.com/srk24/UserScript/raw/main/weread.user.js
// ==/UserScript==

GM_addStyle(".readerChapterContent{font-family: serif !important;font-weight: 500 !important;}");
