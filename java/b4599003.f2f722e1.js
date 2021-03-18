(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(153)),c=(n(156),n(157),{id:"multi-pages",title:"Multi-page scenarios"}),i={unversionedId:"multi-pages",id:"multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window.",source:"@site/docs/multi-pages.mdx",slug:"/multi-pages",permalink:"/java/docs/multi-pages",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/java/docs/installation"},next:{title:"Navigations",permalink:"/java/docs/navigations"}},l=[{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Multiple pages",id:"multiple-pages",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Handling new pages",id:"handling-new-pages",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Handling popups",id:"handling-popups",children:[{value:"API reference",id:"api-reference-3",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#multiple-contexts"}),"Multiple contexts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#multiple-pages"}),"Multiple pages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#handling-new-pages"}),"Handling new pages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#handling-popups"}),"Handling popups"))),Object(o.b)("h2",{id:"multiple-contexts"},"Multiple contexts"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/core-concepts#browser-contexts"}),"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// FIXME\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Create a Chromium browser instance\n      Browser browser = chromium.launch();\n      // Create two isolated browser contexts\n      BrowserContext userContext = browser.newContext();\n      BrowserContext adminContext = browser.newContext();\n      // Load user and admin cookies\n      userContext.addCookies(userCookies);\n      adminContext.addCookies(adminCookies);\n    }\n  }\n}\n")),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browser#browsernewcontextoptions"}),"Browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browsercontextaddcookiescookies"}),"BrowserContext.addCookies(cookies)"))),Object(o.b)("h2",{id:"multiple-pages"},"Multiple pages"),Object(o.b)("p",null,"Each browser context can host multiple pages (tabs)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),Object(o.b)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Create two pages\nPage pageOne = context.newPage();\nPage pageTwo = context.newPage();\n\n// Get pages of a brower context\nList<Page> allPages = context.pages();\n")),Object(o.b)("h3",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page",title:"Page"}),"Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browsercontextnewpage"}),"BrowserContext.newPage()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browsercontextpages"}),"BrowserContext.pages()"))),Object(o.b)("h2",{id:"handling-new-pages"},"Handling new pages"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",Object(o.b)("inlineCode",{parentName:"p"},'target="_blank"')," links."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Get page after a specific action (e.g. clicking a link)\nPage newPage = context.waitForPage(() -> {\n  page.click(\"a[target='_blank']\"); // Opens a new tab\n});\nnewPage.waitForLoadState();\nSystem.out.println(newPage.title());\n")),Object(o.b)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Get all new pages (including popups) in the context\ncontext.onPage(page -> {\n  page.waitForLoadState();\n  System.out.println(page.title());\n});\n")),Object(o.b)("h3",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browsercontextonpagehandler"}),"BrowserContext.onPage(handler)"))),Object(o.b)("h2",{id:"handling-popups"},"Handling popups"),Object(o.b)("p",null,"If the page opens a pop-up, you can get a reference to it by listening to the ",Object(o.b)("inlineCode",{parentName:"p"},"popup")," event on the page."),Object(o.b)("p",null,"This event is emitted in addition to the ",Object(o.b)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// Get popup after a specific action (e.g., click)\nPage popup = page.waitForPopup(() -> {\n  page.click("#open");\n});\npopup.waitForLoadState();\nSystem.out.println(popup.title());\n')),Object(o.b)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Get all popups when they open\npage.onPopup(popup -> {\n  popup.waitForLoadState();\n  System.out.println(popup.title());\n});\n")),Object(o.b)("h3",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/api/class-page#pageonpopuphandler"}),"Page.onPopup(handler)"))))}s.isMDXComponent=!0},152:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(g,i(i({ref:t},p),{},{components:n})):r.a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},154:function(e,t,n){"use strict";var a=n(0),r=n(155);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},155:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(154),c=n(152),i=n(55),l=n.n(i),p=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,b=e.groupId,d=e.className,g=Object(o.a)(),m=g.tabGroupChoices,f=g.setTabGroupChoices,j=Object(a.useState)(i),O=j[0],w=j[1],h=a.Children.toArray(e.children);if(null!=b){var v=m[b];null!=v&&v!==O&&u.some((function(e){return e.value===v}))&&w(v)}var y=function(e){w(e),null!=b&&f(b,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},157:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);