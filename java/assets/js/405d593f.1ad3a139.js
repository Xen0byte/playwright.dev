(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1812],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),f=n,d=c["".concat(u,".").concat(f)]||c[f]||m[f]||l;return a?r.createElement(d,i(i({ref:t},s),{},{components:a})):r.createElement(d,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(7294),n=a(944),l=a(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,p=39;var s=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,m=e.values,c=e.groupId,f=e.className,d=(0,n.Z)(),h=d.tabGroupChoices,k=d.setTabGroupChoices,v=(0,r.useState)(s),g=v[0],y=v[1],b=r.Children.toArray(e.children),N=[];if(null!=c){var w=h[c];null!=w&&w!==g&&m.some((function(e){return e.value===w}))&&y(w)}var j=function(e){var t=e.currentTarget,a=N.indexOf(t),r=m[a].value;y(r),null!=c&&(k(c,r),setTimeout((function(){var e,a,r,n,l,i,u,p;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,l=e.right,i=window,u=i.innerHeight,p=i.innerWidth,a>=0&&l<=p&&n<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case p:var r=N.indexOf(e.target)+1;a=N[r]||N[0];break;case u:var n=N.indexOf(e.target)-1;a=N[n]||N[N.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},f)},m.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:j,onClick:j},a)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){"use strict";var r=(0,a(7294).createContext)(void 0);t.Z=r},944:function(e,t,a){"use strict";var r=a(7294),n=a(9443);t.Z=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8389:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i=(a(1395),a(8215),{id:"cheat-sheet",title:"Cheat Sheet"}),o={unversionedId:"cheat-sheet",id:"cheat-sheet",isDocsHomePage:!1,title:"Cheat Sheet",description:"- Download & Upload",source:"@site/docs/cheat-sheet.mdx",sourceDirName:".",slug:"/cheat-sheet",permalink:"/java/docs/next/cheat-sheet",version:"current",frontMatter:{id:"cheat-sheet",title:"Cheat Sheet"},sidebar:"docs",previous:{title:"Test Runners",permalink:"/java/docs/next/test-runners"},next:{title:"Auto-waiting",permalink:"/java/docs/next/actionability"}},u=[{value:"Download &amp; Upload",id:"download--upload",children:[{value:"Download file",id:"download-file",children:[]},{value:"Upload file",id:"upload-file",children:[]},{value:"Upload multiple files",id:"upload-multiple-files",children:[]},{value:"Upload from memory",id:"upload-from-memory",children:[]},{value:"Remove selected files",id:"remove-selected-files",children:[]},{value:"Handle file picker",id:"handle-file-picker",children:[]}]},{value:"Manage &lt;iframe&gt;s",id:"manage-iframes",children:[{value:"List frames",id:"list-frames",children:[]},{value:"Frame by <code>name</code> attribute",id:"frame-by-name-attribute",children:[]},{value:"Frame by URL",id:"frame-by-url",children:[]},{value:"Frame by selector",id:"frame-by-selector",children:[]}]}],p={toc:u};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#download--upload"},"Download & Upload"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#download-file"},"Download file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-file"},"Upload file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-multiple-files"},"Upload multiple files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-from-memory"},"Upload from memory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#remove-selected-files"},"Remove selected files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#handle-file-picker"},"Handle file picker")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#manage-60iframe62s"},"Manage ","<","iframe",">","s"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#list-frames"},"List frames")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#frame-by-name-attribute"},"Frame by ",(0,l.kt)("inlineCode",{parentName:"a"},"name")," attribute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#frame-by-url"},"Frame by URL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#frame-by-selector"},"Frame by selector"))))),(0,l.kt)("h2",{id:"download--upload"},"Download & Upload"),(0,l.kt)("h3",{id:"download-file"},"Download file"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/java/docs/next/downloads"},"Learn more")),(0,l.kt)("h3",{id:"upload-file"},"Upload file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'page.setInputFiles("input#upload", Paths.get("myfile.pdf"));\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"upload-multiple-files"},"Upload multiple files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'page.setInputFiles("input#upload", new Path[] {Paths.get("file1.txt"), Paths.get("file2.txt")});\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"upload-from-memory"},"Upload from memory"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'page.setInputFiles("input#upload", new FilePayload(\n  "file.txt", "text/plain", "this is test".getBytes(StandardCharsets.UTF_8)));\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"remove-selected-files"},"Remove selected files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'page.setInputFiles("input#upload", new Path[0]);\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"handle-file-picker"},"Handle file picker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'FileChooser fileChooser = page.waitForFileChooser(() -> {\n  page.click("upload");\n});\nfileChooser.setFiles(Paths.get("myfile.pdf"));\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h2",{id:"manage-iframes"},"Manage ","<","iframe",">","s"),(0,l.kt)("h3",{id:"list-frames"},"List frames"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Frame> frames = page.frames();\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,l.kt)("h3",{id:"frame-by-name-attribute"},"Frame by ",(0,l.kt)("inlineCode",{parentName:"h3"},"name")," attribute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Frame frame = page.frame("frame-login");\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,l.kt)("h3",{id:"frame-by-url"},"Frame by URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Frame frame = page.frameByUrl(Pattern.compile(".*domain.*"));\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,l.kt)("h3",{id:"frame-by-selector"},"Frame by selector"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ElementHandle frameElementHandle = page.querySelector(".frame-class");\nFrame frame = frameElementHandle.contentFrame();\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")))}s.isMDXComponent=!0},6010:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);