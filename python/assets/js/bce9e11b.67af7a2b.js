(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7158],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),r=n(944),o=n(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var l=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,d=e.groupId,m=e.className,f=(0,r.Z)(),h=f.tabGroupChoices,y=f.setTabGroupChoices,b=(0,a.useState)(p),v=b[0],k=b[1],g=a.Children.toArray(e.children),w=[];if(null!=d){var N=h[d];null!=N&&N!==v&&u.some((function(e){return e.value===N}))&&k(N)}var _=function(e){var t=e.currentTarget,n=w.indexOf(t),a=u[n].value;k(a),null!=d&&(y(d,a),setTimeout((function(){var e,n,a,r,o,s,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,s=window,l=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case l:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:_,onClick:_},n)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1091:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),s=n(1395),i=n(8215),l={id:"class-cdpsession",title:"CDPSession"},c={unversionedId:"api/class-cdpsession",id:"api/class-cdpsession",isDocsHomePage:!1,title:"CDPSession",description:"* extends: [EventEmitter]",source:"@site/docs/api/class-cdpsession.mdx",sourceDirName:"api",slug:"/api/class-cdpsession",permalink:"/python/docs/next/api/class-cdpsession",version:"current",frontMatter:{id:"class-cdpsession",title:"CDPSession"},sidebar:"api",previous:{title:"BrowserType",permalink:"/python/docs/next/api/class-browsertype"},next:{title:"ConsoleMessage",permalink:"/python/docs/next/api/class-consolemessage"}},p=[{value:"cdp_session.detach()",id:"cdp-session-detach",children:[]},{value:"cdp_session.send(method, **kwargs)",id:"cdp-session-send",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends: ",(0,o.kt)("a",{parentName:"li",href:"https://pyee.readthedocs.io/en/latest/#pyee.BaseEventEmitter",title:"EventEmitter"},"EventEmitter"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"protocol methods can be called with ",(0,o.kt)("inlineCode",{parentName:"li"},"session.send")," method."),(0,o.kt)("li",{parentName:"ul"},"protocol events can be subscribed to with ",(0,o.kt)("inlineCode",{parentName:"li"},"session.on")," method.")),(0,o.kt)("p",null,"Useful links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Documentation on DevTools Protocol can be found here: ",(0,o.kt)("a",{parentName:"li",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol Viewer"),"."),(0,o.kt)("li",{parentName:"ul"},"Getting Started with DevTools Protocol: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"},"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"))),(0,o.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'client = page.context().new_cdp_session(page)\nclient.send("animation.enable")\nclient.on("animation.animation_created", lambda: print("animation created!"))\nresponse = client.send("animation.get_playback_rate")\nprint("playback rate is " + response["playback_rate"])\nclient.send("animation.set_playback_rate", {\n    playback_rate: response["playback_rate"] / 2\n})\n'))),(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'client = await page.context().new_cdp_session(page)\nawait client.send("animation.enable")\nclient.on("animation.animation_created", lambda: print("animation created!"))\nresponse = await client.send("animation.get_playback_rate")\nprint("playback rate is " + response["playback_rate"])\nawait client.send("animation.set_playback_rate", {\n    playback_rate: response["playback_rate"] / 2\n})\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-cdpsession#cdp-session-detach"},"cdp_session.detach()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-cdpsession#cdp-session-send"},"cdp_session.send(method, **kwargs)"))),(0,o.kt)("h2",{id:"cdp-session-detach"},"cdp_session.detach()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">")),(0,o.kt)("p",null,"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."),(0,o.kt)("h2",{id:"cdp-session-send"},"cdp_session.send(method, **kwargs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," protocol method name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">"," Optional method parameters"),(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">")))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);