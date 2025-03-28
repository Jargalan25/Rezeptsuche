(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){return function(){return e.apply(t,arguments)}}e.r(t),e.d(t,{hasBrowserEnv:()=>ce,hasStandardBrowserEnv:()=>ue,hasStandardBrowserWebWorkerEnv:()=>fe,navigator:()=>le,origin:()=>de});const{toString:r}=Object.prototype,{getPrototypeOf:o}=Object,s=(i=Object.create(null),e=>{const t=r.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())});var i;const a=e=>(e=e.toLowerCase(),t=>s(t)===e),c=e=>t=>typeof t===e,{isArray:l}=Array,u=c("undefined"),f=a("ArrayBuffer"),d=c("string"),h=c("function"),p=c("number"),m=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==s(e))return!1;const t=o(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=a("Date"),g=a("File"),w=a("Blob"),E=a("FileList"),R=a("URLSearchParams"),[O,S,T,v]=["ReadableStream","Request","Response","Headers"].map(a);function A(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function j(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,_=e=>!u(e)&&e!==x,C=(N="undefined"!=typeof Uint8Array&&o(Uint8Array),e=>N&&e instanceof N);var N;const P=a("HTMLFormElement"),U=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),F=a("RegExp"),L=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};A(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},B=a("AsyncFunction"),k=(D="function"==typeof setImmediate,q=h(x.postMessage),D?setImmediate:q?(M=`axios@${Math.random()}`,I=[],x.addEventListener("message",(({source:e,data:t})=>{e===x&&t===M&&I.length&&I.shift()()}),!1),e=>{I.push(e),x.postMessage(M,"*")}):e=>setTimeout(e));var D,q,M,I;const z="undefined"!=typeof queueMicrotask?queueMicrotask.bind(x):"undefined"!=typeof process&&process.nextTick||k,H={isArray:l,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=s(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:d,isNumber:p,isBoolean:e=>!0===e||!1===e,isObject:m,isPlainObject:y,isReadableStream:O,isRequest:S,isResponse:T,isHeaders:v,isUndefined:u,isDate:b,isFile:g,isBlob:w,isRegExp:F,isFunction:h,isStream:e=>m(e)&&h(e.pipe),isURLSearchParams:R,isTypedArray:C,isFileList:E,forEach:A,merge:function e(){const{caseless:t}=_(this)&&this||{},n={},r=(r,o)=>{const s=t&&j(n,o)||o;y(n[s])&&y(r)?n[s]=e(n[s],r):y(r)?n[s]=e({},r):l(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&A(arguments[e],r);return n},extend:(e,t,r,{allOwnKeys:o}={})=>(A(t,((t,o)=>{r&&h(t)?e[o]=n(t,r):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!p(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:P,hasOwnProperty:U,hasOwnProp:U,reduceDescriptors:L,freezeMethods:e=>{L(e,((t,n)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];h(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:j,global:x,isContextDefined:_,isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(m(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return A(e,((e,t)=>{const s=n(e,r+1);!u(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:B,isThenable:e=>e&&(m(e)||h(e))&&h(e.then)&&h(e.catch),setImmediate:k,asap:z};function J(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}H.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const W=J.prototype,K={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{K[e]={value:e}})),Object.defineProperties(J,K),Object.defineProperty(W,"isAxiosError",{value:!0}),J.from=(e,t,n,r,o,s)=>{const i=Object.create(W);return H.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),J.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const $=J;function V(e){return H.isPlainObject(e)||H.isArray(e)}function X(e){return H.endsWith(e,"[]")?e.slice(0,-2):e}function G(e,t,n){return e?e.concat(t).map((function(e,t){return e=X(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Q=H.toFlatObject(H,{},null,(function(e){return/^is[A-Z]/.test(e)})),Z=function(e,t,n){if(!H.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!H.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&H.isSpecCompliantForm(t);if(!H.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(H.isDate(e))return e.toISOString();if(!a&&H.isBlob(e))throw new $("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(e)||H.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(H.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(H.isArray(e)&&function(e){return H.isArray(e)&&!e.some(V)}(e)||(H.isFileList(e)||H.endsWith(n,"[]"))&&(a=H.toArray(e)))return n=X(n),a.forEach((function(e,r){!H.isUndefined(e)&&null!==e&&t.append(!0===i?G([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!V(e)||(t.append(G(o,n,s),c(e)),!1)}const u=[],f=Object.assign(Q,{defaultVisitor:l,convertValue:c,isVisitable:V});if(!H.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!H.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),H.forEach(n,(function(n,s){!0===(!(H.isUndefined(n)||null===n)&&o.call(t,n,H.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function Y(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ee(e,t){this._pairs=[],e&&Z(e,this,t)}const te=ee.prototype;te.append=function(e,t){this._pairs.push([e,t])},te.toString=function(e){const t=e?function(t){return e.call(this,t,Y)}:Y;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const ne=ee;function re(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function oe(e,t,n){if(!t)return e;const r=n&&n.encode||re;H.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let s;if(s=o?o(t,n):H.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const se=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ae={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ne,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ce="undefined"!=typeof window&&"undefined"!=typeof document,le="object"==typeof navigator&&navigator||void 0,ue=ce&&(!le||["ReactNative","NativeScript","NS"].indexOf(le.product)<0),fe="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,de=ce&&window.location.href||"http://localhost",he={...t,...ae},pe=function(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&H.isArray(r)?r.length:s,a?(H.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&H.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&H.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(H.isFormData(e)&&H.isFunction(e.entries)){const n={};return H.forEachEntry(e,((e,r)=>{t(function(e){return H.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},me={transitional:ie,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=H.isObject(e);if(o&&H.isHTMLForm(e)&&(e=new FormData(e)),H.isFormData(e))return r?JSON.stringify(pe(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Z(e,new he.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return he.isNode&&H.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=H.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Z(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e){if(H.isString(e))try{return(0,JSON.parse)(e),H.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||me.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw $.from(e,$.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],(e=>{me.headers[e]={}}));const ye=me,be=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ge=Symbol("internals");function we(e){return e&&String(e).trim().toLowerCase()}function Ee(e){return!1===e||null==e?e:H.isArray(e)?e.map(Ee):String(e)}function Re(e,t,n,r,o){return H.isFunction(r)?r.call(this,t,n):(o&&(t=n),H.isString(t)?H.isString(r)?-1!==t.indexOf(r):H.isRegExp(r)?r.test(t):void 0:void 0)}class Oe{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=we(t);if(!o)throw new Error("header name must be a non-empty string");const s=H.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Ee(e))}const s=(e,t)=>H.forEach(e,((e,n)=>o(e,n,t)));if(H.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(H.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&be[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(H.isHeaders(e))for(const[t,r]of e.entries())o(r,t,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=we(e)){const n=H.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(H.isFunction(t))return t.call(this,e,n);if(H.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=we(e)){const n=H.findKey(this,e);return!(!n||void 0===this[n]||t&&!Re(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=we(e)){const o=H.findKey(n,e);!o||t&&!Re(0,n[o],o,t)||(delete n[o],r=!0)}}return H.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Re(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return H.forEach(this,((r,o)=>{const s=H.findKey(n,o);if(s)return t[s]=Ee(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=Ee(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return H.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&H.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ge]=this[ge]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=we(e);t[r]||(function(e,t){const n=H.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return H.isArray(e)?e.forEach(r):r(e),this}}Oe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),H.reduceDescriptors(Oe.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),H.freezeMethods(Oe);const Se=Oe;function Te(e,t){const n=this||ye,r=t||n,o=Se.from(r.headers);let s=r.data;return H.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function ve(e){return!(!e||!e.__CANCEL__)}function Ae(e,t,n){$.call(this,null==e?"canceled":e,$.ERR_CANCELED,t,n),this.name="CanceledError"}H.inherits(Ae,$,{__CANCEL__:!0});const je=Ae;function xe(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const _e=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let n,r,o=0,s=1e3/t;const i=(t,s=Date.now())=>{o=s,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=s?i(e,t):(n=e,r||(r=setTimeout((()=>{r=null,i(n)}),s-a)))},()=>n&&i(n)]}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s,e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},Ce=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ne=e=>(...t)=>H.asap((()=>e(...t))),Pe=he.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,he.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(he.origin),he.navigator&&/(msie|trident)/i.test(he.navigator.userAgent)):()=>!0,Ue=he.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];H.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),H.isString(r)&&i.push("path="+r),H.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Fe(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Le=e=>e instanceof Se?{...e}:e;function Be(e,t){t=t||{};const n={};function r(e,t,n,r){return H.isPlainObject(e)&&H.isPlainObject(t)?H.merge.call({caseless:r},e,t):H.isPlainObject(t)?H.merge({},t):H.isArray(t)?t.slice():t}function o(e,t,n,o){return H.isUndefined(t)?H.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function s(e,t){if(!H.isUndefined(t))return r(void 0,t)}function i(e,t){return H.isUndefined(t)?H.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t,n)=>o(Le(e),Le(t),0,!0)};return H.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);H.isUndefined(i)&&s!==a||(n[r]=i)})),n}const ke=e=>{const t=Be({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Se.from(a),t.url=oe(Fe(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),H.isFormData(r))if(he.hasStandardBrowserEnv||he.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(he.hasStandardBrowserEnv&&(o&&H.isFunction(o)&&(o=o(t)),o||!1!==o&&Pe(t.url))){const e=s&&i&&Ue.read(i);e&&a.set(s,e)}return t},De="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=ke(e);let o=r.data;const s=Se.from(r.headers).normalize();let i,a,c,l,u,{responseType:f,onUploadProgress:d,onDownloadProgress:h}=r;function p(){l&&l(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function y(){if(!m)return;const r=Se.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());xe((function(e){t(e),p()}),(function(e){n(e),p()}),{data:f&&"text"!==f&&"json"!==f?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(n(new $("Request aborted",$.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new $("Network Error",$.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||ie;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new $(t,o.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,m)),m=null},void 0===o&&s.setContentType(null),"setRequestHeader"in m&&H.forEach(s.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),H.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),f&&"json"!==f&&(m.responseType=r.responseType),h&&([c,u]=_e(h,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,l]=_e(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",l)),(r.cancelToken||r.signal)&&(i=t=>{m&&(n(!t||t.type?new je(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const b=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);b&&-1===he.protocols.indexOf(b)?n(new $("Unsupported protocol "+b+":",$.ERR_BAD_REQUEST,e)):m.send(o||null)}))},qe=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof $?t:new je(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{s=null,o(new $(`timeout ${t} of ms exceeded`,$.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=()=>H.asap(i),a}},Me=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Ie=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}}(e))yield*Me(n,t)}(e,t);let s,i=0,a=e=>{s||(s=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return a(),void e.close();let s=r.byteLength;if(n){let e=i+=s;n(e)}e.enqueue(new Uint8Array(r))}catch(e){throw a(e),e}},cancel:e=>(a(e),o.return())},{highWaterMark:2})},ze="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,He=ze&&"function"==typeof ReadableStream,Je=ze&&("function"==typeof TextEncoder?(We=new TextEncoder,e=>We.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var We;const Ke=(e,...t)=>{try{return!!e(...t)}catch(e){return!1}},$e=He&&Ke((()=>{let e=!1;const t=new Request(he.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Ve=He&&Ke((()=>H.isReadableStream(new Response("").body))),Xe={stream:Ve&&(e=>e.body)};var Ge;ze&&(Ge=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Xe[e]&&(Xe[e]=H.isFunction(Ge[e])?t=>t[e]():(t,n)=>{throw new $(`Response type '${e}' is not supported`,$.ERR_NOT_SUPPORT,n)})})));const Qe={http:null,xhr:De,fetch:ze&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=ke(e);l=l?(l+"").toLowerCase():"text";let h,p=qe([o,s&&s.toAbortSignal()],i);const m=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let y;try{if(c&&$e&&"get"!==n&&"head"!==n&&0!==(y=await(async(e,t)=>{const n=H.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(H.isBlob(e))return e.size;if(H.isSpecCompliantForm(e)){const t=new Request(he.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return H.isArrayBufferView(e)||H.isArrayBuffer(e)?e.byteLength:(H.isURLSearchParams(e)&&(e+=""),H.isString(e)?(await Je(e)).byteLength:void 0)})(t):n})(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(H.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=Ce(y,_e(Ne(c)));r=Ie(n.body,65536,e,t)}}H.isString(f)||(f=f?"include":"omit");const o="credentials"in Request.prototype;h=new Request(t,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?f:void 0});let s=await fetch(h);const i=Ve&&("stream"===l||"response"===l);if(Ve&&(a||i&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=H.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&Ce(t,_e(Ne(a),!0))||[];s=new Response(Ie(s.body,65536,n,(()=>{r&&r(),m&&m()})),e)}l=l||"text";let b=await Xe[H.findKey(Xe,l)||"text"](s,e);return!i&&m&&m(),await new Promise(((t,n)=>{xe(t,n,{data:b,headers:Se.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:h})}))}catch(t){if(m&&m(),t&&"TypeError"===t.name&&/fetch/i.test(t.message))throw Object.assign(new $("Network Error",$.ERR_NETWORK,e,h),{cause:t.cause||t});throw $.from(t,t&&t.code,e,h)}})};H.forEach(Qe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ze=e=>`- ${e}`,Ye=e=>H.isFunction(e)||null===e||!1===e,et=e=>{e=H.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Ye(n)&&(r=Qe[(t=String(n)).toLowerCase()],void 0===r))throw new $(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Ze).join("\n"):" "+Ze(e[0]):"as no adapter specified";throw new $("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function tt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new je(null,e)}function nt(e){return tt(e),e.headers=Se.from(e.headers),e.data=Te.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et(e.adapter||ye.adapter)(e).then((function(t){return tt(e),t.data=Te.call(e,e.transformResponse,t),t.headers=Se.from(t.headers),t}),(function(t){return ve(t)||(tt(e),t&&t.response&&(t.response.data=Te.call(e,e.transformResponse,t.response),t.response.headers=Se.from(t.response.headers))),Promise.reject(t)}))}const rt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{rt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ot={};rt.transitional=function(e,t,n){function r(e,t){return"[Axios v1.8.4] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new $(r(o," has been removed"+(t?" in "+t:"")),$.ERR_DEPRECATED);return t&&!ot[o]&&(ot[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}},rt.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const st={assertOptions:function(e,t,n){if("object"!=typeof e)throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new $("option "+s+" must be "+n,$.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new $("Unknown option "+s,$.ERR_BAD_OPTION)}},validators:rt},it=st.validators;class at{constructor(e){this.defaults=e,this.interceptors={request:new se,response:new se}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}catch(e){}}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Be(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&st.assertOptions(n,{silentJSONParsing:it.transitional(it.boolean),forcedJSONParsing:it.transitional(it.boolean),clarifyTimeoutError:it.transitional(it.boolean)},!1),null!=r&&(H.isFunction(r)?t.paramsSerializer={serialize:r}:st.assertOptions(r,{encode:it.function,serialize:it.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),st.assertOptions(t,{baseUrl:it.spelling("baseURL"),withXsrfToken:it.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&H.merge(o.common,o[t.method]);o&&H.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Se.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[nt.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=nt.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return oe(Fe((e=Be(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}H.forEach(["delete","get","head","options"],(function(e){at.prototype[e]=function(t,n){return this.request(Be(n||{},{method:e,url:t,data:(n||{}).data}))}})),H.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Be(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}at.prototype[e]=t(),at.prototype[e+"Form"]=t(!0)}));const ct=at;class lt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new je(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new lt((function(t){e=t})),cancel:e}}}const ut=lt,ft={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ft).forEach((([e,t])=>{ft[t]=e}));const dt=ft,ht=function e(t){const r=new ct(t),o=n(ct.prototype.request,r);return H.extend(o,ct.prototype,r,{allOwnKeys:!0}),H.extend(o,r,null,{allOwnKeys:!0}),o.create=function(n){return e(Be(t,n))},o}(ye);ht.Axios=ct,ht.CanceledError=je,ht.CancelToken=ut,ht.isCancel=ve,ht.VERSION="1.8.4",ht.toFormData=Z,ht.AxiosError=$,ht.Cancel=ht.CanceledError,ht.all=function(e){return Promise.all(e)},ht.spread=function(e){return function(t){return e.apply(null,t)}},ht.isAxiosError=function(e){return H.isObject(e)&&!0===e.isAxiosError},ht.mergeConfig=Be,ht.AxiosHeaders=Se,ht.formToJSON=e=>pe(H.isHTMLForm(e)?new FormData(e):e),ht.getAdapter=et,ht.HttpStatusCode=dt,ht.default=ht;const pt=ht;class mt{constructor(e){this.query=e}async doSearch(){try{let e=await pt("https://forkify-api.herokuapp.com/api/search?q="+this.query);return this.recipes=e.data.recipes}catch(e){alert("Got a problem here")}}}const yt={searchForm:document.querySelector(".search"),searchInput:document.querySelector(".search__field"),searchResultList:document.querySelector(".results__list")},bt=e=>{const t=`\n<li>\n                    <a class="results__link results__link--active" href="#${e.recipe_id}">\n                        <figure class="results__fig">\n                            <img src="${e.image_url}" alt="Test">\n                        </figure>\n                        <div class="results__data">\n                            <h4 class="results__name">${e.title}</h4>\n                            <p class="results__author">${e.publisher}</p>\n                        </div>\n                    </a>\n                </li>`;yt.searchResultList.insertAdjacentHTML("beforeend",t)},gt={};yt.searchForm.addEventListener("submit",(e=>{e.preventDefault(),(async()=>{const e=yt.searchInput.value;e&&(gt.search=new mt(e),await gt.search.doSearch(),null==gt.search.result?alert("Such echtes Essen"):gt.search.recipes.forEach(bt))})()}))})();