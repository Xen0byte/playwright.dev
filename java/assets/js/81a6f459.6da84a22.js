(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8879],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7294),r=a(944),i=a(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,d=e.values,u=e.groupId,m=e.className,g=(0,r.Z)(),v=g.tabGroupChoices,f=g.setTabGroupChoices,h=(0,n.useState)(p),k=h[0],y=h[1],b=n.Children.toArray(e.children),N=[];if(null!=u){var w=v[u];null!=w&&w!==k&&d.some((function(e){return e.value===w}))&&y(w)}var j=function(e){var t=e.currentTarget,a=N.indexOf(t),n=d[a].value;y(n),null!=u&&(f(u,n),setTimeout((function(){var e,a,n,r,i,l,s,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,c=l.innerWidth,a>=0&&i<=c&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},D=function(e){var t,a;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case s:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:j,onClick:j},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1603:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=(a(1395),a(8215),{id:"class-dialog",title:"Dialog"}),o={unversionedId:"api/class-dialog",id:"version-1.11.0/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [Page.onDialog(handler) event.",source:"@site/versioned_docs/version-1.11.0/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/java/docs/1.11.0/api/class-dialog",version:"1.11.0",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"version-1.11.0/api",previous:{title:"ConsoleMessage",permalink:"/java/docs/1.11.0/api/class-consolemessage"},next:{title:"Download",permalink:"/java/docs/1.11.0/api/class-download"}},s=[{value:"Dialog.accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"Dialog.defaultValue()",id:"dialogdefaultvalue",children:[]},{value:"Dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"Dialog.message()",id:"dialogmessage",children:[]},{value:"Dialog.type()",id:"dialogtype",children:[]}],c={toc:s};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-page#pageondialoghandler"},"Page.onDialog(handler)")," event."),(0,i.kt)("p",null,"An example of using ",(0,i.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.onDialog(dialog -> {\n        System.out.println(dialog.message());\n        dialog.dismiss();\n      });\n      page.evaluate(\"alert('1')\");\n      browser.close();\n    }\n  }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-page#pageondialoghandler"},"Page.onDialog(handler)")," listener. When listener is present, it ",(0,i.kt)("strong",{parentName:"p"},"must")," either ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-dialog#dialogacceptprompttext"},"Dialog.accept([promptText])")," or ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-dialog#dialogdismiss"},"Dialog.dismiss()")," the dialog - otherwise the page will ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"},"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-dialog#dialogacceptprompttext"},"Dialog.accept([promptText])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-dialog#dialogdefaultvalue"},"Dialog.defaultValue()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-dialog#dialogdismiss"},"Dialog.dismiss()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-dialog#dialogmessage"},"Dialog.message()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-dialog#dialogtype"},"Dialog.type()"))),(0,i.kt)("h2",{id:"dialogacceptprompttext"},"Dialog.accept(","[promptText]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promptText")," <",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional."),(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,i.kt)("p",null,"Returns when the dialog has been accepted."),(0,i.kt)("h2",{id:"dialogdefaultvalue"},"Dialog.defaultValue()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,i.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,i.kt)("h2",{id:"dialogdismiss"},"Dialog.dismiss()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,i.kt)("p",null,"Returns when the dialog has been dismissed."),(0,i.kt)("h2",{id:"dialogmessage"},"Dialog.message()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,i.kt)("p",null,"A message displayed in the dialog."),(0,i.kt)("h2",{id:"dialogtype"},"Dialog.type()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,i.kt)("p",null,"Returns dialog's type, can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}p.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);