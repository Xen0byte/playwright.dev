(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4845],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,v=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return r?n.createElement(v,a(a({ref:t},d),{},{components:r})):n.createElement(v,a({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";r(7294)},1395:function(e,t,r){"use strict";r(7294),r(944)},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),i=r(9443);t.Z=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6212:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=(r(1395),r(8215),{id:"class-video",title:"Video"}),s={unversionedId:"api/class-video",id:"api/class-video",isDocsHomePage:!1,title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/docs/api/class-video.mdx",sourceDirName:"api",slug:"/api/class-video",permalink:"/dotnet/docs/next/api/class-video",version:"current",frontMatter:{id:"class-video",title:"Video"},sidebar:"api",previous:{title:"Tracing",permalink:"/dotnet/docs/next/api/class-tracing"},next:{title:"WebSocket",permalink:"/dotnet/docs/next/api/class-websocket"}},l=[{value:"Video.DeleteAsync()",id:"video-delete",children:[]},{value:"Video.PathAsync()",id:"video-path",children:[]},{value:"Video.SaveAsAsync(path)",id:"video-save-as",children:[]}],c={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When browser context is created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"recordVideo")," option, each page has a video object associated with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"Console.WriteLine(await page.Video.GetPathAsync());\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-video#video-delete"},"Video.DeleteAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-video#video-path"},"Video.PathAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-video#video-save-as"},"Video.SaveAsAsync(path)"))),(0,o.kt)("h2",{id:"video-delete"},"Video.DeleteAsync()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,o.kt)("p",null,"Deletes the video file. Will wait for the video to finish if necessary."),(0,o.kt)("h2",{id:"video-path"},"Video.PathAsync()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,o.kt)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."),(0,o.kt)("h2",{id:"video-save-as"},"Video.SaveAsAsync(path)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Path where the video should be saved."),(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,o.kt)("p",null,"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."))}d.isMDXComponent=!0}}]);