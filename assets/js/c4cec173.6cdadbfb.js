(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6579],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(67294),r=n(80944),s=n(86010),i="tabItem_1uMI",o="tabItemActive_2DSg";var l=37,p=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,c=e.values,m=e.groupId,d=e.className,f=(0,r.Z)(),h=f.tabGroupChoices,k=f.setTabGroupChoices,g=(0,a.useState)(u),b=g[0],v=g[1],y=a.Children.toArray(e.children),N=[];if(null!=m){var w=h[m];null!=w&&w!==b&&c.some((function(e){return e.value===w}))&&v(w)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=c[n].value;v(a),null!=m&&(k(m,a),setTimeout((function(){var e,n,a,r,s,i,l,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,s=e.right,i=window,l=i.innerHeight,p=i.innerWidth,n>=0&&s<=p&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case p:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case l:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},d)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},75723:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),i=n(41395),o=n(58215),l={id:"test-advanced",title:"Advanced: configuration"},p={unversionedId:"test-advanced",id:"test-advanced",isDocsHomePage:!1,title:"Advanced: configuration",description:"- Configuration object",source:"@site/docs/test-advanced.mdx",sourceDirName:".",slug:"/test-advanced",permalink:"/docs/next/test-advanced",version:"current",frontMatter:{id:"test-advanced",title:"Advanced: configuration"},sidebar:"docs",previous:{title:"Advanced: fixtures",permalink:"/docs/next/test-fixtures"},next:{title:"Advanced: command line",permalink:"/docs/next/test-cli"}},u=[{value:"Configuration object",id:"configuration-object",children:[{value:"Test suite options",id:"test-suite-options",children:[]},{value:"Test run options",id:"test-run-options",children:[]}]},{value:"workerInfo object",id:"workerinfo-object",children:[]},{value:"testInfo object",id:"testinfo-object",children:[]},{value:"Global setup and teardown",id:"global-setup-and-teardown",children:[]},{value:"Projects",id:"projects",children:[]},{value:"Add custom matchers using expect.extend",id:"add-custom-matchers-using-expectextend",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#configuration-object"},"Configuration object")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#workerinfo-object"},"workerInfo object")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#testinfo-object"},"testInfo object")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#global-setup-and-teardown"},"Global setup and teardown")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#projects"},"Projects")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#add-custom-matchers-using-expectextend"},"Add custom matchers using expect.extend"))),(0,s.kt)("h2",{id:"configuration-object"},"Configuration object"),(0,s.kt)("p",null,"Configuration file exports a single object."),(0,s.kt)("h3",{id:"test-suite-options"},"Test suite options"),(0,s.kt)("p",null,"These options define your test suite:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"metadata: any")," - Any JSON-serializable metadata that will be put directly to the test report."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name: string")," - Project name, useful when defining multiple ",(0,s.kt)("a",{parentName:"li",href:"#projects"},"test projects"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"outputDir: string")," - Output directory for files created during the test run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"repeatEach: number")," - The number of times to repeat each test, useful for debugging flaky tests."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"retries: number")," - The maximum number of retry attempts given to failed tests."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"testDir: string")," - Directory that will be recursively scanned for test files."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"testIgnore: string | RegExp | (string | RegExp)[]")," - Files matching one of these patterns are not considered test files."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"testMatch: string | RegExp | (string | RegExp)[]")," - Only the files matching one of these patterns are considered test files."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout: number")," - Timeout for each test in milliseconds."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"use")," - An object defining fixture options.")),(0,s.kt)("h3",{id:"test-run-options"},"Test run options"),(0,s.kt)("p",null,"These options would be typically different between local development and CI operation:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"forbidOnly: boolean")," - Whether to exit with an error if any tests are marked as ",(0,s.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"globalSetup: string")," - Path to the ",(0,s.kt)("a",{parentName:"li",href:"#global-setup-and-teardown"},"global setup")," file. This file will be required and run before all the tests. It must export a single function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"globalTeardown: string")," - Path to the ",(0,s.kt)("a",{parentName:"li",href:"#global-setup-and-teardown"},"global teardown")," file. This file will be required and run after all the tests. It must export a single function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"globalTimeout: number")," - Total timeout in milliseconds for the whole test run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"grep: RegExp | RegExp[]")," - Patterns to filter tests based on their title."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"maxFailures: number")," - The maximum number of test failures for this test run. After reaching this number, testing will stop and exit with an error. Setting to zero (default) disables this behavior."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"preserveOutput: 'always' | 'never' | 'failures-only'")," - Whether to preserve test output in the ",(0,s.kt)("inlineCode",{parentName:"li"},"outputDir"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"'always'")," - preserve output for all tests;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"'never'")," - do not preserve output for any tests;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"'failures-only'")," - only preserve output for failed tests."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"projects: Project[]")," - Multiple ",(0,s.kt)("a",{parentName:"li",href:"#projects"},"projects")," configuration."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"reporter: 'list' | 'line' | 'dot' | 'json' | 'junit'")," - The reporter to use. See ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/test-reporters"},"reporters")," for details."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"quiet: boolean")," - Whether to suppress stdout and stderr from the tests."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"shard: { total: number, current: number } | null")," - ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/test-parallel#shards"},"Shard")," information."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"updateSnapshots: boolean")," - Whether to update expected snapshots with the actual results produced by the test run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"workers: number")," - The maximum number of concurrent worker processes to use for parallelizing tests.")),(0,s.kt)("p",null,"Note that each ",(0,s.kt)("a",{parentName:"p",href:"#projects"},"test project")," can provide its own test suite options, for example two projects can run different tests by providing different ",(0,s.kt)("inlineCode",{parentName:"p"},"testDir"),"s. However, test run options are shared between all projects."),(0,s.kt)("h2",{id:"workerinfo-object"},"workerInfo object"),(0,s.kt)("p",null,"Depending on the configuration and failures, Playwright Test might use different number of worker processes to run all the tests. For example, Playwright Test will always start a new worker process after a failing test."),(0,s.kt)("p",null,"Worker-scoped fixtures and ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks receive ",(0,s.kt)("inlineCode",{parentName:"p"},"workerInfo")," parameter. The following information is accessible from the ",(0,s.kt)("inlineCode",{parentName:"p"},"workerInfo"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"config")," - ",(0,s.kt)("a",{parentName:"li",href:"#configuration-object"},"Configuration object"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"project")," - Specific ",(0,s.kt)("a",{parentName:"li",href:"#projects"},"project")," configuration for this worker. Different projects are always run in separate processes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"workerIndex: number")," - A unique sequential index assigned to the worker process.")),(0,s.kt)("p",null,"Consider an example where we run a new http server per worker process, and use ",(0,s.kt)("inlineCode",{parentName:"p"},"workerIndex")," to produce a unique port number:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.ts\nimport { test as base } from '@playwright/test';\nimport * as http from 'http';\n\n// Note how we mark the fixture as { scope: 'worker' }.\n// Also note that we pass empty {} first, since we do not declare any test fixtures.\nexport const test = base.extend<{}, { server: http.Server }>({\n  server: [ async ({}, use, workerInfo) => {\n    // Start the server.\n    const server = http.createServer();\n    server.listen(9000 + workerInfo.workerIndex);\n    await new Promise(ready => server.once('listening', ready));\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    await new Promise(done => server.close(done));\n  }, { scope: 'worker' } ]\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst base = require('@playwright/test');\nconst http = require('http');\n\n// Note how we mark the fixture as { scope: 'worker' }.\n// Also note that we pass empty {} first, since we do not declare any test fixtures.\nexports.test = base.test.extend<{}, { server: http.Server }>({\n  server: [ async ({}, use, workerInfo) => {\n    // Start the server.\n    const server = http.createServer();\n    server.listen(9000 + workerInfo.workerIndex);\n    await new Promise(ready => server.once('listening', ready));\n\n    // Use the server in the tests.\n    await use(server);\n\n    // Cleanup.\n    await new Promise(done => server.close(done));\n  }, { scope: 'worker' } ]\n});\n")))),(0,s.kt)("h2",{id:"testinfo-object"},"testInfo object"),(0,s.kt)("p",null,"Test fixtures and ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"afterEach")," hooks receive ",(0,s.kt)("inlineCode",{parentName:"p"},"testInfo")," parameter. It is also available to the test function as a second parameter."),(0,s.kt)("p",null,"In addition to everything from the ",(0,s.kt)("a",{parentName:"p",href:"#workerinfo"},(0,s.kt)("inlineCode",{parentName:"a"},"workerInfo")),", the following information is accessible before and during the test:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"title: string")," - Test title."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"file: string")," - Full path to the test file."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"line: number")," - Line number of the test declaration."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"column: number")," - Column number of the test declaration."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"fn: Function")," - Test body function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"repeatEachIndex: number")," - The sequential repeat index."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"retry: number")," - The sequential number of the test retry (zero means first run)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expectedStatus: 'passed' | 'failed' | 'timedOut'")," - Whether this test is expected to pass, fail or timeout."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timeout: number")," - Test timeout."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"annotations")," - ",(0,s.kt)("a",{parentName:"li",href:"/docs/next/test-annotations"},"Annotations")," that were added to the test."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snapshotSuffix: string")," - Suffix used to locate snapshots for the test."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"snapshotPath(snapshotName: string)")," - Function that returns the full path to a particular snapshot for the test."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"outputDir: string")," - Absolute path to the output directory for this test run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"outputPath(...pathSegments: string[])")," - Function that returns the full path to a particular output artifact for the test.")),(0,s.kt)("p",null,"The following information is accessible after the test body has finished, in fixture teardown:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"duration: number")," - test running time in milliseconds."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"status: 'passed' | 'failed' | 'timedOut'")," - the actual test result."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"error")," - any error thrown by the test body."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"stdout: (string | Buffer)[]")," - array of stdout chunks collected during the test run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"stderr: (string | Buffer)[]")," - array of stderr chunks collected during the test run.")),(0,s.kt)("p",null,"Here is an example test that saves some information:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test } from '@playwright/test';\n\ntest('my test needs a file', async ({ table }, testInfo) => {\n  // Do something with the table...\n  // ... and then save contents.\n  const filePath = testInfo.outputPath('table.dat');\n  await table.saveTo(filePath);\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test } = require('@playwright/test');\n\ntest('my test needs a file', async ({ table }, testInfo) => {\n  // Do something with the table...\n  // ... and then save contents.\n  const filePath = testInfo.outputPath('table.dat');\n  await table.saveTo(filePath);\n});\n")))),(0,s.kt)("p",null,"Here is an example fixture that automatically saves debug logs when the test fails:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.ts\nimport * as debug from 'debug';\nimport * as fs from 'fs';\nimport { test as base } from '@playwright/test';\n\n// Note how we mark the fixture as { auto: true }.\n// This way it is always instantiated, even if the test does not use it explicitly.\nexport const test = base.extend<{ saveLogs: void }>({\n  saveLogs: [ async ({}, use, testInfo) => {\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('mycomponent');\n\n    await use();\n\n    if (testInfo.status !== testInfo.expectedStatus)\n      fs.writeFileSync(testInfo.outputPath('logs.txt'), logs.join('\\n'), 'utf8');\n  }, { auto: true } ]\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst debug = require('debug');\nconst fs = require('fs');\nconst base = require('@playwright/test');\n\n// Note how we mark the fixture as { auto: true }.\n// This way it is always instantiated, even if the test does not use it explicitly.\nexports.test = base.test.extend<{ saveLogs: void }>({\n  saveLogs: [ async ({}, use, testInfo) => {\n    const logs = [];\n    debug.log = (...args) => logs.push(args.map(String).join(''));\n    debug.enable('mycomponent');\n\n    await use();\n\n    if (testInfo.status !== testInfo.expectedStatus)\n      fs.writeFileSync(testInfo.outputPath('logs.txt'), logs.join('\\n'), 'utf8');\n  }, { auto: true } ]\n});\n")))),(0,s.kt)("h2",{id:"global-setup-and-teardown"},"Global setup and teardown"),(0,s.kt)("p",null,"To set something up once before running all tests, use ",(0,s.kt)("inlineCode",{parentName:"p"},"globalSetup")," option in the ",(0,s.kt)("a",{parentName:"p",href:"#configuration-object"},"configuration file"),"."),(0,s.kt)("p",null,"Similarly, use ",(0,s.kt)("inlineCode",{parentName:"p"},"globalTeardown")," to run something once after all the tests. Alternatively, let ",(0,s.kt)("inlineCode",{parentName:"p"},"globalSetup")," return a function that will be used as a global teardown."),(0,s.kt)("p",null,"Here is a global setup example that runs an app."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.ts\nimport app from './my-app';\nimport * as http from 'http';\n\nasync function globalSetup() {\n  const server = http.createServer(app);\n  await new Promise(done => server.listen(done));\n\n  // Expose port to the tests.\n  process.env.SERVER_PORT = String(server.address().port);\n\n  // Return the teardown function.\n  return async () => {\n    await new Promise(done => server.close(done));\n  };\n}\nexport default globalSetup;\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// global-setup.js\nconst app = require('./my-app');\n\nmodule.exports = async () => {\n  const server = require('http').createServer(app);\n  await new Promise(done => server.listen(done));\n\n  // Expose port to the tests.\n  process.env.SERVER_PORT = String(server.address().port);\n\n  // Return the teardown function.\n  return async () => {\n    await new Promise(done => server.close(done));\n  };\n};\n")))),(0,s.kt)("p",null,"Now add ",(0,s.kt)("inlineCode",{parentName:"p"},"globalSetup")," option to the configuration file."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalSetup: require.resolve('./global-setup'),\n};\nexport default config;\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.export = {\n  globalSetup: require.resolve('./global-setup'),\n};\n")))),(0,s.kt)("h2",{id:"projects"},"Projects"),(0,s.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. This is useful for running the same tests in multiple configurations. For example, consider running tests against multiple versions of some REST backend."),(0,s.kt)("p",null,'To make use of this feature, we will declare an "option fixture" for the backend version, and use it in the tests.'),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.ts\nimport { test as base } from '@playwright/test';\nimport { startBackend } from './my-backend';\n\nexport const test = base.extend<{ version: string, backendUrl: string }>({\n  // Default value for the version.\n  version: '1.0',\n\n  // Use version when starting the backend.\n  backendUrl: async ({ version }, use) => {\n    const app = await startBackend(version);\n    await use(app.baseUrl());\n    await app.close();\n  },\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// my-test.js\nconst base = require('@playwright/test');\nconst { startBackend } = require('./my-backend');\n\nexports.test = base.test.extend<{ version: string, backendUrl: string }>({\n  // Default value for the version.\n  version: '1.0',\n\n  // Use version when starting the backend.\n  backendUrl: async ({ version }, use) => {\n    const app = await startBackend(version);\n    await use(app.baseUrl());\n    await app.close();\n  },\n});\n")))),(0,s.kt)("p",null,"We can use our fixtures in the test."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test } from './my-test';\n\ntest('test 1', async ({ page, backendUrl }) => {\n  await page.goto(`${backendUrl}/index.html`);\n  // ...\n});\n\ntest('test 2', async ({ version, page, backendUrl }) => {\n  test.fixme(version === '2.0', 'This feature is not implemented in 2.0 yet');\n\n  await page.goto(`${backendUrl}/index.html`);\n  // ...\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test } = require('./my-test');\n\ntest('test 1', async ({ page, backendUrl }) => {\n  await page.goto(`${backendUrl}/index.html`);\n  // ...\n});\n\ntest('test 2', async ({ version, page, backendUrl }) => {\n  test.fixme(version === '2.0', 'This feature is not implemented in 2.0 yet');\n\n  await page.goto(`${backendUrl}/index.html`);\n  // ...\n});\n")))),(0,s.kt)("p",null,"Now, we can run test in multiple configurations by using projects."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  timeout: 20000,\n  projects: [\n    {\n      name: 'v1',\n      use: { version: '1.0' },\n    },\n    {\n      name: 'v2',\n      use: { version: '2.0' },\n    },\n  ]\n};\nexport default config;\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  timeout: 20000,\n  projects: [\n    {\n      name: 'v1',\n      use: { version: '1.0' },\n    },\n    {\n      name: 'v2',\n      use: { version: '2.0' },\n    },\n  ]\n};\n")))),(0,s.kt)("p",null,"Each project can be configured separately, and run different set of tests with different parameters. See ",(0,s.kt)("a",{parentName:"p",href:"#test-suite-options"},"test suite options")," for the list of options available to each project."),(0,s.kt)("p",null,"You can run all projects or just a single one:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Run both projects - each test will be run twice\nnpx playwright test\n\n# Run a single project - each test will be run once\nnpx playwright test --project=v2\n")),(0,s.kt)("h2",{id:"add-custom-matchers-using-expectextend"},"Add custom matchers using expect.extend"),(0,s.kt)("p",null,"Playwright Test uses ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},(0,s.kt)("inlineCode",{parentName:"a"},"expect")," library")," under the hood which has the functionality to extend it with ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect#expectextendmatchers"},"custom matchers"),"."),(0,s.kt)("p",null,"In this example we add a custom ",(0,s.kt)("inlineCode",{parentName:"p"},"toBeWithinRange")," function in the configuration file."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { expect, PlaywrightTestConfig } from '@playwright/test';\n\nexpect.extend({\n  toBeWithinRange(received: number, floor: number, ceiling: number) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () => 'passed',\n        pass: true,\n      };\n    } else {\n      return {\n        message: () => 'failed',\n        pass: false,\n      };\n    }\n  },\n});\n\nconst config: PlaywrightTestConfig = {};\nexport default config;\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nconst { expect } = require('@playwright/test');\n\nexpect.extend({\n  toBeWithinRange(received: number, floor: number, ceiling: number) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () => 'passed',\n        pass: true,\n      };\n    } else {\n      return {\n        message: () => 'failed',\n        pass: false,\n      };\n    }\n  },\n});\n\nmodule.exports = {};\n")))),(0,s.kt)("p",null,"Now we can use ",(0,s.kt)("inlineCode",{parentName:"p"},"toBeWithinRange")," in the test."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('numeric ranges', () => {\n  expect(100).toBeWithinRange(90, 110);\n  expect(101).not.toBeWithinRange(0, 100);\n});\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('numeric ranges', () => {\n  expect(100).toBeWithinRange(90, 110);\n  expect(101).not.toBeWithinRange(0, 100);\n});\n")))),(0,s.kt)("p",null,"For TypeScript, also add the following to ",(0,s.kt)("inlineCode",{parentName:"p"},"global.d.ts"),". You don't need it for JavaScript."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// global.d.ts\ndeclare namespace PlaywrightTest {\n  interface Matchers<R> {\n    toBeWithinRange(a: number, b: number): R;\n  }\n}\n")))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);