function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r.register("cuxSx",(function(e,t){e.exports=new URL(r("kyEFX").resolve("5cqGr"),import.meta.url).toString()})),r.register("ik8OW",(function(e,t){e.exports=new URL(r("kyEFX").resolve("ec6t9"),import.meta.url).toString()})),r.register("60XyP",(function(e,t){e.exports=new URL(r("kyEFX").resolve("ksn6t"),import.meta.url).toString()})),r("kyEFX").register(JSON.parse('{"7nZc1":"shopping-list.5e0c3bc4.js","5cqGr":"image1.7b7eb902.svg","ec6t9":"image2.f29f9a4f.svg","ksn6t":"image3.70a8a40e.svg"}'));let o=JSON.parse(localStorage.getItem("bookCards"));const a=document.querySelector(".js-markup-shopping__list"),s=document.querySelector(".js-placeholder"),l=document.querySelector(".pagination");function c(e){a.innerHTML=e.reduce(((e,{_id:t,book_image:n,title:i,list_name:o,description:a,author:s,buy_links:l})=>e+`<li class="shopping__list__item ">\n        <button type="button" class="shopping__list__btn__delete delete__button" id="${t}">\n        </button>\n        <img\n          class="shopping__list__book__image"\n          src="${n||"https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png"}"\n          alt="${i||"Sorry no title"}"\n        />\n        <div class="shopping__list__box__description">\n          <h3 class="shopping__list__book__title">${i||"Sorry no title"}</h3>\n          <p class="shopping__list__category">${o||"Sorry no category"}</p>\n          <p class="shopping__list__description">${a||"Sorry no description"}</p>\n          <p class="shopping__list__author">${s}</p>\n        </div>\n        <ul class="shopping__list__link__list">\n        <li class="shopping__list__link__item">\n          <a href="${l[0].url}" target="_blank"\n            ><img\n              class="shopping__list__link__images amazon"\n              src="${r("cuxSx")}"\n              alt="${l[0].name}"\n          /></a>\n        </li>\n        <li class="shopping__list__link__item">\n          <a href="${l[1].url}" target="_blank"\n            ><img\n              class="shopping__list__link__images"\n              src="${r("ik8OW")}"\n              alt="${l[1].url}"\n          /></a>\n        </li>\n        <li class="shopping__list__link__item">\n          <a href="${l[4].url}" target="_blank"\n            ><img\n              class="shopping__list__link__images"\n              src="${r("60XyP")}"\n              alt="${l[4].name}"\n          /></a>\n        </li>\n      </ul>\n      </li>`),""),e.length?(s.style.display="none",a.style.display="flex",l.style.display="flex"):(a.style.display="none",l.style.display="none",s.style.display="flex")}a.addEventListener("click",(function(e){if(!e.target.id)return;const t=e.target.id,n=o.filter((e=>e._id!==t));localStorage.setItem("bookCards",JSON.stringify(n)),o=JSON.parse(localStorage.getItem("bookCards")),R()}));var u,d=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,g=/^0o[0-7]+$/i,f=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,b=m||y||Function("return this")(),h=Object.prototype.toString,v=Math.max,S=Math.min,k=function(){return b.Date.now()};function x(e,t,n){var i,r,o,a,s,l,c=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function _(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function g(e){return c=e,s=setTimeout(m,t),u?_(e):a}function f(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function m(){var e=k();if(f(e))return y(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?S(n,o-(e-c)):n}(e))}function y(e){return s=void 0,p&&i?_(e):(i=r=void 0,a)}function b(){var e=k(),n=f(e);if(i=arguments,r=this,l=e,n){if(void 0===s)return g(l);if(d)return s=setTimeout(m,t),_(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=w(t)||0,E(n)&&(u=!!n.leading,o=(d="maxWait"in n)?v(w(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=r=s=void 0},b.flush=function(){return void 0===s?a:y(k())},b}function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==h.call(e)}(e))return NaN;if(E(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=E(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=_.test(e);return n||g.test(e)?f(e.slice(2),n?2:8):p.test(e)?NaN:+e}u=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return E(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),x(e,t,{leading:i,maxWait:t,trailing:r})};const $=document.querySelector(".pagination"),O=document.querySelector(".next-page"),L=document.querySelector(".prev-page"),q=document.querySelector(".first-page"),N=document.querySelector(".last-page"),T=document.querySelector(".numbers"),j=document.querySelector(".shopping__list__support");$.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.textContent.trim();"<"===t?C-=1:">"===t?C+=1:C="<<"===t?1:">>"===t?H:Number(t);C<=1?(q.disabled=!0,L.disabled=!0,O.disabled=!1,N.disabled=!1):C>=H?(N.disabled=!0,O.disabled=!0,L.disabled=!1,q.disabled=!1):(C<H||C>1)&&(O.disabled=!1,N.disabled=!1,L.disabled=!1,q.disabled=!1);R();const n=[...T.children];n.forEach((e=>{const t=Number(e.textContent.trim());if(C===t){document.querySelector(".active-page-pag")?.classList.remove("active-page-pag"),n[t-1].classList.add("active-page-pag")}}))})),T.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;document.querySelector(".active-page-pag")?.classList.remove("active-page-pag");e.target.classList.add("active-page-pag")}));let F=null,H=0,C=1;function R(){const e=window.innerWidth||document.documentElement.clientWidth;if(j.style.display=e<1440?"none":"flex",F=e<767?4:3,H=Math.ceil(o.length/F),(1===C||C>H)&&(T.innerHTML=function(e){const t=[];for(let n=1;n<=e;n+=1)n&&t.push(n);return t.reduce(((e,t)=>e+`<button type="button" class="page-link page-item current-page">${t}</button>`),"")}(H)),1===C){T.firstElementChild?.classList.add("active-page-pag")}if(T.children.length>H||C>H){const e=T.lastElementChild;if(C>H)return C-=1,e?.classList.add("active-page-pag"),void M(F);T.removeChild(e)}M(F)}function M(e){const t=(C-1)*e,n=t+e;c(o.slice(t,n))}window.addEventListener("resize",e(u)(R,500)),window.addEventListener("load",e(u)(R,500));
//# sourceMappingURL=shopping-list.5e0c3bc4.js.map
