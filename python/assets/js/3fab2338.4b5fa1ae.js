(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6192],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8215:function(e,r,t){"use strict";var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},1395:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(7294),a=t(944),o=t(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var r=e.lazy,t=e.block,u=e.defaultValue,p=e.values,f=e.groupId,m=e.className,d=(0,a.Z)(),h=d.tabGroupChoices,y=d.setTabGroupChoices,v=(0,n.useState)(u),g=v[0],b=v[1],k=n.Children.toArray(e.children),w=[];if(null!=f){var O=h[f];null!=O&&O!==g&&p.some((function(e){return e.value===O}))&&b(O)}var x=function(e){var r=e.currentTarget,t=w.indexOf(r),n=p[t].value;b(n),null!=f&&(y(f,n),setTimeout((function(){var e,t,n,a,o,i,l,c;(e=r.getBoundingClientRect(),t=e.top,n=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,t>=0&&o<=c&&a<=l&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},N=function(e){var r,t;switch(e.keyCode){case c:var n=w.indexOf(e.target)+1;t=w[n]||w[0];break;case l:var a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},p.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:g===r?0:-1,"aria-selected":g===r,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===r}),key:r,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:x,onClick:x},t)}))),r?(0,n.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==g})}))))}},9443:function(e,r,t){"use strict";var n=(0,t(7294).createContext)(void 0);r.Z=n},944:function(e,r,t){"use strict";var n=t(7294),a=t(9443);r.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4026:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=(t(1395),t(8215),{id:"class-error",title:"Error"}),s={unversionedId:"api/class-error",id:"version-1.11.0/api/class-error",isDocsHomePage:!1,title:"Error",description:"* extends: [Exception]",source:"@site/versioned_docs/version-1.11.0/api/class-error.mdx",sourceDirName:"api",slug:"/api/class-error",permalink:"/python/docs/1.11.0/api/class-error",version:"1.11.0",frontMatter:{id:"class-error",title:"Error"},sidebar:"version-1.11.0/api",previous:{title:"ElementHandle",permalink:"/python/docs/1.11.0/api/class-elementhandle"},next:{title:"FileChooser",permalink:"/python/docs/1.11.0/api/class-filechooser"}},l=[{value:"error.message",id:"errormessage",children:[]},{value:"error.name",id:"errorname",children:[]},{value:"error.stack",id:"errorstack",children:[]}],c={toc:l};function u(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/exceptions.html#Exception",title:"Exception"},"Exception"))),(0,o.kt)("p",null,"Error is raised whenever certain operations are terminated abnormally, e.g. browser closes while ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/api/class-page#pageevaluateexpression-kwargs"},"page.evaluate(expression, **kwargs)")," is running. All Playwright exceptions inherit from this class."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-error#errormessage"},"error.message")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-error#errorname"},"error.name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-error#errorstack"},"error.stack"))),(0,o.kt)("h2",{id:"errormessage"},"error.message"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,o.kt)("p",null,"Message of the error."),(0,o.kt)("h2",{id:"errorname"},"error.name"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,o.kt)("p",null,"Name of the error which got thrown inside the browser. Optional."),(0,o.kt)("h2",{id:"errorstack"},"error.stack"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,o.kt)("p",null,"Stack of the error which got thrown inside the browser. Optional."))}u.isMDXComponent=!0},6010:function(e,r,t){"use strict";function n(e){var r,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(a&&(a+=" "),a+=t);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function a(){for(var e,r,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(a&&(a+=" "),a+=r);return a}t.d(r,{Z:function(){return a}})}}]);