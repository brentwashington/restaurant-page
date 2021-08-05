(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(645),o=n.n(r),a=n(667),c=n.n(a),i=new URL(n(851),n.b),d=o()((function(e){return e[1]})),s=c()(i);d.push([e.id,"body {\n    background-image: url("+s+");\n    background-size: 100vw 100vh;\n    background-repeat: no-repeat;\n    color: white;\n}\n\nheader {\n    text-align: center;\n}\n\n#description {\n    text-align: center;\n}\n\n#button-container {\n    display: flex;\n    justify-content: center;\n}\n\nimg {\n    width: 1.2em;\n    height: 1.2em;\n    margin-left: 10px;\n}\n\nimg:hover {\n    opacity: 0.5;\n}\n\nfooter {\n    display: flex;\n    position: fixed;\n    background-color: black;\n    background: rgba(0, 0, 0, 0.5);\n    justify-content: space-around;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n.footer-content {\n    display: flex;\n    align-self: center;\n}",""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var i=0;i<e.length;i++){var d=[].concat(e[i]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],u=a[s]||0,l="".concat(s," ").concat(u);a[s]=u+1;var p=n(l),f={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:l,updater:o(f,r),references:1}),c.push(l)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=r(e,o),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},946:(e,t,n)=>{e.exports=n.p+"266ca63177bca6f330a7.png"},851:(e,t,n)=>{e.exports=n.p+"a238139cc03553177fc7.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),d=n.n(i),s=n(216),u=n.n(s),l=n(589),p=n.n(l),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=n(946);(function(){const e=document.createTextNode("Three Corners"),t=document.createElement("h1");t.appendChild(e);const n=document.createElement("header");n.appendChild(t),document.body.appendChild(n)})(),function(){const e=document.createElement("main"),t=document.createElement("div");t.id="description";const n=document.createElement("p"),r=document.createElement("p"),o=document.createTextNode("Tastiest nachos around"),a=document.createTextNode("Family-Owned");n.appendChild(o),r.appendChild(a),t.append(n,r),e.appendChild(t),document.body.appendChild(e)}(),function(){const e=document.createElement("footer"),t=document.createElement("div");t.className="footer-content";const n=document.createElement("p"),r=document.createElement("a");r.setAttribute("href","https://github.com/BrentWashington");const o=document.createElement("img");o.src=h,o.alt="Github Logo";const a=document.createTextNode("Brent Washington"),c=document.createTextNode("Favicon made by turkkub from www.flaticon.com"),i=document.createElement("div");i.className="footer-content",r.appendChild(o),n.append(a,r),t.appendChild(n),i.appendChild(c),e.appendChild(t),e.appendChild(i),document.body.appendChild(e)}()})()})();