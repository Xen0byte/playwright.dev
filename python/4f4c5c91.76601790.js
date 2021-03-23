(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(272)),c=r(275),s=r(276),i={id:"videos",title:"Videos"},l={unversionedId:"videos",id:"version-1.8.0/videos",isDocsHomePage:!1,title:"Videos",description:"Playwright can record videos for all pages in a browser context. Videos are saved upon context closure, so make sure to await browsercontext.close().",source:"@site/versioned_docs/version-1.8.0/videos.mdx",slug:"/videos",permalink:"/python/docs/1.8.0/videos",version:"1.8.0"},u=[{value:"API reference",id:"api-reference",children:[]}],b={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Playwright can record videos for all pages in a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/core-concepts#browser-contexts"}),"browser context"),". Videos are saved upon context closure, so make sure to await ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextclose"}),"browser_context.close()"),"."),Object(a.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# With browser.new_context()\ncontext = browser.new_context(record_video_dir="videos/")\n# Make sure to close, so that videos are saved.\ncontext.close()\n\n# With browser.new_page()\npage = browser.new_page(record_video_dir="videos/")\n# Make sure to close, so that videos are saved.\npage.close()\n\n# [Optional] specify video size; defaults to viewport size\ncontext = browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 800, "height": 600}\n)\n'))),Object(a.b)(s.a,{value:"async",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# With browser.new_context()\ncontext = await browser.new_context(record_video_dir="videos/")\n# Make sure to await close, so that videos are saved.\nawait context.close()\n\n# With browser.new_page()\npage = await browser.new_page(record_video_dir="videos/")\n# Make sure to await close, so that videos are saved.\nawait page.close()\n\n# [Optional] specify video size; defaults to viewport size\ncontext = await browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 800, "height": 600}\n)\n')))),Object(a.b)("h3",{id:"api-reference"},"API reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browser#browsernew_pagekwargs"}),"browser.new_page(**kwargs)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextclose"}),"browser_context.close()"))))}p.isMDXComponent=!0},271:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},272:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||a;return r?o.a.createElement(f,s(s({ref:t},l),{},{components:r})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},273:function(e,t,r){"use strict";var n=r(0),o=r(274);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},274:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},275:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(273),c=r(271),s=r(55),i=r.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,b=e.values,p=e.groupId,d=e.className,f=Object(a.a)(),v=f.tabGroupChoices,w=f.setTabGroupChoices,m=Object(n.useState)(s),y=m[0],O=m[1],h=n.Children.toArray(e.children);if(null!=p){var j=v[p];null!=j&&j!==y&&b.some((function(e){return e.value===j}))&&O(j)}var g=function(e){O(e),null!=p&&w(p,e)},x=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},d)},b.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},r)}))),t?Object(n.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},276:function(e,t,r){"use strict";var n=r(3),o=r(0),a=r.n(o);t.a=function(e){var t=e.children,r=e.hidden,o=e.className;return a.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:o}),t)}}}]);