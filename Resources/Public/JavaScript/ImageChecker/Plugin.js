/*! For license information please see Plugin.js.LICENSE.txt */
!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=10)}([function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(4));e.exports=(0,n.default)("vendor")().React},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(4));e.exports=(0,n.default)("vendor")().PropTypes},function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return __extends})),r.d(t,"__assign",(function(){return __assign})),r.d(t,"__rest",(function(){return __rest})),r.d(t,"__decorate",(function(){return __decorate})),r.d(t,"__param",(function(){return __param})),r.d(t,"__metadata",(function(){return __metadata})),r.d(t,"__awaiter",(function(){return __awaiter})),r.d(t,"__generator",(function(){return __generator})),r.d(t,"__createBinding",(function(){return __createBinding})),r.d(t,"__exportStar",(function(){return __exportStar})),r.d(t,"__values",(function(){return __values})),r.d(t,"__read",(function(){return __read})),r.d(t,"__spread",(function(){return __spread})),r.d(t,"__spreadArrays",(function(){return __spreadArrays})),r.d(t,"__await",(function(){return __await})),r.d(t,"__asyncGenerator",(function(){return __asyncGenerator})),r.d(t,"__asyncDelegator",(function(){return __asyncDelegator})),r.d(t,"__asyncValues",(function(){return __asyncValues})),r.d(t,"__makeTemplateObject",(function(){return __makeTemplateObject})),r.d(t,"__importStar",(function(){return __importStar})),r.d(t,"__importDefault",(function(){return __importDefault})),r.d(t,"__classPrivateFieldGet",(function(){return __classPrivateFieldGet})),r.d(t,"__classPrivateFieldSet",(function(){return __classPrivateFieldSet}));var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function __assign(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function __decorate(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}function __param(e,t){return function(r,n){t(r,n,e)}}function __metadata(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function __awaiter(e,t,r,n){return new(r||(r=Promise))((function(a,o){function fulfilled(e){try{step(n.next(e))}catch(e){o(e)}}function rejected(e){try{step(n.throw(e))}catch(e){o(e)}}function step(e){e.done?a(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))}function __generator(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function verb(o){return function(u){return function step(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function __createBinding(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function __exportStar(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i}function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var o=arguments[t],i=0,u=o.length;i<u;i++,a++)n[a]=o[i];return n}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,a=r.apply(e,t||[]),o=[];return n={},verb("next"),verb("throw"),verb("return"),n[Symbol.asyncIterator]=function(){return this},n;function verb(e){a[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||resume(e,t)}))})}function resume(e,t){try{!function step(e){e.value instanceof __await?Promise.resolve(e.value.v).then(fulfill,reject):settle(o[0][2],e)}(a[e](t))}catch(e){settle(o[0][3],e)}}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){e(t),o.shift(),o.length&&resume(o[0][0],o[0][1])}}function __asyncDelegator(e){var t,r;return t={},verb("next"),verb("throw",(function(e){throw e})),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(n,a){t[n]=e[n]?function(t){return(r=!r)?{value:__await(e[n](t)),done:"return"===n}:a?a(t):t}:a}}function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=__values(e),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(r){t[r]=e[r]&&function(t){return new Promise((function(n,a){(function settle(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,a,(t=e[r](t)).done,t.value)}))}}}function __makeTemplateObject(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function __importStar(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function __importDefault(e){return e&&e.__esModule?e:{default:e}}function __classPrivateFieldGet(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function __classPrivateFieldSet(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},function(e,t,r){e.exports={imageCheckResult:"CheckResultItem-module__imageCheckResult___W17Y3",imageCheckResult__label:"CheckResultItem-module__imageCheckResult__label___1DueN",imageCheckResult__icon:"CheckResultItem-module__imageCheckResult__icon___2N4Ry",error:"CheckResultItem-module__error___EOVtP",imageCheckResult__value:"CheckResultItem-module__imageCheckResult__value___2zUs_",errorMessage:"CheckResultItem-module__errorMessage___3oKk_"}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2);t.default=function readFromConsumerApi(e){return function(){for(var t,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"]["@"+e])return(t=window["@Neos:HostPluginAPI"])["@"+e].apply(t,n.__spread(r));throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(4));e.exports=(0,n.default)("NeosProjectPackages")().ReactUiComponents},function(e,t,r){e.exports={imageCheck:"ImageCheck-module__imageCheck___2pq8E",imageCheck__results:"ImageCheck-module__imageCheck__results___3M1_o"}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),a=n.__importDefault(r(16)),o=n.__importDefault(r(17)),i=function(e){function SynchronousRegistry(t){var r=e.call(this,t)||this;return r._registry=[],r}return n.__extends(SynchronousRegistry,e),SynchronousRegistry.prototype.set=function(e,t,r){if(void 0===r&&(r=0),"string"!=typeof e)throw new Error("Key must be a string");if("string"!=typeof r&&"number"!=typeof r)throw new Error("Position must be a string or a number");var n={key:e,value:t};r&&(n.position=r);var a=this._registry.findIndex((function(t){return t.key===e}));return-1===a?this._registry.push(n):this._registry[a]=n,t},SynchronousRegistry.prototype.get=function(e){if("string"!=typeof e)return console.error("Key must be a string"),null;var t=this._registry.find((function(t){return t.key===e}));return t?t.value:null},SynchronousRegistry.prototype._getChildrenWrapped=function(e){var t=this._registry.filter((function(t){return 0===t.key.indexOf(e+"/")}));return o.default(t)},SynchronousRegistry.prototype.getChildrenAsObject=function(e){var t={};return this._getChildrenWrapped(e).forEach((function(e){t[e.key]=e.value})),t},SynchronousRegistry.prototype.getChildren=function(e){return this._getChildrenWrapped(e).map((function(e){return e.value}))},SynchronousRegistry.prototype.has=function(e){return"string"!=typeof e?(console.error("Key must be a string"),!1):Boolean(this._registry.find((function(t){return t.key===e})))},SynchronousRegistry.prototype._getAllWrapped=function(){return o.default(this._registry)},SynchronousRegistry.prototype.getAllAsObject=function(){var e={};return this._getAllWrapped().forEach((function(t){e[t.key]=t.value})),e},SynchronousRegistry.prototype.getAllAsList=function(){return this._getAllWrapped().map((function(e){return Object.assign({id:e.key},e.value)}))},SynchronousRegistry}(a.default);t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchWithErrorHandling=void 0;var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(4));t.default=(0,n.default)("NeosProjectPackages")().NeosUiBackendConnectorDefault;var a=(0,n.default)("NeosProjectPackages")().NeosUiBackendConnector.fetchWithErrorHandling;t.fetchWithErrorHandling=a},function(e,t,r){e.exports={imageEditorContainer:"ImageEditor-module__imageEditorContainer___22F7e"}},function(e,t,r){"use strict";r(11)},function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=_interopRequireDefault(r(12)),o=_interopRequireDefault(r(19));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(0,a.default)("Shel.Neos.ImageChecker:ImageEditor",{},(function(e,t){var r=t.frontendConfiguration["Shel.Neos.ImageChecker:ImageChecker"],a=r.enabled,i=r.defaults;if(a){var u=e.get("inspector").get("editors"),s=u.get("Neos.Neos/Inspector/Editors/ImageEditor");u.set("Neos.Neos/Inspector/Editors/ImageEditor",n({},s,{component:(0,o.default)(s.component,i)}))}}))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),a=n.__importDefault(r(13));t.createConsumerApi=a.default;var o=n.__importDefault(r(4));t.readFromConsumerApi=o.default;var i=r(15);t.SynchronousRegistry=i.SynchronousRegistry,t.SynchronousMetaRegistry=i.SynchronousMetaRegistry,t.default=o.default("manifest")},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2).__importDefault(r(14)),a=function createReadOnlyValue(e){return{value:e,writable:!1,enumerable:!1,configurable:!0}};t.default=function createConsumerApi(e,t){var r={};Object.keys(t).forEach((function(e){Object.defineProperty(r,e,a(t[e]))})),Object.defineProperty(r,"@manifest",a(n.default(e))),Object.defineProperty(window,"@Neos:HostPluginAPI",a(r))}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){return function(t,r,n){var a;e.push(((a={})[t]={options:r,bootstrap:n},a))}}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),a=n.__importDefault(r(7));t.SynchronousRegistry=a.default;var o=n.__importDefault(r(18));t.SynchronousMetaRegistry=o.default},function(e,t,r){"use strict";t.__esModule=!0;var n=function n(e){this.SERIAL_VERSION_UID="d8a5aa78-978e-11e6-ae22-56b6b6499611",this.description=e};t.default=n},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2);t.default=function positionalArraySorter(e,t,r){var a,o,i,u,s,l,c,f,_,d,p,h,y,m;void 0===t&&(t="position"),void 0===r&&(r="key");var v="string"==typeof t?function(e){return e[t]}:t,g={},b={},w={},k={},S={},O={};e.forEach((function(e,t){var n=e[r]?e[r]:String(t);g[n]=t;var a=v(e),o=String(a||t),i=!1;if(o.startsWith("start")){var u=(s=o.match(/start\s+(\d+)/))&&s[1]?Number(s[1]):0;w[u]||(w[u]=[]),w[u].push(n)}else if(o.startsWith("end")){var s;u=(s=o.match(/end\s+(\d+)/))&&s[1]?Number(s[1]):0;k[u]||(k[u]=[]),k[u].push(n)}else if(o.startsWith("before")){if(c=o.match(/before\s+(\S+)(\s+(\d+))?/)){var l=c[1];u=c[3]?Number(c[3]):0;S[l]||(S[l]={}),S[l][u]||(S[l][u]=[]),S[l][u].push(n)}else i=!0}else if(o.startsWith("after")){var c;if(c=o.match(/after\s+(\S+)(\s+(\d+))?/)){l=c[1],u=c[3]?Number(c[3]):0;O[l]||(O[l]={}),O[l][u]||(O[l][u]=[]),O[l][u].push(n)}else i=!0}else i=!0;if(i){var f=parseFloat(o);!isNaN(f)&&isFinite(f)||(f=t),b[f]||(b[f]=[]),b[f].push(n)}}));var R=[],x=[],j=[],E=[],P=function sortedWeights(e,t){var r=Object.keys(e).map((function(e){return Number(e)})).sort((function(e,t){return e-t}));return t?r:r.reverse()},C=function addToResults(e,t){e.forEach((function(e){var r,a,o,i;if(!(E.indexOf(e)>=0)){if(E.push(e),S[e]){var u=P(S[e],!0);try{for(var s=n.__values(u),l=s.next();!l.done;l=s.next()){var c=l.value;addToResults(S[e][c],t)}}catch(e){r={error:e}}finally{try{l&&!l.done&&(a=s.return)&&a.call(s)}finally{if(r)throw r.error}}}if(t.push(e),O[e]){var f=P(O[e],!1);try{for(var _=n.__values(f),d=_.next();!d.done;d=_.next()){c=d.value;addToResults(O[e][c],t)}}catch(e){o={error:e}}finally{try{d&&!d.done&&(i=_.return)&&i.call(_)}finally{if(o)throw o.error}}}}}))};try{for(var I=n.__values(P(w,!1)),M=I.next();!M.done;M=I.next()){var N=M.value;C(w[N],R)}}catch(e){a={error:e}}finally{try{M&&!M.done&&(o=I.return)&&o.call(I)}finally{if(a)throw a.error}}try{for(var D=n.__values(P(b,!0)),q=D.next();!q.done;q=D.next()){N=q.value;C(b[N],x)}}catch(e){i={error:e}}finally{try{q&&!q.done&&(u=D.return)&&u.call(D)}finally{if(i)throw i.error}}try{for(var A=n.__values(P(k,!0)),T=A.next();!T.done;T=A.next()){N=T.value;C(k[N],j)}}catch(e){s={error:e}}finally{try{T&&!T.done&&(l=A.return)&&l.call(A)}finally{if(s)throw s.error}}try{for(var W=n.__values(Object.keys(S)),F=W.next();!F.done;F=W.next()){var z=F.value;if(!(E.indexOf(z)>=0))try{for(var V=(_=void 0,n.__values(P(S[z],!1))),H=V.next();!H.done;H=V.next()){N=H.value;C(S[z][N],R)}}catch(e){_={error:e}}finally{try{H&&!H.done&&(d=V.return)&&d.call(V)}finally{if(_)throw _.error}}}}catch(e){c={error:e}}finally{try{F&&!F.done&&(f=W.return)&&f.call(W)}finally{if(c)throw c.error}}try{for(var B=n.__values(Object.keys(O)),$=B.next();!$.done;$=B.next()){z=$.value;if(!(E.indexOf(z)>=0))try{for(var U=(y=void 0,n.__values(P(O[z],!1))),G=U.next();!G.done;G=U.next()){N=G.value;C(O[z][N],x)}}catch(e){y={error:e}}finally{try{G&&!G.done&&(m=U.return)&&m.call(U)}finally{if(y)throw y.error}}}}catch(e){p={error:e}}finally{try{$&&!$.done&&(h=B.return)&&h.call(B)}finally{if(p)throw p.error}}return n.__spread(R,x,j).map((function(e){return g[e]})).map((function(t){return e[t]}))}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),a=function(e){function SynchronousMetaRegistry(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(SynchronousMetaRegistry,e),SynchronousMetaRegistry.prototype.set=function(t,r){if("d8a5aa78-978e-11e6-ae22-56b6b6499611"!==r.SERIAL_VERSION_UID)throw new Error("You can only add registries to a meta registry");return e.prototype.set.call(this,t,r)},SynchronousMetaRegistry}(n.__importDefault(r(7)).default);t.default=a},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return makeCustomImageEditor}));var n=r(0),a=r.n(n),o=r(1),i=r.n(o),u=r(8),s=r.n(u),l=r(5),c=r(3),f=r.n(c);var _=a.a.memo(({label:e,checkResult:t})=>a.a.createElement(a.a.Fragment,null,a.a.createElement("tr",{className:f.a.imageCheckResult},a.a.createElement("td",{className:f.a.imageCheckResult__label},e,":"),a.a.createElement("td",{className:[f.a.imageCheckResult__icon,!t.isValid&&f.a.error].join(" ")},a.a.createElement(l.Icon,{icon:t.isValid?"check-circle":"exclamation-triangle"})),a.a.createElement("td",{className:f.a.imageCheckResult__value,title:t.value},t.value)),t.errorMessage&&a.a.createElement("tr",null,a.a.createElement("td",{colSpan:3},a.a.createElement("p",{className:f.a.errorMessage,dangerouslySetInnerHTML:{__html:t.errorMessage}})))));var d=r(6),p=r.n(d);var h=a.a.memo(({value:e,options:t,translate:r})=>{const[o,i]=Object(n.useState)(null),[u,c]=Object(n.useState)(null),[f,d]=Object(n.useState)(null),[h,y]=Object(n.useState)(null),[m,v]=Object(n.useState)(!1),g=Object(n.useCallback)(()=>{v(e=>!e)},[]),b=!1===(null==u?void 0:u.isValid)||!1===(null==f?void 0:f.isValid)||!1===(null==h?void 0:h.isValid);return Object(n.useEffect)(()=>{if("string"!=typeof e&&(null==e?void 0:e.__identity)){const{loadImageMetadata:t}=s.a.get().endpoints;t(e.__identity).then(i)}},[e]),Object(n.useEffect)(()=>{o?(function checkFilename(e,t,r){const n=e.split("/").pop(),a=new RegExp(t.allowedPattern).test(n);return Promise.resolve({isValid:a,errorMessage:a?"":r("checks.fileName.error",`The filename has to match the pattern "${t.allowedPattern}"`,{allowedPattern:t.allowedPattern}),value:n})}(o.originalImageResourceUri,t.fileName,r).then(c),function checkFileSize(e,t,r){return fetch(e,{method:"HEAD",cache:"no-cache"}).then(async n=>{if(n.ok){const a=n.headers.get("Content-Type");let o=parseInt(n.headers.get("Content-Length"))||0;if(!o&&"image/svg+xml"===a){o=(await fetch(e,{method:"GET",cache:"no-cache"}).then(e=>e.blob())).size}let i=t.default||2048;switch(a){case"image/png":i=t.png||i;break;case"image/jpeg":i=t.jpg||i;break;case"image/svg+xml":i=t.svg||i}const u=o<=1024*i;let s=o,l="B";return s>1024&&(s/=1024,l="KB"),s>1024&&(s/=1024,l="MB"),{isValid:u,value:`${Math.round(s)} ${l}`,errorMessage:u?"":r("checks.fileSize.error",`File size must be less or equal than ${i} KB`,{maxSize:i})}}throw new Error}).catch(()=>({isValid:!1,value:"n/a",errorMessage:r("checks.fileSize.fetchError","Error while fetching file size")}))}(o.originalImageResourceUri,t.fileSize,r).then(d),"image/svg+xml"!==o.mediaType&&function checkFileDimensions(e,t,r){let{width:n,height:a}=e;n||(n=0),a||(a=0);const o=(null==t?void 0:t.maxWidth)||1e4,i=(null==t?void 0:t.maxHeight)||1e4,u=(null==t?void 0:t.minWidth)||0,s=(null==t?void 0:t.minHeight)||0,l=(0===n||n<=o)&&(0===a||a<=i),c=n>=u&&a>=s,f=r("checks.dimensions.error",`Image dimensions must be between ${u}x${s}px and ${o}x${i}px`,{minWidth:u,minHeight:s,maxWidth:o,maxHeight:i});return Promise.resolve({isValid:l&&c,value:n||a?`${n} x ${a}px`:"n/a",errorMessage:l&&c?"":f})}(o.originalDimensions,t.fileDimensions,r).then(y)):(c(null),d(null),y(null))},[o]),Object(n.useEffect)(()=>{b&&v(!0)},[b]),o?a.a.createElement("div",{className:p.a.imageCheck},a.a.createElement(l.IconButton,{icon:b?"exclamation-triangle":"info",size:"small",style:b?"warn":m?"brand":"lighter",title:b?r("checks.hasWarnings","The asset is invalid"):r("checks.valid","The asset is valid"),onClick:g}),m&&a.a.createElement("div",{className:p.a.imageCheck__results},a.a.createElement("table",null,u&&a.a.createElement(_,{label:r("checks.filename.label","Filename"),checkResult:u}),f&&a.a.createElement(_,{label:r("checks.filesize.label","Filesize"),checkResult:f}),h&&a.a.createElement(_,{label:r("checks.dimensions.label","Dimensions"),checkResult:h})))):null}),y=r(9),m=r.n(y);function makeCustomImageEditor(e,t){var r;return(r=class MyImageEditor extends n.PureComponent{constructor(e){super(e),this.state={options:{}},this.translate=this.translate.bind(this)}componentDidMount(){this.mergeOptions()}componentDidUpdate(e){this.props.value!==e.value&&this.mergeOptions()}mergeOptions(){const{options:{features:{imageCheck:e}}}=this.props;this.setState({options:e?{fileSize:Object.assign(Object.assign({},t.fileSize),e.fileSize),fileDimensions:Object.assign(Object.assign({},t.fileDimensions),e.fileDimensions),fileName:Object.assign(Object.assign({},t.fileName),e.fileName)}:t})}translate(e,t,r){return this.props.i18nRegistry.translate(e,t,r,"Shel.Neos.ImageChecker","Main")}render(){const{value:t}=this.props,{options:r}=this.state;return n.createElement("div",{className:m.a.imageEditorContainer},n.createElement(e,Object.assign({},this.props)),t&&r&&n.createElement(h,{value:t,options:r,translate:this.translate}))}}).propTypes={value:i.a.oneOfType([i.a.shape({__identifier:i.a.string}),i.a.string]),commit:i.a.func.isRequired,validationErrors:i.a.array,options:i.a.object,i18nRegistry:i.a.object.isRequired},r}}]);
//# sourceMappingURL=Plugin.js.map