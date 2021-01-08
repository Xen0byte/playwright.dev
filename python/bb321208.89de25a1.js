(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{124:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(147)),o={id:"class-playwright",title:"Playwright"},c={unversionedId:"api/class-playwright",id:"api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/docs/api/class-playwright.md",slug:"/api/class-playwright",permalink:"/python/docs/api/class-playwright",version:"current",sidebar:"api",next:{title:"Accessibility",permalink:"/python/docs/api/class-accessibility"}},l=[{value:"playwright.chromium",id:"playwrightchromium",children:[]},{value:"playwright.devices",id:"playwrightdevices",children:[]},{value:"playwright.firefox",id:"playwrightfirefox",children:[]},{value:"playwright.selectors",id:"playwrightselectors",children:[]},{value:"playwright.webkit",id:"playwrightwebkit",children:[]},{value:"playwright.stop()",id:"playwrightstop",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { chromium, firefox, webkit } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.\n  const page = await browser.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),Object(i.b)("p",null,"By default, the ",Object(i.b)("inlineCode",{parentName:"p"},"playwright")," NPM package automatically downloads browser executables during installation. The ",Object(i.b)("inlineCode",{parentName:"p"},"playwright-core")," NPM package can be used to skip automatic downloads."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightchromium"}),"playwright.chromium")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightdevices"}),"playwright.devices")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightfirefox"}),"playwright.firefox")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightselectors"}),"playwright.selectors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightwebkit"}),"playwright.webkit")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-playwright#playwrightstop"}),"playwright.stop()"))),Object(i.b)("h2",{id:"playwrightchromium"},"playwright.chromium"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ","[ChromiumBrowser]","."),Object(i.b)("h2",{id:"playwrightdevices"},"playwright.devices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">")),Object(i.b)("p",null,"Returns a list of devices to be used with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-browser#browsernewcontextoptions"}),"browser.new_context(**options)")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-browser#browsernewpageoptions"}),"browser.new_page(**options)"),". Actual list of devices can be found in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Microsoft/playwright/blob/master/src/server/deviceDescriptors.ts"}),"src/server/deviceDescriptors.ts"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { webkit, devices } = require('playwright');\nconst iPhone = devices['iPhone 6'];\n\n(async () => {\n  const browser = await webkit.launch();\n  const context = await browser.newContext({\n    ...iPhone\n  });\n  const page = await context.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),Object(i.b)("h2",{id:"playwrightfirefox"},"playwright.firefox"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-firefoxbrowser",title:"FirefoxBrowser"}),"FirefoxBrowser"),"."),Object(i.b)("h2",{id:"playwrightselectors"},"playwright.selectors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-selectors",title:"Selectors"}),"Selectors"),">")),Object(i.b)("p",null,"Selectors can be used to install custom selector engines. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/selectors#working-with-selectors"}),"Working with selectors")," for more information."),Object(i.b)("h2",{id:"playwrightwebkit"},"playwright.webkit"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-webkitbrowser",title:"WebKitBrowser"}),"WebKitBrowser"),"."),Object(i.b)("h2",{id:"playwrightstop"},"playwright.stop()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(i.b)("p",null,"Terminates this instance of Playwright in case it was created bypassing the Python context manager. This is useful in REPL applications."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'>>> from playwright import sync_playwright\n\n>>> playwright = sync_playwright().start()\n\n>>> browser = playwright.chromium.launch()\n>>> page = browser.newPage()\n>>> page.goto("http://whatsmyuseragent.org/")\n>>> page.screenshot(path="example.png")\n>>> browser.close()\n\n>>> playwright.stop()\n')))}p.isMDXComponent=!0},147:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return w}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),u=a,w=b["".concat(o,".").concat(u)]||b[u]||h[u]||i;return r?n.a.createElement(w,c(c({ref:t},s),{},{components:r})):n.a.createElement(w,c({ref:t},s))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);