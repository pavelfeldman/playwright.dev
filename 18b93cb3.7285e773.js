(window.webpackJsonp=window.webpackJsonp||[]).push([[89,102],{156:function(e,t,n){"use strict";n.r(t);var r=n(0),u=n.n(r),a=n(22),c=n(886),s=n(897),o=n(895);t.default=function(){Object(a.default)().siteConfig;var e=Object(o.useVersions)(),t=Object(o.useLatestVersion)(),n=e.find((function(e){return"current"===e.name})),r=e.filter((function(e){return e!==t&&"current"!==e.name})),i=t,l="https://github.com/microsoft/playwright";return u.a.createElement(s.a,{title:"Versions",permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},u.a.createElement("main",{className:"container margin-vert--lg"},u.a.createElement("h1",null,"Versions"),i&&u.a.createElement("div",{className:"margin-bottom--lg"},u.a.createElement("h3",{id:"next"},"Latest version"),u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,i.name),u.a.createElement("td",null,u.a.createElement(c.a,{to:i.path},"Documentation")),u.a.createElement("td",null,u.a.createElement("a",{href:l+"/releases/tag/v"+i.name},"Release Notes")))))),n!==t&&u.a.createElement("div",{className:"margin-bottom--lg"},u.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("th",null,"master"),u.a.createElement("td",null,u.a.createElement(c.a,{to:n.path},"Documentation")),u.a.createElement("td",null,u.a.createElement("a",{href:l},"Source Code")))))),r.length>0&&u.a.createElement("div",{className:"margin-bottom--lg"},u.a.createElement("h3",{id:"archive"},"Past versions"),u.a.createElement("table",null,u.a.createElement("tbody",null,r.map((function(e){return u.a.createElement("tr",{key:e.name},u.a.createElement("th",null,e.label),u.a.createElement("td",null,u.a.createElement(c.a,{to:e.path},"Documentation")),u.a.createElement("td",null,u.a.createElement("a",{href:l+"/releases/tag/v"+e.name},"Release Notes")))})))))))}},878:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return u.a})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return i}));n(879);var r=n(888),u=n.n(r),a=["en"],c=!1,s="21504fd7",o=8,i=50},880:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(877),u=n(881);function a(e,t,n){for(var c,s=[],o=Object(r.a)(t);!(c=o()).done;){var i=c.value,l=e.toLowerCase().indexOf(i);if(l>=0){l>0&&s.push(a(e.substr(0,l),t)),s.push("<mark>"+Object(u.a)(e.substr(l,i.length))+"</mark>");var h=l+i.length;h<e.length&&s.push(a(e.substr(h),t));break}}return 0===s.length?n?"<mark>"+Object(u.a)(e)+"</mark>":Object(u.a)(e):s.join("")}},881:function(e,t,n){"use strict";function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,"a",(function(){return r}))},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(884),u=n.n(r),a=n(877),c=n(885),s=n(879),o=n.n(s),i=n(878);function l(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(u.a.mark((function e(t){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+i.b);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,r=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:o.a.Index.load(r)}})),c=n.reduce((function(e,t){for(var n,r=Object(a.a)(t.index.invertedIndex);!(n=r()).done;){var u=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(u[0][0])&&e.add(u[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:r,zhDictionary:Array.from(c)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},891:function(e,t,n){"use strict";function r(e,t){for(var n=[],r=0,u=Object.values(e);r<u.length;r++){var a=u[r];a[t]&&n.push.apply(n,a[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,"a",(function(){return r}))},892:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),u=n.n(r),a=n(889),c=n(54),s=n.n(c);function o(e){var t=e.className;return u.a.createElement("div",{className:Object(a.a)(s.a.loadingRing,t)},u.a.createElement("div",null),u.a.createElement("div",null),u.a.createElement("div",null),u.a.createElement("div",null))}},893:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(877),u=n(879),a=n.n(u);function c(e,t){var n=[];return function e(u,a){if(0!==u.length){var c=u[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(c))for(var s,o=function(e,t){var n=[];return function e(u,a){for(var c,s=0,o=!1,i=Object(r.a)(t);!(c=i()).done;){var l=c.value;if(u.substr(0,l.length)===l){var h={missed:a.missed,term:a.term.concat({value:l})};u.length>l.length?e(u.substr(l.length),h):n.push(h),o=!0}else for(var d=l.length-1;d>s;d-=1){var f=l.substr(0,d);if(u.substr(0,d)===f){s=d;var p={missed:a.missed,term:a.term.concat({value:f,trailing:!0})};u.length>d?e(u.substr(d),p):n.push(p),o=!0;break}}}o||(u.length>0?e(u.substr(1),{missed:a.missed+1,term:a.term}):a.term.length>0&&n.push(a))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(c,t),i=Object(r.a)(o);!(s=i()).done;){var l=s.value,h=a.concat.apply(a,l);e(u.slice(1),h)}else{var d=a.concat({value:c});e(u.slice(1),d)}}else n.push(a)}(e,[]),n}var s=n(878);function o(e){return i(e).concat(i(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function i(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:a.a.Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?a.a.Query.wildcard.TRAILING:a.a.Query.wildcard.NONE}}))}}))}function l(e,t,n){return function(u,i){var l=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a.a[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(u,s.c);if(0!==l.length){var h=function(e,t){var n=c(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:a.a.Query.presence.REQUIRED,wildcard:a.a.Query.wildcard.LEADING|a.a.Query.wildcard.TRAILING}}))}];for(var u,i=Object(r.a)(n);!(u=i()).done;){var l=u.value;l[l.length-1].maybeTyping=!0}for(var h,d,f=[],p=Object(r.a)(s.c);!(h=p()).done;){var D=h.value;if("en"===D)s.d||f.unshift(a.a.stopWordFilter);else{var v=a.a[D];v.stopWordFilter&&f.unshift(v.stopWordFilter)}}if(f.length>0){var m=function(e){return f.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};d=[];for(var F,g=[],b=Object(r.a)(n);!(F=b()).done;){var E=F.value,A=m(E);d.push(A),A.length<E.length&&A.length>0&&g.push(A)}n.push.apply(n,g)}else d=n.slice();for(var C,j=[],x=Object(r.a)(d);!(C=x()).done;){var k=C.value;if(k.length>2)for(var y=k.length-1;y>=0;y-=1)j.push(k.slice(0,y).concat(k.slice(y+1)))}return o(n).concat(o(j))}(l,t),d=[],f=function(){for(var t,u=p.value,a=u.term,c=u.tokens,s=function(){var u=t.value,s=u.documents,o=u.index,i=u.type;if(d.push.apply(d,o.query((function(e){for(var t,n=Object(r.a)(a);!(t=n()).done;){var u=t.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,n).filter((function(e){return!d.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-d.length).map((function(t){var n=s.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:i,page:0!==i&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:c,score:t.score}}))),d.length>=n)return{v:"break|search"}},o=Object(r.a)(e);!(t=o()).done;){var i=s();if("object"==typeof i)return i.v}};e:for(var p,D=Object(r.a)(h);!(p=D()).done;){if("break|search"===f())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,u=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===u&&(u=n.index),r===u?0===t.type?-1:0===n.type?1:t.index-n.index:r-u}))}(d),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(d),i(d)}else i([])}}},894:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(881),u=n(880),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function c(e){for(var t=[],n=0,r=e;r.length>0;){var u=r.match(a);if(!u){t.push(r);break}u.index>0&&t.push(r.substr(0,u.index)),t.push(u[0]),n+=u.index+u[0].length,r=e.substr(n)}return t}var s=n(878);function o(e,t,n,r){void 0===r&&(r=s.e);for(var u={chunkIndex:-1},a=i(e,t,n,0,0,u),c=a.slice(0,u.chunkIndex),o=a[u.chunkIndex],l=[o.html],h=a.slice(u.chunkIndex+1),d=o.textLength,f=0,p=0,D=!1,v=!1;d<r;)if((f<=p||0===h.length)&&c.length>0){var m=c.pop();d+m.textLength<=r?(l.unshift(m.html),f+=m.textLength,d+=m.textLength):(D=!0,c.length=0)}else{if(!(h.length>0))break;var F=h.shift();d+F.textLength<=r?(l.push(F.html),p+=F.textLength,d+=F.textLength):(v=!0,h.length=0)}return(D||c.length>0)&&l.unshift("\u2026"),(v||h.length>0)&&l.push("\u2026"),l.join("")}function i(e,t,n,a,s,o){var l=[],h=t[a],d=h[0],f=h[1];if(d<s)(a+=1)<t.length&&l.push.apply(l,i(e,t,n,a,s));else{d>s&&l.push.apply(l,c(e.substring(s,d)).map((function(e){return{html:Object(r.a)(e),textLength:e.length}}))),o&&(o.chunkIndex=l.length),l.push({html:Object(u.a)(e.substr(d,f),n,!0),textLength:f});var p=d+f;(a+=1)<t.length?l.push.apply(l,i(e,t,n,a,p)):p<e.length&&l.push.apply(l,c(e.substr(p)).map((function(e){return{html:Object(r.a)(e),textLength:e.length}})))}return l}},899:function(e,t,n){"use strict";var r=n(878),u=n(884),a=n.n(u),c=n(877),s=n(885),o=n(0),i=n.n(o),l=n(889),h=n(22),d=n(10),f=n(887),p=n(890),D=n(893),v=n(880),m=n(894),F=n(891),g=n(53),b=n.n(g);function E(e){var t=e.document,n=e.type,r=e.page,u=e.metadata,a=e.tokens,c=e.isInterOfTree,s=e.isLastOfTree,o=0===n,i=1===n,l=[];c?l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):s&&l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=l.map((function(e){return'<span class="'+b.a.hitTree+'">'+e+"</span>"})),d='<span class="'+b.a.hitIcon+'">'+(o?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",f=['<span class="'+b.a.hitTitle+'">'+Object(m.a)(t.t,Object(F.a)(u,"t"),a)+"</span>"];o||f.push('<span class="'+b.a.hitPath+'">'+Object(v.a)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>");var p='<span class="'+b.a.hitAction+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>';return[].concat(h,[d,'<span class="'+b.a.hitWrapper+'">'],f,["</span>",p]).join("")}function A(){return'<span class="'+b.a.noResults+'"><span class="'+b.a.noResultsIcon+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>No results.</span></span>'}var C=n(892);function j(){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(805),n.e(809)]).then(n.t.bind(null,961,7));case 2:return(t=e.sent).noConflict(),e.abrupt("return",t.default);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k="_highlight";t.a=function(e){var t,n=e.handleSearchBarToggle,u=Object(h.default)().siteConfig.baseUrl,v=Object(f.useHistory)(),m=Object(f.useLocation)(),F=Object(o.useRef)(null),g=Object(o.useRef)("empty"),x=Object(o.useRef)(!1),y=Object(o.useState)(!1),O=y[0],w=y[1],I=Object(o.useState)(!1),L=I[0],B=I[1],N=Object(o.useCallback)(Object(s.a)(a.a.mark((function e(){var t,n,s,o,i,l,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===g.current){e.next=2;break}return e.abrupt("return");case 2:return g.current="loading",w(!0),e.next=6,Promise.all([Object(p.a)(u),j()]);case 6:t=e.sent,n=t[0],s=n.wrappedIndexes,o=n.zhDictionary,i=t[1],l=i(F.current,{hint:!1,autoselect:!0,cssClasses:{root:b.a.searchBar,noPrefix:!0,dropdownMenu:b.a.dropdownMenu,input:b.a.input,hint:b.a.hint,suggestions:b.a.suggestions,suggestion:b.a.suggestion,cursor:b.a.cursor,dataset:b.a.dataset,empty:b.a.empty}},[{source:Object(D.a)(s,o,r.f),templates:{suggestion:E,empty:A,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),r=u+"search?q="+encodeURIComponent(t);n.href=r,n.textContent="See all results",n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),l.autocomplete.close(),v.push(r))}));var a=document.createElement("div");return a.className=b.a.hitFooter,a.appendChild(n),a}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,u=n.u,a=n.h,s=t.tokens,o=u;if(r.a&&s.length>0){for(var i,l=new URLSearchParams,h=Object(c.a)(s);!(i=h()).done;){var d=i.value;l.append(k,d)}o+="?"+l.toString()}a&&(o+=a),v.push(o)})),g.current="done",w(!1),x.current&&((h=F.current).value&&l.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[u,v]);Object(o.useEffect)((function(){if(r.a){var e=d.a.canUseDOM?new URLSearchParams(m.search).getAll(k):[];if(0!==e.length){var t=document.querySelector("article");if(t)new r.a(t).mark(e)}}}),[m.search]);var R=Object(o.useCallback)((function(){x.current=!0,N(),n(!0)}),[n,N]),M=Object(o.useCallback)((function(){n(!1)}),[n]),S=Object(o.useCallback)((function(){N()}),[N]),z=Object(o.useCallback)((function(e){e.target.value&&B(!0)}),[]);return i.a.createElement("div",{className:Object(l.a)("navbar__search",b.a.searchBarContainer,(t={},t[b.a.searchIndexLoading]=O&&L,t))},i.a.createElement("input",{placeholder:"Search","aria-label":"Search",className:"navbar__search-input",onMouseEnter:S,onFocus:R,onBlur:M,onChange:z,ref:F}),i.a.createElement(C.a,{className:b.a.searchBarLoadingRing}))}}}]);