!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var c=function(e){var t=e.blocks,n=e.btnLeft,c=e.btnRight,o=e.numberBlocks,r=e.container,l=e.field,i=document.querySelectorAll(t),s=(document.querySelector(n),document.querySelector(c),document.querySelectorAll(o),document.querySelector(r)),a=document.querySelector(l),d=window.getComputedStyle(s).width,u=1,f=0;a.style.width=100*i.length+"%",i.forEach((function(e){e.style.width=d}));var m=document.createElement("ul"),v=[];m.classList.add("main__nav-ul"),s.append(m);for(var y=0;y<i.length;y++){var h=document.createElement("li");h.setAttribute("data-slide-to",y+1),h.classList.add(o.slice(1)),m.append(h),v.push(h)}function L(){v.forEach((function(e){return e.style.opacity=".5"})),v[u-1].style.opacity=1}setInterval((function(){f==+d.slice(0,d.length-2)*(i.length-1)?f=0:f+=+d.slice(0,d.length-2),a.style.transform="translateX(-".concat(f,"px)"),u==i.length?u=1:u++,L()}),5e3),L()};var o=function(){var e;e=function(e,t){var n=(t=t||document).querySelectorAll(e);return[].slice.call(n)},window.fncSlider=function(t,n){e(t).forEach((function(t){!function(t,n){var c,o,r,l,i=(t=t).querySelector(".fnc-slider__slides"),s=e(".fnc-slide",t),a=e(".fnc-nav__control",t),d=e(".fnc-nav__bg",t),u=e(".fnc-nav__control-progress",t),f=s.length,m=1,v=!1,y=1e3*+parseFloat(getComputedStyle(i)["transition-duration"]),h=1e3*+parseFloat(getComputedStyle(i)["transition-delay"]),L=!1,b=!1;function g(){t.querySelector(".m--previous-slide").classList.remove("m--active-slide","m--previous-slide"),t.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg","m--previous-nav-bg"),o.classList.remove("m--before-sliding"),r.classList.remove("m--nav-bg-before"),l.classList.remove("m--prev-control"),l.classList.add("m--reset-progress"),l.offsetTop,l.classList.remove("m--reset-progress"),v=!1,t.offsetTop,L&&!b&&S()}function _(e){v||(v=!0,window.clearTimeout(c),m=e,(l=t.querySelector(".m--active-control")).classList.remove("m--active-control"),l.classList.add("m--prev-control"),t.querySelector(".fnc-nav__control-"+e).classList.add("m--active-control"),o=t.querySelector(".fnc-slide-"+e),r=t.querySelector(".fnc-nav__bg-"+e),t.querySelector(".m--active-slide").classList.add("m--previous-slide"),t.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg"),o.classList.add("m--before-sliding"),r.classList.add("m--nav-bg-before"),o.offsetTop,o.classList.add("m--active-slide"),r.classList.add("m--active-nav-bg"),setTimeout(g,y+h))}function p(){v||this.classList.contains("m--active-control")||(n.blockASafterClick&&(b=!0,t.classList.add("m--autosliding-blocked")),_(+this.getAttribute("data-slide")))}function S(){window.clearTimeout(c);var e=+n.autoSlidingDelay||5e3;++m>f&&(m=1),c=setTimeout((function(){_(m)}),e)}if(s.forEach((function(e,t){e.classList.add("fnc-slide-"+(t+1))})),a.forEach((function(e,t){e.setAttribute("data-slide",t+1),e.classList.add("fnc-nav__control-"+(t+1))})),d.forEach((function(e,t){e.classList.add("fnc-nav__bg-"+(t+1))})),a.forEach((function(e){e.addEventListener("click",p)})),n.autoSliding||+n.autoSlidingDelay>0){if(!1===n.autoSliding)return;L=!0,S(),t.classList.add("m--with-autosliding"),t.offsetTop;var q=+n.autoSlidingDelay||5e3;q+=h+y,u.forEach((function(e){e.style.transition="transform "+q/1e3+"s"}))}t.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control")}(t,n)}))},fncSlider(".example-slider",{autoSlidingDelay:4e3});var t=document.querySelector(".demo-cont");[].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach((function(e){e.addEventListener("click",(function(){t.classList.toggle("credits-active")}))})),document.querySelector(".js-activate-global-blending").addEventListener("click",(function(){document.querySelector(".example-slider").classList.toggle("m--global-blending-active")})),document.querySelector(".demo-cont__credits-close").addEventListener("click",(function(){t.classList.remove("credits-active")}))};var r=function(e){var t=e.blocks,n=e.btnLeft,c=e.btnRight,o=e.numberBlocks,r=e.container,l=e.field,i=document.querySelectorAll(t),s=(document.querySelector(n),document.querySelector(c),document.querySelectorAll(o),document.querySelector(r)),a=document.querySelector(l),d=1,u=0;a.style.width=100*i.length+"%",i.forEach((function(e){e.style.width="500px"}));var f=document.createElement("ul"),m=[];f.classList.add("main__nav-ul"),s.append(f);for(var v=0;v<i.length;v++){var y=document.createElement("li");y.setAttribute("data-slide-to",v+1),y.classList.add(o.slice(1)),f.append(y),m.push(y)}function h(){m.forEach((function(e){return e.style.opacity=".5"})),m[d-1].style.opacity=1}setInterval((function(){u==+"500px".slice(0,"500px".length-2)*(i.length-1)&&(u=0),3500===u?u=0:u+=+"500px".slice(0,"500px".length-2),a.style.transform="translateX(-".concat(u,"px)"),d==i.length?d=1:d++,h()}),4e3),h(),m.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.getAttribute("data-slide-to");d=t,u=+"500px".slice(0,"500px".length-2)*(t-1),a.style.transform="translateX(-".concat(u,"px)"),m.forEach((function(e){return e.opacity=.5})),m[d-1].style.opacity=1,h()}))}))};var l=function(e,t,n,c){var o=document.querySelectorAll(e),r=document.querySelectorAll(t);function l(){o.forEach((function(e){e.style.display="none"})),r.forEach((function(e){e.classList.remove(c)}))}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;o[e].style.display="block",r[e].classList.add(c)}document.querySelector(n).addEventListener("click",(function(e){var n=e.target;n&&n.classList.contains(t.slice(1))&&r.forEach((function(e,t){n==e&&(l(),i(t))}))})),l(),i()};var i=function(e,t,n,c,o,r,l){var i=document.querySelectorAll(".fa-play"),s=document.querySelector(".block-yt");function a(e){s.classList.remove("hidden"),document.querySelectorAll(".youtube").forEach((function(e){e.classList.add("hidden")})),document.querySelector(e).classList.add("active-yt"),document.querySelector(e).classList.remove("hidden"),document.body.style.overflow="hidden"}function d(){s.classList.add("hidden"),document.body.style.overflow=""}s.addEventListener("click",(function(e){e.target===s&&d()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&d()}));try{i[0].addEventListener("click",(function(){a(".tube-e")})),i[1].addEventListener("click",(function(){a(".tube-d")})),i[2].addEventListener("click",(function(){a(".tube-a")})),i[3].addEventListener("click",(function(){a(".tube-t")}))}catch(e){console.log("error")}};var s=function(){var e=document.querySelectorAll(".cart-btn"),t=document.querySelector(".block-map");function n(e){t.classList.remove("hidden"),document.querySelectorAll(".block-map__cart").forEach((function(e){e.classList.add("hidden")})),document.querySelector(e).classList.add("active-yt"),document.querySelector(e).classList.remove("hidden"),document.body.style.overflow="hidden"}function c(){t.classList.add("hidden"),document.body.style.overflow=""}e[0].addEventListener("click",(function(){n(".map-yl")})),e[1].addEventListener("click",(function(){n(".map-p")})),e[2].addEventListener("click",(function(){n(".map-y")})),e[3].addEventListener("click",(function(){n(".map-a")})),t.addEventListener("click",(function(e){e.target===t&&c()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&c()})),document.querySelector(".map-close").addEventListener("click",(function(){c()}))};function a(){var e;window.onscroll=function(){(e=window.pageYOffset||document.documentElement.scrollTop)>100&&(document.querySelector(".header").style.background="#050103cd",document.querySelector(".header__log").style.background='url("/assets/images/logo/White.png") no-repeat',document.querySelector(".header-navs").style.color="white",document.querySelectorAll(".header__link").forEach((function(e){e.style.color="white"}))),300>e&&(document.querySelector(".header").style.background="",document.querySelector(".header__log").style.background="",document.querySelector(".header-navs").style.color="",document.querySelectorAll(".header__link").forEach((function(e){e.style.color=""})))}}a();var d=function(){var e=document.querySelectorAll(".content-block"),t=document.querySelectorAll(".content__btn"),n=document.querySelectorAll(".content-show__block");function c(){e.forEach((function(e){e.classList.add("hidden")}))}function o(){n.forEach((function(e){e.classList.add("hidden")})),document.querySelector(".content-show__btn").classList.add("hidden")}o(),document.querySelector(".content-show__btn").addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("hidden")})),document.querySelector(".content-show__btn").classList.remove("hidden"),o()})),t[0].addEventListener("click",(function(){c(),n[0].classList.remove("hidden"),document.querySelector(".content-show__btn").classList.remove("hidden")})),t[1].addEventListener("click",(function(){c(),n[1].classList.remove("hidden"),document.querySelector(".content-show__btn").classList.remove("hidden")})),t[2].addEventListener("click",(function(){c(),n[2].classList.remove("hidden"),document.querySelector(".content-show__btn").classList.remove("hidden")})),t[3].addEventListener("click",(function(){c(),n[3].classList.remove("hidden"),document.querySelector(".content-show__btn").classList.remove("hidden")})),t[4].addEventListener("click",(function(){c(),n[4].classList.remove("hidden"),document.querySelector(".content-show__btn").classList.remove("hidden")})),t[5].addEventListener("click",(function(){c(),n[5].classList.remove("hidden"),document.querySelector(".content-show__btn").classList.remove("hidden")})),t[6].addEventListener("click",(function(){c(),n[6].classList.remove("hidden"),document.querySelector(".content-show__btn").classList.remove("hidden")})),t[7].addEventListener("click",(function(){c(),n[7].classList.remove("hidden"),document.querySelector(".content-show__btn").classList.remove("hidden")})),t[8].addEventListener("click",(function(){c(),n[8].classList.remove("hidden"),document.querySelector(".content-show__btn").classList.remove("hidden")})),t[9].addEventListener("click",(function(){c(),n[9].classList.remove("hidden"),document.querySelector(".content-show__btn").classList.remove("hidden")}))};window.addEventListener("DOMContentLoaded",(function(){try{d()}catch(e){console.log("error")}try{s()}catch(e){console.log("error")}try{r({blocks:".blog__block",btnLeft:".fa-chevron-left",btnRight:".fa-chevron-right",numberBlocks:".main__nav-block",container:".blog__item",field:".blog__field"})}catch(e){console.log("error")}try{l(".news-block",".news-nav__link",".news-nav","news-active")}catch(e){console.log("error")}try{l(".ev-block",".farrow",".ev-nav__link","active-arrow")}catch(e){console.log("error")}try{i()}catch(e){console.log("error")}try{c({blocks:".places-block",btnLeft:".fa-chevron-left",btnRight:".fa-chevron-right",numberBlocks:".main__nav-block",container:".places__item",field:".places__field"})}catch(e){console.log("error")}try{o()}catch(e){console.log("error")}}))}]);