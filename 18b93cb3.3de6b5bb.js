(window.webpackJsonp=window.webpackJsonp||[]).push([[93,105,368],{160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a(876),o=a(883),u=a(881);t.default=function(){Object(l.default)().siteConfig;var e=Object(u.useVersions)(),t=Object(u.useLatestVersion)(),a=e.find((function(e){return"current"===e.name})),n=e.filter((function(e){return e!==t&&"current"!==e.name})),s=t,i="https://github.com/microsoft/playwright";return r.a.createElement(o.a,{title:"Versions",permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},r.a.createElement("main",{className:"container margin-vert--lg"},r.a.createElement("h1",null,"Versions"),s&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"next"},"Latest version"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,s.name),r.a.createElement("td",null,r.a.createElement(c.a,{to:s.path},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:i+"/releases/tag/v"+s.name},"Release Notes")))))),a!==t&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"master"),r.a.createElement("td",null,r.a.createElement(c.a,{to:a.path},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:i},"Source Code")))))),n.length>0&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"archive"},"Past versions"),r.a.createElement("table",null,r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("th",null,e.label),r.a.createElement("td",null,r.a.createElement(c.a,{to:e.path},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:i+"/releases/tag/v"+e.name},"Release Notes")))})))))))}},884:function(e,t,a){"use strict";var n=a(3),r=a(7),l=a(0),c=a.n(l),o=a(24),u=a(22),s=a(880),i=a(879),m=a(876),h=a(23),b=a(882),d=a(954),f=a(955),E=a(887),g=null;function p(e){var t=e.hit,a=e.children;return c.a.createElement(m.a,{to:t.url},a)}function O(e){var t=e.state,a=e.onClose,n=Object(b.a)().generateSearchPageLink;return c.a.createElement(m.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function v(e){var t,m,b=e.contextualSearch,v=Object(r.a)(e,["contextualSearch"]),j=Object(u.default)().siteMetadata,C=Object(E.a)(),k=null!==(t=null===(m=v.searchParameters)||void 0===m?void 0:m.facetFilters)&&void 0!==t?t:[],y=b?[].concat(C,k):k,w=Object.assign({},v.searchParameters,{facetFilters:y}),S=Object(i.b)().withBaseUrl,P=Object(s.useHistory)(),x=Object(l.useRef)(null),N=Object(l.useState)(!1),V=N[0],R=N[1],D=Object(l.useState)(null),F=D[0],M=D[1],I=Object(l.useCallback)((function(){return g?Promise.resolve():Promise.all([a.e(808).then(a.bind(null,886)),Promise.all([a.e(0),a.e(809)]).then(a.bind(null,885)),a.e(0).then(a.t.bind(null,53,7))]).then((function(e){var t=e[0].DocSearchModal;g=t}))}),[]),L=Object(l.useCallback)((function(){I().then((function(){R(!0)}))}),[I,R]),U=Object(l.useCallback)((function(){R(!1)}),[R]),A=Object(l.useCallback)((function(e){I().then((function(){R(!0),M(e.key)}))}),[I,R,M]),B=Object(l.useRef)({navigate:function(e){var t=e.suggestionUrl;P.push(t)}}).current,H=Object(l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");t.href=e.url;var a=t.pathname.startsWith("/playwright")?t.pathname.replace("/playwright",""):t.pathname;return a=a.replace("/next",""),Object.assign({},e,{url:S(""+a+t.hash)})}))})).current,J=Object(l.useMemo)((function(){return function(e){return c.a.createElement(O,Object(n.a)({},e,{onClose:U}))}}),[U]),Y=Object(l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",j.docusaurusVersion),e}),[j.docusaurusVersion]);return Object(d.a)({isOpen:V,onOpen:L,onClose:U,onInput:A,searchButtonRef:x}),c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,null,c.a.createElement("link",{rel:"preconnect",href:"https://"+v.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),c.a.createElement(f.a,{onTouchStart:I,onFocus:I,onMouseOver:I,onClick:L,ref:x}),V&&Object(o.createPortal)(c.a.createElement(g,Object(n.a)({onClose:U,initialScrollY:window.scrollY,initialQuery:F,navigator:B,transformItems:H,hitComponent:p,resultsFooterComponent:J,transformSearchClient:Y},v,{searchParameters:w})),document.body))}t.a=function(){var e=Object(u.default)().siteConfig;return c.a.createElement(v,e.themeConfig.algolia)}}}]);