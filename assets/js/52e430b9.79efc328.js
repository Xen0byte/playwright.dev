(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2505],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){"use strict";var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},41395:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(67294),a=r(80944),o=r(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var i=37,p=39;var u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,c=e.values,d=e.groupId,m=e.className,g=(0,a.Z)(),f=g.tabGroupChoices,h=g.setTabGroupChoices,y=(0,n.useState)(u),v=y[0],k=y[1],b=n.Children.toArray(e.children),w=[];if(null!=d){var T=f[d];null!=T&&T!==v&&c.some((function(e){return e.value===T}))&&k(T)}var N=function(e){var t=e.currentTarget,r=w.indexOf(t),n=c[r].value;k(n),null!=d&&(h(d,n),setTimeout((function(){var e,r,n,a,o,l,i,p;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,p=l.innerWidth,r>=0&&o<=p&&a<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,r;switch(e.keyCode){case p:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case i:var a=w.indexOf(e.target)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},m)},c.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:N,onClick:N},r)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,r){"use strict";var n=(0,r(67294).createContext)(void 0);t.Z=n},80944:function(e,t,r){"use strict";var n=r(67294),a=r(79443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},95525:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l=r(41395),s=r(58215),i={id:"test-reporters",title:"Reporters"},p={unversionedId:"test-reporters",id:"test-reporters",isDocsHomePage:!1,title:"Reporters",description:"- Using reporters",source:"@site/docs/test-reporters.mdx",sourceDirName:".",slug:"/test-reporters",permalink:"/docs/next/test-reporters",version:"current",frontMatter:{id:"test-reporters",title:"Reporters"},sidebar:"docs",previous:{title:"Visual comparisons",permalink:"/docs/next/test-snapshots"},next:{title:"Test retry",permalink:"/docs/next/test-retries"}},u=[{value:"Using reporters",id:"using-reporters",children:[]},{value:"Built-in reporters",id:"built-in-reporters",children:[{value:"List reporter",id:"list-reporter",children:[]},{value:"Line reporter",id:"line-reporter",children:[]},{value:"Dot reporter",id:"dot-reporter",children:[]},{value:"JSON reporter",id:"json-reporter",children:[]},{value:"JUnit reporter",id:"junit-reporter",children:[]}]}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-reporters"},"Using reporters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#built-in-reporters"},"Built-in reporters"))),(0,o.kt)("h2",{id:"using-reporters"},"Using reporters"),(0,o.kt)("p",null,"Playwright Test comes with a few built-in reporters for different needs and ability to provide custom reporters. The easiest way to try out built-in reporters is to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"--reporter")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/cli"},"command line option"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\n")),(0,o.kt)("p",null,"For more control, you can specify reporters programmatically in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configuration file"),"."),(0,o.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'line',\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  reporter: 'line',\n};\n")))),(0,o.kt)("p",null,"You can use different reporters locally and on CI."),(0,o.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n    // Default 'list' reporter for the terminal\n    ? 'list'\n    // Two reporters for CI:\n    // - concise \"dot\"\n    // - comprehensive json report\n    : [ ['dot'], [ 'json', {  outputFile: 'test-results.json' }] ],\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  reporter: !process.env.CI\n    // Default 'list' reporter for the terminal\n    ? 'list'\n    // Two reporters for CI:\n    // - concise \"dot\"\n    // - comprehensive json report\n    : [ ['dot'], [ 'json', {  outputFile: 'test-results.json' }] ],\n};\n")))),(0,o.kt)("h2",{id:"built-in-reporters"},"Built-in reporters"),(0,o.kt)("p",null,"All built-in reporters show detailed information about failures, and mostly differ in verbosity for successful runs."),(0,o.kt)("h3",{id:"list-reporter"},"List reporter"),(0,o.kt)("p",null,"List reporter is default. It prints a line for each test being run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=list\n")),(0,o.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'list',\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  reporter: 'list',\n};\n")))),(0,o.kt)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=list\nRunning 124 tests using 6 workers\n\n  \u2713 should access error in env (438ms)\n  \u2713 handle long test names (515ms)\n  x 1) render expected (691ms)\n  \u2713 should timeout (932ms)\n    should repeat each:\n  \u2713 should respect enclosing .gitignore (569ms)\n    should teardown env after timeout:\n    should respect excluded tests:\n  \u2713 should handle env beforeEach error (638ms)\n    should respect enclosing .gitignore:\n")),(0,o.kt)("h3",{id:"line-reporter"},"Line reporter"),(0,o.kt)("p",null,"Line reporter is more concise than the list reporter. It uses a single line to report last finished test, and prints failures when they occur. Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\n")),(0,o.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'line',\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  reporter: 'line',\n};\n")))),(0,o.kt)("p",null,"Here is an example output in the middle of a test run. Failures are reported inline."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\nRunning 124 tests using 6 workers\n  1) dot-reporter.spec.ts:20:1 \u203a render expected ===================================================\n\n    Error: expect(received).toBe(expected) // Object.is equality\n\n    Expected: 1\n    Received: 0\n\n[23/124] gitignore.spec.ts - should respect nested .gitignore\n")),(0,o.kt)("h3",{id:"dot-reporter"},"Dot reporter"),(0,o.kt)("p",null,"Dot reporter is very concise - it only produces a single character per successful test run. It is useful on CI where you don't want a lot of output."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\n")),(0,o.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'dot',\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  reporter: 'dot',\n};\n")))),(0,o.kt)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\nRunning 124 tests using 6 workers\n\xb7\xb7\xb7\xb7\xb7\xb7F\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n")),(0,o.kt)("h3",{id:"json-reporter"},"JSON reporter"),(0,o.kt)("p",null,"JSON reporter produces an object with all information about the test run. It is usually used together with some terminal reporter like ",(0,o.kt)("inlineCode",{parentName:"p"},"dot")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"line"),"."),(0,o.kt)("p",null,"Most likely you want to write the JSON to a file. When running with ",(0,o.kt)("inlineCode",{parentName:"p"},"--reporter=json"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_JSON_OUTPUT_NAME")," environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json,dot\n")),(0,o.kt)("p",null,"In configuration file, pass options directly:"),(0,o.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['json', { outputFile: 'results.json' }] ],\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  reporter: [ ['json', { outputFile: 'results.json' }] ],\n};\n")))),(0,o.kt)("h3",{id:"junit-reporter"},"JUnit reporter"),(0,o.kt)("p",null,"JUnit reporter produces a JUnit-style xml report. It is usually used together with some terminal reporter like ",(0,o.kt)("inlineCode",{parentName:"p"},"dot")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"line"),"."),(0,o.kt)("p",null,"Most likely you want to write the report to an xml file. When running with ",(0,o.kt)("inlineCode",{parentName:"p"},"--reporter=junit"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_JUNIT_OUTPUT_NAME")," environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit,line\n")),(0,o.kt)("p",null,"In configuration file, pass options directly:"),(0,o.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['junit', { outputFile: 'results.xml' }] ],\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  reporter: [ ['junit', { outputFile: 'results.xml' }] ],\n};\n")))))}d.isMDXComponent=!0},86010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);