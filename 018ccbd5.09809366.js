(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(875)),c={id:"pom",title:"Page Object Models"},i={unversionedId:"pom",id:"version-1.4.2/pom",isDocsHomePage:!1,title:"Page Object Models",description:"Large test suites can be structured to optimize ease of authoring and maintenance.",source:"@site/versioned_docs/version-1.4.2/pom.md",slug:"/pom",permalink:"/docs/1.4.2/pom",editUrl:"https://github.com/microsoft/playwright/edit/master/docs/versioned_docs/version-1.4.2/pom.md",version:"1.4.2",sidebar:"version-1.4.2/docs",previous:{title:"Authentication",permalink:"/docs/1.4.2/auth"},next:{title:"Test Runners",permalink:"/docs/1.4.2/test-runners"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Implementation",id:"implementation",children:[{value:"API reference",id:"api-reference",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Large test suites can be structured to optimize ease of authoring and maintenance.\nPage object models are one such approach to structure your test suite."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#implementation"}),"Implementation"))),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"A page object represents a part of your web application. An e-commerce web\napplication might have a home page, a listings page and a checkout page. Each of\nthem can be represented by page object models."),Object(o.b)("p",null,"Page objects ",Object(o.b)("strong",{parentName:"p"},"simplify authoring"),". They create a higher-level API which suits\nyour application."),Object(o.b)("p",null,"Page objects ",Object(o.b)("strong",{parentName:"p"},"simplify maintenance"),". They capture element selectors in one place\nand create reusable code to avoid repetition."),Object(o.b)("h2",{id:"implementation"},"Implementation"),Object(o.b)("p",null,"Page object models wrap over a Playwright ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.4.2/api/class-page#class-page"}),Object(o.b)("inlineCode",{parentName:"a"},"page")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// models/Search.js\nclass SearchPage {\n  constructor(page) {\n    this.page = page;\n  }\n  async goto() {\n    await this.page.goto('https://bing.com');\n  }\n  async search(text) {\n    await this.page.fill('[aria-label=\"Enter your search term\"]', text);\n    await this.page.keyboard.press('Enter');\n  }\n}\nmodule.exports = { SearchPage };\n")),Object(o.b)("p",null,"Page objects can then be used inside a test."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// search.spec.js\nconst { SearchPage } = require('./models/Search');\n\n// In the test\nconst page = await browser.newPage();\nconst searchPage = new SearchPage(page);\nawait searchPage.navigate();\nawait searchPage.search('search query');\n")),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.4.2/api#class-page"}),"class ",Object(o.b)("inlineCode",{parentName:"a"},"Page")))))}l.isMDXComponent=!0},875:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);