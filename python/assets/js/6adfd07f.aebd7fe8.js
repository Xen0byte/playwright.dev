(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4111],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),i=r(944),a=r(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,f=e.values,p=e.groupId,m=e.className,d=(0,i.Z)(),y=d.tabGroupChoices,v=d.setTabGroupChoices,h=(0,n.useState)(c),b=h[0],g=h[1],w=n.Children.toArray(e.children),O=[];if(null!=p){var k=y[p];null!=k&&k!==b&&f.some((function(e){return e.value===k}))&&g(k)}var x=function(e){var t=e.currentTarget,r=O.indexOf(t),n=f[r].value;g(n),null!=p&&(v(p,n),setTimeout((function(){var e,r,n,i,a,o,l,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,i=e.bottom,a=e.right,o=window,l=o.innerHeight,u=o.innerWidth,r>=0&&a<=u&&i<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},P=function(e){var t,r;switch(e.keyCode){case u:var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case l:var i=O.indexOf(e.target)-1;r=O[i]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},m)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:x,onClick:x},r)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),i=r(9443);t.Z=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},663:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=(r(1395),r(8215),{id:"test-retries",title:"Test retry"}),s={unversionedId:"test-retries",id:"version-1.12.0/test-retries",isDocsHomePage:!1,title:"Test retry",description:"Playwright Test will retry tests if they failed. Pass the maximum number of retries when running the tests, or set them in the configuration file.",source:"@site/versioned_docs/version-1.12.0/test-retries.mdx",sourceDirName:".",slug:"/test-retries",permalink:"/python/docs/test-retries",version:"1.12.0",frontMatter:{id:"test-retries",title:"Test retry"}},l=[],u={toc:l};function c(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright Test will retry tests if they failed. Pass the maximum number of retries when running the tests, or set them in the ",(0,a.kt)("a",{parentName:"p",href:"/python/docs/test-configuration"},"configuration file"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --retries=3\n")),(0,a.kt)("p",null,"Failing tests will be retried multiple times until they pass, or until the maximum number of retries is reached. Playwright Test will report all tests that failed at least once."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Running 1 test using 1 worker\n\xd7\xd7\xb1\n1 flaky\n  1) my.test.js:1:1\n")))}c.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})}}]);