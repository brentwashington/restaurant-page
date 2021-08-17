(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(645),a=t.n(o)()((function(e){return e[1]}));a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]),a.push([e.id,".active {\n    color: orange;\n    background: rgba(0, 0, 0, 0.3)\n}\n\n.inactive {\n    display: none;\n}\n\nbody {\n    background-image: url('https://cdn.winsightmedia.com/platform/files/public/2018-04/background/twin-peaks-nachos_1524861420.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    color: white;\n}\n\nnav {\n    text-align: center;\n    margin-top: 20px;\n}\n\nli {\n    display: inline;\n    margin: 0px 8px;\n}\n\na {\n    text-decoration: none;\n    padding: 8px;\n    color: white;\n}\n\nli a:hover {\n    background: rgba(0, 0, 0, 0.2);\n}\n\nh1 {\n    margin-top: 40px;\n    font-family: 'Pacifico', cursive;\n    font-size: 5em;\n}\n\nheader {\n    text-align: center;\n}\n\nmain {\n    display: flex;\n    justify-content: center;\n    padding-bottom: 15px;\n    background: rgba(0, 0, 0, 0.5);\n}\n\nbutton {\n    background-color: gold;\n    color: white;\n    border: goldenrod;\n    border-radius: 25px;\n    padding: 25px 100px;\n    font-size: 75%;\n}\n\nbutton:hover {\n    background: rgba(255, 230, 0, 0.5);\n}\n\n#description {\n    text-align: center;\n    font-size: 2em;\n}\n\n.contact-container {\n    display: flex;\n    justify-content: center;\n}\n\n#github-logo {\n    width: 1.2em;\n    height: 1.2em;\n    margin-left: 5px;\n}\n\n#github-logo:hover {\n    opacity: 0.5;\n}\n\n#contact-card {\n    text-align: center;\n    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.4);\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 15px;\n    border-radius: 5px;\n    width: 25em;\n}\n\n#credits {\n    display: flex;\n    justify-content: space-around;\n}\n\n.credits-content {\n    display: flex;\n    align-self: center;\n}\n\n.card-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 18rem);\n    grid-template-rows: auto;\n    justify-content: center;\n    gap: 3rem;\n    margin-bottom: 25px;\n}\n\n.card {\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.5);\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 2em;\n    text-align: center;\n}\n\n.dish-image {\n    width: 100%;\n    height: 70%;\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var c=0;c<this.length;c++){var r=this[c][0];null!=r&&(a[r]=!0)}for(var i=0;i<e.length;i++){var d=[].concat(e[i]);o&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var c={},r=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(n[u].references++,n[u].updater(m)):n.push({identifier:p,updater:a(m,o),references:1}),r.push(p)}return r}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var c=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<c.length;r++){var i=t(c[r]);n[i].references--}for(var d=o(e,a),s=0;s<c.length;s++){var l=t(c[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o=t.css,a=t.media,c=t.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(o,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},946:(e,n,t)=>{e.exports=t.p+"266ca63177bca6f330a7.png"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var c=n[o]={id:o,exports:{}};return e[o](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),c=t(569),r=t.n(c),i=t(565),d=t.n(i),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=r().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=document.createElement("main");function g(){f.classList.add("inactive")}const v=document.createElement("nav"),b=document.createElement("div");function x(){b.classList.remove("contact-container"),b.classList.add("inactive")}const y=document.createElement("div");function C(){y.classList.remove("card-grid"),y.classList.add("inactive")}var E=t(946);(function(){const e=document.createElement("div");e.id="credits";const n=document.createElement("div");n.className="credits-content";const t=document.createElement("p"),o=document.createElement("a");o.setAttribute("href","https://github.com/BrentWashington");const a=document.createElement("img");a.id="github-logo",a.src=E,a.alt="Github Logo";const c=document.createTextNode("Brent Washington"),r=document.createTextNode("Favicon made by turkkub from www.flaticon.com"),i=document.createElement("div");i.className="credits-content",o.appendChild(a),t.append(c,o),n.appendChild(t),i.appendChild(r),e.appendChild(n),e.appendChild(i),document.body.appendChild(e)})(),function(){const e=document.createElement("header"),n=document.createTextNode("Three Corners"),t=document.createElement("h1");!function(){const e=document.createElement("ul"),n=["Home","Menu","Contact"],t=["home","menu","contact"];for(let o=0;o<3;o++){const a=document.createElement("li"),c=document.createElement("a");c.textContent=n[o],c.id=t[o],c.href="#",a.appendChild(c),e.appendChild(a)}v.appendChild(e)}(),e.appendChild(v),t.appendChild(n),e.appendChild(t),document.body.appendChild(e)}(),function(){const e=document.createElement("div");e.id="description";const n=["Tastiest food around","Family-Owned","Monday - Saturday: 9AM - 10PM","Sunday: 10AM - 8PM"];for(let t=0;t<n.length;t++){const o=document.createElement("p");o.textContent=n[t],e.appendChild(o)}const t=document.createElement("button");t.textContent="Order now!",e.appendChild(t),f.appendChild(e),document.body.appendChild(f)}(),function(){const e=["Supreme Nachos","Spicy Beef Nachos","Mozzarella Sticks","Fresh-Cut French Fries","Regular French Fries","Ginger Kombucha"],n=["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nachos-supreme-horizontal-1547669254.png","https://www.mexicanplease.com/wp-content/uploads/2017/02/beef-nachos-just-out-of-the-oven-on-sheet-tray.jpg","https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/4/11/0/EI1D01_mozzarella-sticks_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545262464.jpeg","https://www.foodnetwork.com/content/dam/images/food/video/0/01/013/0137/0137122.jpg","https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg","https://savingdollarsandsense.com/wp-content/uploads/2020/03/Ginger-Kombucha-recipe-8-scaled.jpg"];for(let t=0;t<e.length;t++){const o=document.createElement("div");o.classList.add("card");const a=document.createElement("img");a.classList.add("dish-image"),a.src=n[t];const c=document.createElement("div");c.classList.add("card-contents");const r=document.createElement("h4");r.textContent=e[t],c.appendChild(r),o.appendChild(a),o.appendChild(c),y.appendChild(o)}document.body.appendChild(y)}(),function(){const e=document.createElement("div");e.id="contact-card";const n=["Phone","Email","Address"],t=["214-591-3122","threecorners@email.com","3138 Union Street - Dallas, TX"];for(let o=0;o<3;o++){const a=document.createElement("h4"),c=document.createElement("u"),r=document.createElement("p");r.textContent=t[o],c.textContent=n[o],a.appendChild(c),e.appendChild(a),e.appendChild(r)}b.appendChild(e),document.body.appendChild(b)}(),C(),x();const w=document.getElementById("home");w.classList.add("active"),w.addEventListener("click",(()=>{w.classList.add("active"),L.classList.remove("active"),k.classList.remove("active"),C(),x(),f.classList.remove("inactive")})),document.querySelector("button").addEventListener("click",(()=>{j()}));const L=document.getElementById("menu");L.addEventListener("click",(()=>{j()}));const k=document.getElementById("contact");function j(){L.classList.add("active"),w.classList.remove("active"),k.classList.remove("active"),g(),x(),y.classList.remove("inactive"),y.classList.add("card-grid")}k.addEventListener("click",(()=>{k.classList.add("active"),L.classList.remove("active"),w.classList.remove("active"),g(),C(),b.classList.remove("inactive"),b.classList.add("contact-container")}))})()})();