!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";var r=n(7),s=/[\/\?<>\\:\*\|"]/g,o=/[\x00-\x1f\x80-\x9f]/g,i=/^\.+$/,a=/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,c=/[\. ]+$/;function u(e,t){if("string"!=typeof e)throw new Error("Input must be string");var n=e.replace(s,t).replace(o,t).replace(i,t).replace(a,t).replace(c,t);return r(n,255)}e.exports=function(e,t){var n=t&&t.replacement||"",r=u(e,n);return""===n?r:u(r,"")}},function(e,t){e.exports={scopeNeedTransformPathname:"<<CURRENT_PATHNAME>>"}},function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},s=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var s=t&&t.prototype instanceof l?t:l,o=Object.create(s.prototype),i=new x(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(s,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===s)throw o;return O()}for(n.method=s,n.arg=o;;){var i=n.delegate;if(i){var a=v(i,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h={};function l(){}function f(){}function p(){}var d={};a(d,s,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==t&&n.call(y,s)&&(d=y);var m=p.prototype=l.prototype=Object.create(d);function w(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){var r;this._invoke=function(s,o){function i(){return new t((function(r,i){!function r(s,o,i,a){var c=u(e[s],e,o);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,a)}),(function(e){r("throw",e,i,a)})):t.resolve(l).then((function(e){h.value=e,i(h)}),(function(e){return r("throw",e,i,a)}))}a(c.arg)}(s,o,r,i)}))}return r=r?r.then(i,i):i()}}function v(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,v(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var s=r.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function q(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function L(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=p,a(m,"constructor",p),a(p,"constructor",f),f.displayName=a(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,a(e,i,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},w(_.prototype),a(_.prototype,o,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,s,o){void 0===o&&(o=Promise);var i=new _(c(t,n,r,s),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(m),a(m,i,"Generator"),a(m,s,(function(){return this})),a(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(q),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var o=s;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),q(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var s=r.arg;q(n)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){"use strict";var r=n(8),s=n(9);e.exports=r.bind(null,s)},function(e,t,n){"use strict";function r(e){return e>=55296&&e<=56319}function s(e){return e>=56320&&e<=57343}e.exports=function(e,t,n){if("string"!=typeof t)throw new Error("Input must be string");for(var o,i,a=t.length,c=0,u=0;u<a;u+=1){if(o=t.charCodeAt(u),i=t[u],r(o)&&s(t.charCodeAt(u+1))&&(i+=t[u+=1]),(c+=e(i))===n)return t.slice(0,u+1);if(c>n)return t.slice(0,u-i.length+1)}return t}},function(e,t,n){"use strict";function r(e){return e>=55296&&e<=56319}function s(e){return e>=56320&&e<=57343}e.exports=function(e){if("string"!=typeof e)throw new Error("Input must be string");for(var t=e.length,n=0,o=null,i=null,a=0;a<t;a++)s(o=e.charCodeAt(a))?null!=i&&r(i)?n+=1:n+=3:o<=127?n+=1:o>=128&&o<=2047?n+=2:o>=2048&&o<=65535&&(n+=3),i=o;return n}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"CacheFirst",(function(){return H})),n.d(r,"CacheOnly",(function(){return $})),n.d(r,"NetworkFirst",(function(){return Y})),n.d(r,"NetworkOnly",(function(){return z})),n.d(r,"StaleWhileRevalidate",(function(){return J}));n(6),n(0);const s=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class o extends Error{constructor(e,t){super(s(e,t)),this.name=e,this.details=t}}const i=new Set;const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},c=e=>[a.prefix,e,a.suffix].filter(e=>e&&e.length>0).join("-"),u=e=>{(e=>{for(const t of Object.keys(a))e(t)})(t=>{"string"==typeof e[t]&&(a[t]=e[t])})},h=e=>e||c(a.googleAnalytics),l=e=>e||c(a.precache),f=()=>a.prefix,p=e=>e||c(a.runtime),d=()=>a.suffix;const g=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),""),y=(e,t)=>e.filter(e=>t in e),m=async({request:e,mode:t,plugins:n=[]})=>{const r=y(n,"cacheKeyWillBeUsed");let s=e;for(const e of r)s=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:s}),"string"==typeof s&&(s=new Request(s));return s},w=async({cacheName:e,request:t,event:n,matchOptions:r,plugins:s=[]})=>{const o=await self.caches.open(e),i=await m({plugins:s,request:t,mode:"read"});let a=await o.match(i,r);for(const t of s)if("cachedResponseWillBeUsed"in t){const s=t.cachedResponseWillBeUsed;a=await s.call(t,{cacheName:e,event:n,matchOptions:r,cachedResponse:a,request:i})}return a},_=async({cacheName:e,request:t,response:n,event:r,plugins:s=[],matchOptions:a})=>{const c=await m({plugins:s,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:g(c.url)});const u=await(async({request:e,response:t,event:n,plugins:r=[]})=>{let s=t,o=!1;for(const t of r)if("cacheWillUpdate"in t){o=!0;const r=t.cacheWillUpdate;if(s=await r.call(t,{request:e,response:s,event:n}),!s)break}return o||(s=s&&200===s.status?s:void 0),s||null})({event:r,plugins:s,response:n,request:c});if(!u)return void 0;const h=await self.caches.open(e),l=y(s,"cacheDidUpdate"),f=l.length>0?await w({cacheName:e,matchOptions:a,request:c}):null;try{await h.put(c,u)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:r,oldResponse:f,newResponse:u,request:c})},v=w;let b;class q{constructor(e,t,{onupgradeneeded:n,onversionchange:r}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=n,this._onversionchange=r||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let n=!1;setTimeout(()=>{n=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const r=indexedDB.open(this._name,this._version);r.onerror=()=>t(r.error),r.onupgradeneeded=e=>{n?(r.transaction.abort(),r.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},r.onsuccess=()=>{const t=r.result;n?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,n){return await this.getAllMatching(e,{query:t,count:n})}async getAllKeys(e,t,n){return(await this.getAllMatching(e,{query:t,count:n,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:n=null,direction:r="next",count:s,includeKeys:o=!1}={}){return await this.transaction([e],"readonly",(i,a)=>{const c=i.objectStore(e),u=t?c.index(t):c,h=[],l=u.openCursor(n,r);l.onsuccess=()=>{const e=l.result;e?(h.push(o?e:e.value),s&&h.length>=s?a(h):e.continue()):a(h)}})}async transaction(e,t,n){return await this.open(),await new Promise((r,s)=>{const o=this._db.transaction(e,t);o.onabort=()=>s(o.error),o.oncomplete=()=>r(),n(o,e=>r(e))})}async _call(e,t,n,...r){return await this.transaction([t],n,(n,s)=>{const o=n.objectStore(t),i=o[e].apply(o,r);i.onsuccess=()=>s(i.result)})}close(){this._db&&(this._db.close(),this._db=null)}}q.prototype.OPEN_TIMEOUT=2e3;const x={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(x))for(const n of t)n in IDBObjectStore.prototype&&(q.prototype[n]=async function(t,...r){return await this._call(n,t,e,...r)});const L=async({request:e,fetchOptions:t,event:n,plugins:r=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const s=y(r,"fetchDidFail"),i=s.length>0?e.clone():null;try{for(const t of r)if("requestWillFetch"in t){const r=t.requestWillFetch,s=e.clone();e=await r.call(t,{request:s,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const a=e.clone();try{let s;s="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of r)"fetchDidSucceed"in e&&(s=await e.fetchDidSucceed.call(e,{event:n,request:a,response:s}));return s}catch(e){0;for(const t of s)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:i.clone(),request:a.clone()});throw e}};const O={get googleAnalytics(){return h()},get precache(){return l()},get prefix(){return f()},get runtime(){return p()},get suffix(){return d()}};async function R(e,t){const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},s=t?t(r):r,o=function(){if(void 0===b){const e=new Response("");if("body"in e)try{new Response(e.body),b=!0}catch(e){b=!1}b=!1}return b}()?n.body:await n.blob();return new Response(o,s)}n(1);const N=[],E={get:()=>N,add(e){N.push(...e)}};function T(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(n,location.href),s=new URL(n,location.href);return r.searchParams.set("__WB_REVISION__",t),{cacheKey:r.href,url:s.href}}class k{constructor(e){this._cacheName=l(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:r}=T(n),s="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(r,e),this._urlsToCacheModes.set(r,s),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],r=[],s=await self.caches.open(this._cacheName),o=await s.keys(),i=new Set(o.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)i.has(t)?r.push(e):n.push({cacheKey:t,url:e});const a=n.map(({cacheKey:n,url:r})=>{const s=this._cacheKeysToIntegrities.get(n),o=this._urlsToCacheModes.get(r);return this._addURLToCache({cacheKey:n,cacheMode:o,event:e,integrity:s,plugins:t,url:r})});await Promise.all(a);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:r}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),r=[];for(const s of t)n.has(s.url)||(await e.delete(s),r.push(s.url));return{deletedURLs:r}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:r,plugins:s,integrity:i}){const a=new Request(t,{integrity:i,cache:n,credentials:"same-origin"});let c,u=await L({event:r,plugins:s,request:a});for(const e of s||[])"cacheWillUpdate"in e&&(c=e);if(!(c?await c.cacheWillUpdate({event:r,request:a,response:u}):u.status<400))throw new o("bad-precaching-response",{url:t,status:u.status});u.redirected&&(u=await R(u)),await _({event:r,plugins:s,response:u,request:e===t?a:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),r=new Request(e);return()=>n({request:r})}}let U;const C=()=>(U||(U=new k),U);const K=(e,t)=>{const n=C().getURLsToCacheKeys();for(const r of function*(e,{ignoreURLParametersMatching:t,directoryIndex:n,cleanURLs:r,urlManipulation:s}={}){const o=new URL(e,location.href);o.hash="",yield o.href;const i=function(e,t=[]){for(const n of[...e.searchParams.keys()])t.some(e=>e.test(n))&&e.searchParams.delete(n);return e}(o,t);if(yield i.href,n&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=n,yield e.href}if(r){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(s){const e=s({url:o});for(const t of e)yield t.href}}(e,t)){const e=n.get(r);if(e)return e}};let P=!1;function S(e){P||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:r}={})=>{const s=l();self.addEventListener("fetch",o=>{const i=K(o.request.url,{cleanURLs:n,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:r});if(!i)return void 0;let a=self.caches.open(s).then(e=>e.match(i)).then(e=>e||fetch(i));o.respondWith(a)})})(e),P=!0)}const j=e=>{const t=C(),n=E.get();e.waitUntil(t.install({event:e,plugins:n}).catch(e=>{throw e}))},A=e=>{const t=C();e.waitUntil(t.activate())};n(2);const F=e=>e&&"object"==typeof e?e:{handle:e};class I{constructor(e,t,n="GET"){this.handler=F(t),this.match=e,this.method=n}}class M extends I{constructor(e,t,n){super(({url:t})=>{const n=e.exec(t.href);if(n&&(t.origin===location.origin||0===n.index))return n.slice(1)},t,n)}}class W{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const n=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const{params:r,route:s}=this.findMatchingRoute({url:n,request:e,event:t});let o=s&&s.handler;if(!o&&this._defaultHandler&&(o=this._defaultHandler),!o)return void 0;let i;try{i=o.handle({url:n,request:e,event:t,params:r})}catch(e){i=Promise.reject(e)}return i instanceof Promise&&this._catchHandler&&(i=i.catch(r=>this._catchHandler.handle({url:n,request:e,event:t}))),i}findMatchingRoute({url:e,request:t,event:n}){const r=this._routes.get(t.method)||[];for(const s of r){let r;const o=s.match({url:e,request:t,event:n});if(o)return r=o,(Array.isArray(o)&&0===o.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(r=void 0),{route:s,params:r}}return{}}setDefaultHandler(e){this._defaultHandler=F(e)}setCatchHandler(e){this._catchHandler=F(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new o("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new o("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let B;const D=()=>(B||(B=new W,B.addFetchListener(),B.addCacheListener()),B);function G(e,t,n){let r;if("string"==typeof e){const s=new URL(e,location.href);0;r=new I(({url:e})=>e.href===s.href,t,n)}else if(e instanceof RegExp)r=new M(e,t,n);else if("function"==typeof e)r=new I(e,t,n);else{if(!(e instanceof I))throw new o("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}return D().registerRoute(r),r}n(3);class H{constructor(e={}){this._cacheName=p(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let n,r=await v({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(r)0;else{0;try{r=await this._getFromNetwork(t,e)}catch(e){n=e}0}if(!r)throw new o("no-response",{url:t.url,error:n});return r}async _getFromNetwork(e,t){const n=await L({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),r=n.clone(),s=_({cacheName:this._cacheName,request:e,response:r,event:t,plugins:this._plugins});if(t)try{t.waitUntil(s)}catch(e){0}return n}}class ${constructor(e={}){this._cacheName=p(e.cacheName),this._plugins=e.plugins||[],this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const n=await v({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(!n)throw new o("no-response",{url:t.url});return n}}const V={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class Y{constructor(e={}){if(this._cacheName=p(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[V,...e.plugins]}else this._plugins=[V];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const n=[];"string"==typeof t&&(t=new Request(t));const r=[];let s;if(this._networkTimeoutSeconds){const{id:o,promise:i}=this._getTimeoutPromise({request:t,event:e,logs:n});s=o,r.push(i)}const i=this._getNetworkPromise({timeoutId:s,request:t,event:e,logs:n});r.push(i);let a=await Promise.race(r);if(a||(a=await i),!a)throw new o("no-response",{url:t.url});return a}_getTimeoutPromise({request:e,logs:t,event:n}){let r;return{promise:new Promise(t=>{r=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:n}))},1e3*this._networkTimeoutSeconds)}),id:r}}async _getNetworkPromise({timeoutId:e,request:t,logs:n,event:r}){let s,o;try{o=await L({request:t,event:r,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){s=e}if(e&&clearTimeout(e),s||!o)o=await this._respondFromCache({request:t,event:r});else{const e=o.clone(),n=_({cacheName:this._cacheName,request:t,response:e,event:r,plugins:this._plugins});if(r)try{r.waitUntil(n)}catch(e){0}}return o}_respondFromCache({event:e,request:t}){return v({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}class z{constructor(e={}){this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions}async handle({event:e,request:t}){let n,r;"string"==typeof t&&(t=new Request(t));try{r=await L({request:t,event:e,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){n=e}if(!r)throw new o("no-response",{url:t.url,error:n});return r}}class J{constructor(e={}){if(this._cacheName=p(e.cacheName),this._plugins=e.plugins||[],e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[V,...e.plugins]}else this._plugins=[V];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const n=this._getFromNetwork({request:t,event:e});let r,s=await v({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(s){if(e)try{e.waitUntil(n)}catch(r){0}}else{0;try{s=await n}catch(e){r=e}}if(!s)throw new o("no-response",{url:t.url,error:r});return s}async _getFromNetwork({request:e,event:t}){const n=await L({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),r=_({cacheName:this._cacheName,request:e,response:n.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(r)}catch(e){0}return n}}var Q=n(4),X=n.n(Q),Z=n(5);self.__koot={distClientAssetsDirName:"includes","__baseVersion_lt_0.12":!1,cacheFirst:[],networkFirst:[],networkOnly:[],env:{WEBPACK_BUILD_ENV:"prod"},scope:"<<CURRENT_PATHNAME>>"},self.__WB_DISABLE_DEV_LOGS=!0,"object"!=typeof self.__koot&&(self.__koot={env:{WEBPACK_BUILD_ENV:"prod"}}),self.__koot.scope===Z.scopeNeedTransformPathname&&(self.__koot.scope=location.pathname.split("/").slice(0,location.pathname.split("/").length-1).join("/")+"/");const ee="dev"===self.__koot.env.WEBPACK_BUILD_ENV,te=(e,t=!1)=>{const n=(location.host||location.hostname).split(".").reverse().slice(0,2).reverse().join(".");let r=e?`${t?self.__koot.scope:"/"}${"/"===e.substr(0,1)?e.substr(1):e}`:""+(t?self.__koot.scope:"");r=r.replace(/\//g,"\\/");const s=r?/\\\/$/.test(r)?"(\\/|\\?.*|$)":"(\\?.*|$)":"";for(;/\\\/$/.test(r);)r=r.substr(0,r.length-2);return new RegExp(`^[a-z]+:\\/\\/[^/]*?${n}[:]*[0-9]*${r}${s}`)};var ne,re;ne={prefix:"koot",suffix:`cache${self.__koot.localeId?"-"+self.__koot.localeId:""}${self.__koot.scope&&"/"!==self.__koot.scope?"-"+X()(self.__koot.scope):""}`,precache:"pre",runtime:"rt"},u(ne),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&(self.addEventListener("install",()=>self.skipWaiting()),self.addEventListener("activate",()=>self.clients.claim()))}),ee||(function(e){C().addToCacheList(e),e.length>0&&(self.addEventListener("install",j),self.addEventListener("activate",A))}([...[{'revision':'fcdbb114ed4e72ebf434b2cde114d16a','url':'includes/chunk.1436c3205c3839010dfd.js'},{'revision':'9e15bd4b8c15d884650d186cda69c55e','url':'includes/chunk.2bf4485c0125ed6ea140.js'},{'revision':'3ead97c253888b67df55e2df9dfd1664','url':'includes/chunk.4e27ec0076504944e034.js'},{'revision':'9bf527618e39981123fde90bde1a273d','url':'includes/chunk.8d7920e6a63c0992f9c1.js'},{'revision':'67de03b9272aa3673c5c9ed694a93bbe','url':'includes/chunk.9e9aaab6e6fd38a6cf88.js'},{'revision':'3ad7479941a3e4bacbf5e4da1b1020b8','url':'includes/chunk.a2f95b6a660ab4485d28.js'},{'revision':'27672524f51069f1636a0fe3fb7326ae','url':'includes/chunk.a4680cca71964edc5895.js'},{'revision':'5474e64c1f5400ce8ff9fc80c5149aeb','url':'includes/chunk.adde9eca0c62ab032dad.js'},{'revision':'322201aafa7021e9ddd53f15e0e552eb','url':'includes/chunk.c3b14af9053602317988.js'},{'revision':'89d5e19cb3a1091d651d06bc8931120e','url':'includes/chunk.e7af940c497d087eac50.js'},{'revision':'2d063d57ea421fecf96018436ea8e5a4','url':'includes/chunk.ed4f76a4c0e918d56ca0.js'},{'revision':'2075a1a43255afaa41a2e68298a5019f','url':'includes/entry.010317afb52aac956452.js'},{'revision':'8f53723cdfd81908c5f5077036747038','url':'includes/entry.227dc4ce423ced221267.js'},{'revision':'022259f80fc8d440541928f148625622','url':'includes/entry.29701a248bec9b7a5348.js'},{'revision':'8ad4ddb03d8588013155fe84b24e50ba','url':'includes/entry.ade9024e4cc597cb0ff0.js'},{'revision':'c0de3dcea88d6427df4212740627fb62','url':'includes/entry.fb6b0e9c02039dc0eb69.js'}]]),S(re),caches.open(O.runtime).then(e=>e.add(self.__koot.scope||"/")));const se=[te(self.__koot.distClientAssetsDirName+"/",!0),...(self.__koot.cacheFirst||[]).map(e=>te(e)),te("favicon.ico",!0)],oe=ee?"NetworkOnly":"CacheFirst";se.forEach(e=>{G(e,new r[oe],"GET")}),[...(self.__koot.networkOnly||[]).map(e=>te(e)),"api/"].forEach(e=>{G(e,new z,"GET")}),[...(self.__koot.networkFirst||[]).map(e=>te(e))].forEach(e=>{G(e,new Y,"GET")}),G(te(void 0,!0),new Y,"GET")}]);