(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(749)),o=(n(753),n(754),{id:"events",title:"Events"}),s={unversionedId:"events",id:"events",isDocsHomePage:!1,title:"Events",description:"Playwright allows listening to various types of events happening in the browser, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/docs/events.mdx",slug:"/events",permalink:"/docs/next/events",version:"current",sidebar:"docs",previous:{title:"Extensibility",permalink:"/docs/next/extensibility"},next:{title:"Handles",permalink:"/docs/next/handles"}},c=[{value:"Waiting for event",id:"waiting-for-event",children:[]},{value:"Adding/removing event listener",id:"addingremoving-event-listener",children:[]},{value:"Adding one-off listeners",id:"adding-one-off-listeners",children:[{value:"API reference",id:"api-reference",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright allows listening to various types of events happening in the browser, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#waiting-for-event"}),"Waiting for event")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#addingremoving-event-listener"}),"Adding/removing event listener")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#adding-one-off-listeners"}),"Adding one-off listeners"))),Object(i.b)("h2",{id:"waiting-for-event"},"Waiting for event"),Object(i.b)("p",null,"There is a number of methods which wait for a particular condition or an event happening in the page. They are usually the preferred choice. Here is a few examples:"),Object(i.b)("p",null,"Waiting for a request with a specified url:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [request] = await Promise.all([\n  page.waitForRequest('**/*logo*.png'),\n  page.goto('https://wikipedia.org')\n]);\nconsole.log(request.url());\n")),Object(i.b)("p",null,"Waiting for popup window:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.evaluate('window.open()')\n]);\nawait popup.goto('https://wikipedia.org');\n")),Object(i.b)("h2",{id:"addingremoving-event-listener"},"Adding/removing event listener"),Object(i.b)("p",null,"Playwright supports traditional language mechanisms to subscribe and unsubscribe from events:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"page.on('request', request => console.log(`Request sent: ${request.url()}`));\nconst listener = request => console.log(`Request finished: ${request.url()}`);\npage.on('requestfinished', listener);\nawait page.goto('https://wikipedia.org');\n\npage.off('requestfinished', listener);\nawait page.goto('https://www.openstreetmap.org/');\n")),Object(i.b)("h2",{id:"adding-one-off-listeners"},"Adding one-off listeners"),Object(i.b)("p",null,"If only next event needs to be handled, there is a convinience API for some of the events:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"page.once('dialog', dialog => dialog.accept(\"2021\"));\nawait page.evaluate(\"prompt('Enter a number:')\");\n")),Object(i.b)("h3",{id:"api-reference"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-browser",title:"Browser"}),"Browser")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-page",title:"Page"}),"Page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-worker",title:"Worker"}),"Worker"))))}u.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},750:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},751:function(e,t,n){"use strict";var r=n(0),a=n(752);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},752:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},753:function(e,t,n){"use strict";n(0),n(751),n(750),n(55)},754:function(e,t,n){"use strict";n(3),n(0)}}]);