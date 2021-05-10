(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(152)),i=(r(155),r(156),{id:"emulation",title:"Emulation"}),c={unversionedId:"emulation",id:"emulation",isDocsHomePage:!1,title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/docs/emulation.mdx",slug:"/emulation",permalink:"/dotnet/docs/emulation",version:"current",sidebar:"docs",previous:{title:"Element selectors",permalink:"/dotnet/docs/selectors"},next:{title:"Events",permalink:"/dotnet/docs/events"}},l=[{value:"User agent",id:"user-agent",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Viewport",id:"viewport",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Locale &amp; timezone",id:"locale--timezone",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Permissions",id:"permissions",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Geolocation",id:"geolocation",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Color scheme and media",id:"color-scheme-and-media",children:[{value:"API reference",id:"api-reference-5",children:[]}]}],s={toc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),Object(a.b)("li",{parentName:"ul"},"locale, timezone"),Object(a.b)("li",{parentName:"ul"},"color scheme"),Object(a.b)("li",{parentName:"ul"},"geolocation")),Object(a.b)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#user-agent"}),"User agent")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#viewport"}),"Viewport")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#permissions"}),"Permissions")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#geolocation"}),"Geolocation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#color-scheme-and-media"}),"Color scheme and media"))),Object(a.b)("br",null),Object(a.b)("h2",{id:"user-agent"},"User agent"),Object(a.b)("p",null,"All pages created in the context above will share the user agent specified:"),Object(a.b)("h3",{id:"api-reference"},"API reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browser#browsernewcontextoptions"}),"Browser.NewContext([options])"))),Object(a.b)("br",null),Object(a.b)("h2",{id:"viewport"},"Viewport"),Object(a.b)("p",null,"Create a context with custom viewport size:"),Object(a.b)("h3",{id:"api-reference-1"},"API reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browser#browsernewcontextoptions"}),"Browser.NewContext([options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagesetviewportsizewidth-height"}),"Page.SetViewportSize(width, height)"))),Object(a.b)("br",null),Object(a.b)("h2",{id:"locale--timezone"},"Locale & timezone"),Object(a.b)("h3",{id:"api-reference-2"},"API reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browser#browsernewcontextoptions"}),"Browser.NewContext([options])"))),Object(a.b)("br",null),Object(a.b)("h2",{id:"permissions"},"Permissions"),Object(a.b)("p",null,"Allow all pages in the context to show system notifications:"),Object(a.b)("p",null,"Grant all pages in the existing context access to current location:"),Object(a.b)("p",null,"Grant notifications access from a specific domain:"),Object(a.b)("p",null,"Revoke all permissions:"),Object(a.b)("h3",{id:"api-reference-3"},"API reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browser#browsernewcontextoptions"}),"Browser.NewContext([options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browsercontextgrantpermissionspermissions-options"}),"BrowserContext.GrantPermissions(permissions[, options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browsercontextclearpermissions"}),"BrowserContext.ClearPermissions()"))),Object(a.b)("br",null),Object(a.b)("h2",{id:"geolocation"},"Geolocation"),Object(a.b)("p",null,"Create a context with ",Object(a.b)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),Object(a.b)("p",null,"Change the location later:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),Object(a.b)("h3",{id:"api-reference-4"},"API reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browser#browsernewcontextoptions"}),"Browser.NewContext([options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browsercontextsetgeolocationgeolocation"}),"BrowserContext.SetGeolocation(geolocation)"))),Object(a.b)("br",null),Object(a.b)("h2",{id:"color-scheme-and-media"},"Color scheme and media"),Object(a.b)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),Object(a.b)("h3",{id:"api-reference-5"},"API reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browser#browsernewcontextoptions"}),"Browser.NewContext([options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageemulatemediaoptions"}),"Page.EmulateMedia([options])"))))}b.isMDXComponent=!0},151:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},153:function(e,t,r){"use strict";var n=r(0),o=r(154);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},155:function(e,t,r){"use strict";r(0),r(153),r(151),r(53)},156:function(e,t,r){"use strict";r(3),r(0)}}]);