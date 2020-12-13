(window.webpackJsonp=window.webpackJsonp||[]).push([[604,105,368],{673:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),l=a.n(r),c=a(878),o=a(883),s=a(876),i=a(22),u=a(879),m=a(674),h=a.n(m),b=[{title:"Test across all modern browsers",description:l.a.createElement(l.a.Fragment,null,"Single automation API for Chromium, Firefox and WebKit."),link:"docs/why-playwright#support-for-all-browsers"},{title:"Automation without trade-offs",description:l.a.createElement(l.a.Fragment,null,"Automation for single page apps that use the modern web platform."),link:"docs/why-playwright#powerful-automation-capabilities"},{title:"Use in your preferred language",description:l.a.createElement(l.a.Fragment,null,"Use the API in JavaScript/TypeScript, Python, C# and Java."),link:"docs/languages"}];function d(e){var t=e.imageUrl,a=e.title,n=e.description,r=(e.link,Object(u.a)(t));return l.a.createElement("div",{className:Object(c.a)("col col--4",h.a.feature)},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:h.a.featureImage,src:r,alt:a})),l.a.createElement("h3",null,a),l.a.createElement("p",null,n),l.a.createElement("p",null,l.a.createElement(s.a,{to:Object(u.a)("docs/why-playwright#support-for-all-browsers")},"Learn more")))}t.default=function(){var e=Object(i.default)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(o.a,{title:t.tagline,description:"Cross-browser end-to-end testing for modern web apps"},l.a.createElement("header",{className:Object(c.a)("hero hero--primary",h.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:Object(c.a)("hero__title",h.a.heroTitle)},l.a.createElement("span",{className:Object(c.a)(h.a.highlight)},"Playwright")," enables reliable end-to-end testing for modern web apps."),l.a.createElement("div",{className:h.a.buttons},l.a.createElement(s.a,{className:Object(c.a)(h.a.getStarted),to:Object(u.a)("docs/intro")},"Get started"),l.a.createElement("div",null,l.a.createElement("iframe",{className:h.a.githubStars,src:"https://ghbtns.com/github-btn.html?user=microsoft&repo=playwright&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"}))))),l.a.createElement("main",null,b&&b.length>0&&l.a.createElement("section",{className:h.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},b.map((function(e,t){return l.a.createElement(d,Object(n.a)({key:t},e))})))))))}},884:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),c=a.n(l),o=a(24),s=a(22),i=a(880),u=a(879),m=a(876),h=a(23),b=a(882),d=a(954),p=a(955),f=a(887),g=null;function O(e){var t=e.hit,a=e.children;return c.a.createElement(m.a,{to:t.url},a)}function j(e){var t=e.state,a=e.onClose,n=Object(b.a)().generateSearchPageLink;return c.a.createElement(m.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function E(e){var t,m,b=e.contextualSearch,E=Object(r.a)(e,["contextualSearch"]),w=Object(s.default)().siteMetadata,v=Object(f.a)(),y=null!==(t=null===(m=E.searchParameters)||void 0===m?void 0:m.facetFilters)&&void 0!==t?t:[],C=b?[].concat(v,y):y,k=Object.assign({},E.searchParameters,{facetFilters:C}),S=Object(u.b)().withBaseUrl,N=Object(i.useHistory)(),P=Object(l.useRef)(null),F=Object(l.useState)(!1),x=F[0],A=F[1],I=Object(l.useState)(null),U=I[0],J=I[1],M=Object(l.useCallback)((function(){return g?Promise.resolve():Promise.all([a.e(808).then(a.bind(null,886)),Promise.all([a.e(0),a.e(809)]).then(a.bind(null,885)),a.e(0).then(a.t.bind(null,53,7))]).then((function(e){var t=e[0].DocSearchModal;g=t}))}),[]),R=Object(l.useCallback)((function(){M().then((function(){A(!0)}))}),[M,A]),T=Object(l.useCallback)((function(){A(!1)}),[A]),B=Object(l.useCallback)((function(e){M().then((function(){A(!0),J(e.key)}))}),[M,A,J]),H=Object(l.useRef)({navigate:function(e){var t=e.suggestionUrl;N.push(t)}}).current,G=Object(l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");t.href=e.url;var a=t.pathname.startsWith("/playwright")?t.pathname.replace("/playwright",""):t.pathname;return a=a.replace("/next",""),Object.assign({},e,{url:S(""+a+t.hash)})}))})).current,L=Object(l.useMemo)((function(){return function(e){return c.a.createElement(j,Object(n.a)({},e,{onClose:T}))}}),[T]),V=Object(l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",w.docusaurusVersion),e}),[w.docusaurusVersion]);return Object(d.a)({isOpen:x,onOpen:R,onClose:T,onInput:B,searchButtonRef:P}),c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,null,c.a.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),c.a.createElement(p.a,{onTouchStart:M,onFocus:M,onMouseOver:M,onClick:R,ref:P}),x&&Object(o.createPortal)(c.a.createElement(g,Object(n.a)({onClose:T,initialScrollY:window.scrollY,initialQuery:U,navigator:H,transformItems:G,hitComponent:O,resultsFooterComponent:L,transformSearchClient:V},E,{searchParameters:k})),document.body))}t.a=function(){var e=Object(s.default)().siteConfig;return c.a.createElement(E,e.themeConfig.algolia)}}}]);