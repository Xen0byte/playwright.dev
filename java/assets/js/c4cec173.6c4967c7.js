(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6579],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(944),i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,c=e.values,d=e.groupId,m=e.className,f=(0,a.Z)(),h=f.tabGroupChoices,k=f.setTabGroupChoices,N=(0,r.useState)(p),g=N[0],b=N[1],v=r.Children.toArray(e.children),w=[];if(null!=d){var y=h[d];null!=y&&y!==g&&c.some((function(e){return e.value===y}))&&b(y)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),r=c[n].value;b(r),null!=d&&(k(d,r),setTimeout((function(){var e,n,r,a,i,o,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case s:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},c.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5723:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"test-advanced",title:"Advanced: configuration"}),l={unversionedId:"test-advanced",id:"test-advanced",isDocsHomePage:!1,title:"Advanced: configuration",description:"- Configuration object",source:"@site/docs/test-advanced.mdx",sourceDirName:".",slug:"/test-advanced",permalink:"/java/docs/next/test-advanced",version:"current",frontMatter:{id:"test-advanced",title:"Advanced: configuration"}},s=[{value:"Configuration object",id:"configuration-object",children:[{value:"Test suite options",id:"test-suite-options",children:[]},{value:"Test run options",id:"test-run-options",children:[]}]},{value:"workerInfo object",id:"workerinfo-object",children:[]},{value:"testInfo object",id:"testinfo-object",children:[]},{value:"Global setup and teardown",id:"global-setup-and-teardown",children:[]},{value:"Projects",id:"projects",children:[]},{value:"Add custom matchers using expect.extend",id:"add-custom-matchers-using-expectextend",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-object"},"Configuration object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#workerinfo-object"},"workerInfo object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#testinfo-object"},"testInfo object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#global-setup-and-teardown"},"Global setup and teardown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#projects"},"Projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#add-custom-matchers-using-expectextend"},"Add custom matchers using expect.extend"))),(0,i.kt)("h2",{id:"configuration-object"},"Configuration object"),(0,i.kt)("p",null,"Configuration file exports a single object."),(0,i.kt)("h3",{id:"test-suite-options"},"Test suite options"),(0,i.kt)("p",null,"These options define your test suite:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata: any")," - Any JSON-serializable metadata that will be put directly to the test report."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name: string")," - Project name, useful when defining multiple ",(0,i.kt)("a",{parentName:"li",href:"#projects"},"test projects"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outputDir: string")," - Output directory for files created during the test run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repeatEach: number")," - The number of times to repeat each test, useful for debugging flaky tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retries: number")," - The maximum number of retry attempts given to failed tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testDir: string")," - Directory that will be recursively scanned for test files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testIgnore: string | RegExp | (string | RegExp)[]")," - Files matching one of these patterns are not considered test files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testMatch: string | RegExp | (string | RegExp)[]")," - Only the files matching one of these patterns are considered test files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout: number")," - Timeout for each test in milliseconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"use")," - An object defining fixture options.")),(0,i.kt)("h3",{id:"test-run-options"},"Test run options"),(0,i.kt)("p",null,"These options would be typically different between local development and CI operation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"forbidOnly: boolean")," - Whether to exit with an error if any tests are marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"globalSetup: string")," - Path to the ",(0,i.kt)("a",{parentName:"li",href:"#global-setup-and-teardown"},"global setup")," file. This file will be required and run before all the tests. It must export a single function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"globalTeardown: string")," - Path to the ",(0,i.kt)("a",{parentName:"li",href:"#global-setup-and-teardown"},"global teardown")," file. This file will be required and run after all the tests. It must export a single function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"globalTimeout: number")," - Total timeout in milliseconds for the whole test run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"grep: RegExp | RegExp[]")," - Patterns to filter tests based on their title."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxFailures: number")," - The maximum number of test failures for this test run. After reaching this number, testing will stop and exit with an error. Setting to zero (default) disables this behavior."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preserveOutput: 'always' | 'never' | 'failures-only'")," - Whether to preserve test output in the ",(0,i.kt)("inlineCode",{parentName:"li"},"outputDir"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'always'")," - preserve output for all tests;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'never'")," - do not preserve output for any tests;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'failures-only'")," - only preserve output for failed tests."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"projects: Project[]")," - Multiple ",(0,i.kt)("a",{parentName:"li",href:"#projects"},"projects")," configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reporter: 'list' | 'line' | 'dot' | 'json' | 'junit'")," - The reporter to use. See ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/test-reporters"},"reporters")," for details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quiet: boolean")," - Whether to suppress stdout and stderr from the tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shard: { total: number, current: number } | null")," - ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/test-parallel#shards"},"Shard")," information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updateSnapshots: boolean")," - Whether to update expected snapshots with the actual results produced by the test run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"workers: number")," - The maximum number of concurrent worker processes to use for parallelizing tests.")),(0,i.kt)("p",null,"Note that each ",(0,i.kt)("a",{parentName:"p",href:"#projects"},"test project")," can provide its own test suite options, for example two projects can run different tests by providing different ",(0,i.kt)("inlineCode",{parentName:"p"},"testDir"),"s. However, test run options are shared between all projects."),(0,i.kt)("h2",{id:"workerinfo-object"},"workerInfo object"),(0,i.kt)("p",null,"Depending on the configuration and failures, Playwright Test might use different number of worker processes to run all the tests. For example, Playwright Test will always start a new worker process after a failing test."),(0,i.kt)("p",null,"Worker-scoped fixtures and ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks receive ",(0,i.kt)("inlineCode",{parentName:"p"},"workerInfo")," parameter. The following information is accessible from the ",(0,i.kt)("inlineCode",{parentName:"p"},"workerInfo"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config")," - ",(0,i.kt)("a",{parentName:"li",href:"#configuration-object"},"Configuration object"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"project")," - Specific ",(0,i.kt)("a",{parentName:"li",href:"#projects"},"project")," configuration for this worker. Different projects are always run in separate processes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"workerIndex: number")," - A unique sequential index assigned to the worker process.")),(0,i.kt)("p",null,"Consider an example where we run a new http server per worker process, and use ",(0,i.kt)("inlineCode",{parentName:"p"},"workerIndex")," to produce a unique port number:"),(0,i.kt)("h2",{id:"testinfo-object"},"testInfo object"),(0,i.kt)("p",null,"Test fixtures and ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"afterEach")," hooks receive ",(0,i.kt)("inlineCode",{parentName:"p"},"testInfo")," parameter. It is also available to the test function as a second parameter."),(0,i.kt)("p",null,"In addition to everything from the ",(0,i.kt)("a",{parentName:"p",href:"#workerinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"workerInfo")),", the following information is accessible before and during the test:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title: string")," - Test title."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file: string")," - Full path to the test file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"line: number")," - Line number of the test declaration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"column: number")," - Column number of the test declaration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fn: Function")," - Test body function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repeatEachIndex: number")," - The sequential repeat index."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retry: number")," - The sequential number of the test retry (zero means first run)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expectedStatus: 'passed' | 'failed' | 'timedOut'")," - Whether this test is expected to pass, fail or timeout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout: number")," - Test timeout."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"annotations")," - ",(0,i.kt)("a",{parentName:"li",href:"/java/docs/next/test-annotations"},"Annotations")," that were added to the test."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapshotSuffix: string")," - Suffix used to locate snapshots for the test."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapshotPath(snapshotName: string)")," - Function that returns the full path to a particular snapshot for the test."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outputDir: string")," - Absolute path to the output directory for this test run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outputPath(...pathSegments: string[])")," - Function that returns the full path to a particular output artifact for the test.")),(0,i.kt)("p",null,"The following information is accessible after the test body has finished, in fixture teardown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duration: number")," - test running time in milliseconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status: 'passed' | 'failed' | 'timedOut'")," - the actual test result."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," - any error thrown by the test body."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stdout: (string | Buffer)[]")," - array of stdout chunks collected during the test run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stderr: (string | Buffer)[]")," - array of stderr chunks collected during the test run.")),(0,i.kt)("p",null,"Here is an example test that saves some information:"),(0,i.kt)("p",null,"Here is an example fixture that automatically saves debug logs when the test fails:"),(0,i.kt)("h2",{id:"global-setup-and-teardown"},"Global setup and teardown"),(0,i.kt)("p",null,"To set something up once before running all tests, use ",(0,i.kt)("inlineCode",{parentName:"p"},"globalSetup")," option in the ",(0,i.kt)("a",{parentName:"p",href:"#configuration-object"},"configuration file"),"."),(0,i.kt)("p",null,"Similarly, use ",(0,i.kt)("inlineCode",{parentName:"p"},"globalTeardown")," to run something once after all the tests. Alternatively, let ",(0,i.kt)("inlineCode",{parentName:"p"},"globalSetup")," return a function that will be used as a global teardown."),(0,i.kt)("p",null,"Here is a global setup example that runs an app."),(0,i.kt)("p",null,"Now add ",(0,i.kt)("inlineCode",{parentName:"p"},"globalSetup")," option to the configuration file."),(0,i.kt)("h2",{id:"projects"},"Projects"),(0,i.kt)("p",null,"Playwright Test supports running multiple test projects at the same time. This is useful for running the same tests in multiple configurations. For example, consider running tests against multiple versions of some REST backend."),(0,i.kt)("p",null,'To make use of this feature, we will declare an "option fixture" for the backend version, and use it in the tests.'),(0,i.kt)("p",null,"We can use our fixtures in the test."),(0,i.kt)("p",null,"Now, we can run test in multiple configurations by using projects."),(0,i.kt)("p",null,"Each project can be configured separately, and run different set of tests with different parameters. See ",(0,i.kt)("a",{parentName:"p",href:"#test-suite-options"},"test suite options")," for the list of options available to each project."),(0,i.kt)("p",null,"You can run all projects or just a single one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Run both projects - each test will be run twice\nnpx playwright test\n\n# Run a single project - each test will be run once\nnpx playwright test --project=v2\n")),(0,i.kt)("h2",{id:"add-custom-matchers-using-expectextend"},"Add custom matchers using expect.extend"),(0,i.kt)("p",null,"Playwright Test uses ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},(0,i.kt)("inlineCode",{parentName:"a"},"expect")," library")," under the hood which has the functionality to extend it with ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect#expectextendmatchers"},"custom matchers"),"."),(0,i.kt)("p",null,"In this example we add a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"toBeWithinRange")," function in the configuration file."),(0,i.kt)("p",null,"Now we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"toBeWithinRange")," in the test."),(0,i.kt)("p",null,"For TypeScript, also add the following to ",(0,i.kt)("inlineCode",{parentName:"p"},"global.d.ts"),". You don't need it for JavaScript."))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);