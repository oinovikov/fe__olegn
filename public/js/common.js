"use strict";
var $pageRootClassName="page",windowEvents=[];
function pageLoader(){var C=document.createElement("div");return C.innerHTML='<div class="loader"><div class="loader__container"><svg width="84" height="32" viewBox="0 0 84 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8733 20.386C11.128 20.386 10.4996 20.2473 9.9883 19.97C9.47696 19.6927 9.05663 19.3417 8.72729 18.917L9.66329 18.007C10.2786 18.7783 11.024 19.164 11.8993 19.164C12.4193 19.164 12.8266 19.0383 13.1213 18.787C13.4246 18.5357 13.5763 18.189 13.5763 17.747V17.526C13.5763 17.1187 13.4463 16.8023 13.1863 16.577C12.935 16.343 12.5363 16.226 11.9903 16.226H10.7293V15.004H11.9383C12.441 15.004 12.8093 14.8913 13.0433 14.666C13.286 14.4407 13.4073 14.1113 13.4073 13.678V13.47C13.4073 13.08 13.2816 12.7767 13.0303 12.56C12.779 12.3347 12.3933 12.222 11.8733 12.222C11.414 12.222 11.0283 12.3087 10.7163 12.482C10.413 12.6553 10.1486 12.885 9.9233 13.171L8.98729 12.378C9.33396 11.936 9.74129 11.598 10.2093 11.364C10.6773 11.1213 11.2623 11 11.9643 11C12.9263 11 13.6586 11.221 14.1613 11.663C14.6726 12.0963 14.9283 12.6857 14.9283 13.431C14.9283 13.7517 14.8806 14.0333 14.7853 14.276C14.6986 14.51 14.573 14.7137 14.4083 14.887C14.2523 15.0517 14.0616 15.186 13.8363 15.29C13.6196 15.394 13.3856 15.4677 13.1343 15.511V15.576C13.4116 15.602 13.6673 15.6627 13.9013 15.758C14.144 15.8533 14.352 15.9877 14.5253 16.161C14.7073 16.3257 14.8503 16.5337 14.9543 16.785C15.0583 17.0277 15.1103 17.318 15.1103 17.656C15.1103 18.0633 15.0323 18.436 14.8763 18.774C14.729 19.1033 14.5166 19.3893 14.2393 19.632C13.962 19.866 13.6196 20.0523 13.2123 20.191C12.8136 20.321 12.3673 20.386 11.8733 20.386Z" fill="white"/><path d="M22.6712 20.23L21.9822 17.812H19.0962L18.4072 20.23H16.9252L19.5772 11.156H21.5662L24.2182 20.23H22.6712ZM20.5912 12.625H20.4872L19.3692 16.603H21.7092L20.5912 12.625Z" fill="white"/><path d="M26.6831 11.156H31.9351V12.378H28.1391V20.23H26.6831V11.156Z" fill="white"/><path d="M34.6471 20.23V11.156H38.0401C38.9067 11.156 39.5654 11.3987 40.0161 11.884C40.4754 12.3693 40.7051 13.0367 40.7051 13.886C40.7051 14.7353 40.4754 15.4027 40.0161 15.888C39.5654 16.3733 38.9067 16.616 38.0401 16.616H36.1031V20.23H34.6471ZM36.1031 15.407H37.8191C38.7204 15.407 39.1711 14.991 39.1711 14.159V13.6C39.1711 12.7767 38.7204 12.365 37.8191 12.365H36.1031V15.407Z" fill="white"/><path d="M43.638 19.008H45.081L45.445 18.085L42.416 11.156H43.976L45.575 15.017L46.108 16.564H46.134L46.628 14.991L47.993 11.156H49.436L46.55 18.826C46.446 19.1033 46.3333 19.333 46.212 19.515C46.0993 19.697 45.9693 19.84 45.822 19.944C45.6746 20.048 45.5056 20.1217 45.315 20.165C45.1243 20.2083 44.899 20.23 44.639 20.23H43.638V19.008Z" fill="white"/><path d="M54.0979 20.386C53.3526 20.386 52.7242 20.2473 52.2129 19.97C51.7016 19.6927 51.2812 19.3417 50.9519 18.917L51.8879 18.007C52.5032 18.7783 53.2486 19.164 54.1239 19.164C54.6439 19.164 55.0512 19.0383 55.3459 18.787C55.6492 18.5357 55.8009 18.189 55.8009 17.747V17.526C55.8009 17.1187 55.6709 16.8023 55.4109 16.577C55.1596 16.343 54.7609 16.226 54.2149 16.226H52.9539V15.004H54.1629C54.6656 15.004 55.0339 14.8913 55.2679 14.666C55.5106 14.4407 55.6319 14.1113 55.6319 13.678V13.47C55.6319 13.08 55.5062 12.7767 55.2549 12.56C55.0036 12.3347 54.6179 12.222 54.0979 12.222C53.6386 12.222 53.2529 12.3087 52.9409 12.482C52.6376 12.6553 52.3732 12.885 52.1479 13.171L51.2119 12.378C51.5586 11.936 51.9659 11.598 52.4339 11.364C52.9019 11.1213 53.4869 11 54.1889 11C55.1509 11 55.8832 11.221 56.3859 11.663C56.8972 12.0963 57.1529 12.6857 57.1529 13.431C57.1529 13.7517 57.1052 14.0333 57.0099 14.276C56.9232 14.51 56.7976 14.7137 56.6329 14.887C56.4769 15.0517 56.2862 15.186 56.0609 15.29C55.8442 15.394 55.6102 15.4677 55.3589 15.511V15.576C55.6362 15.602 55.8919 15.6627 56.1259 15.758C56.3686 15.8533 56.5766 15.9877 56.7499 16.161C56.9319 16.3257 57.0749 16.5337 57.1789 16.785C57.2829 17.0277 57.3349 17.318 57.3349 17.656C57.3349 18.0633 57.2569 18.436 57.1009 18.774C56.9536 19.1033 56.7412 19.3893 56.4639 19.632C56.1866 19.866 55.8442 20.0523 55.4369 20.191C55.0382 20.321 54.5919 20.386 54.0979 20.386Z" fill="white"/><path d="M59.8258 11.156H61.2818V15.03H62.6858L64.4148 11.156H65.9098L64.3758 14.588C64.2285 14.9173 64.0812 15.1513 63.9338 15.29C63.7952 15.4287 63.6305 15.5153 63.4398 15.55V15.628C63.6565 15.6713 63.8298 15.7623 63.9598 15.901C64.0985 16.0397 64.2415 16.2867 64.3888 16.642L65.4028 19.008H66.1958V20.23H65.3118C64.9912 20.23 64.7225 20.1477 64.5058 19.983C64.2892 19.8183 64.0942 19.541 63.9208 19.151L62.6728 16.252H61.2818V20.23H59.8258V11.156Z" fill="white"/><path d="M73.3407 20.23L72.6517 17.812H69.7657L69.0767 20.23H67.5947L70.2467 11.156H72.2357L74.8877 20.23H73.3407ZM71.2607 12.625H71.1567L70.0387 16.603H72.3787L71.2607 12.625Z" fill="white"/></svg></div></div>',C.firstChild}
function getScrollHeightPage(){return Math.max(document.scrollingElement.scrollHeight,document.body.scrollHeight,document.documentElement.scrollHeight,document.scrollingElement.offsetHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.scrollingElement.clientHeight,document.body.clientHeight,document.documentElement.clientHeight)}
function getScrollingElement(){return"scrollingElement"in document?document.scrollingElement:document.body.scrollHeight!=document.body.clientHeight&&"visible"!=window.getComputedStyle(document.body,null).getPropertyValue("overflow")?document.body:document.documentElement}
!function(o){o.root=o.document.querySelector("."+o.$pageRootClassName);var a={loading:o.$pageRootClassName+"_state_loading",ready:o.$pageRootClassName+"_state_ready",loaded:o.$pageRootClassName+"_state_loaded",unloading:o.$pageRootClassName+"_state_unloading"};o.root.classList.add(a.loading),o.document.addEventListener("DOMContentLoaded",function(){o.root.classList.remove(a.loading),o.root.classList.add(a.ready)},!1),o.addEventListener("load",function(){o.root.classList.remove(a.ready),o.root.classList.add(a.loaded)},!1),o.addEventListener("beforeunload",function(){o.root.classList.remove(a.loaded),o.root.classList.add(a.unloading)},!1)}(window);
!function(e){var n=!!e.passiveSupported&&{passive:!0};e.addEventListener("load",listenWindowEvents,n),e.addEventListener("scroll",listenWindowEvents,n),e.addEventListener("resize",listenWindowEvents,n)}(window);
function listenWindowEvents(){for(var n=0,w=window.windowEvents.length;n<w;n++)window.windowEvents[n]["on"+window.event.type.charAt(0).toUpperCase()+window.event.type.substr(1)]&&(window.passiveSupported&&!window.windowEvents[n].scrollTimer?window.windowEvents[n].method.call(window):(this.stateScroll&&clearTimeout(this.stateScroll),this.stateScroll=setTimeout(function(){for(var n=0,w=window.windowEvents.length;n<w;n++)window.windowEvents[n].method.call(window)},160)))}
var lockPageScreen=function(e){var n=!1,o=null,t=null,l=0;function r(){t=e.document.body.clientHeight,e.document.body.style.height=e.innerHeight+"px",0<l&&(o+=t-e.innerHeight,e.document.body.scrollTop=o)}function i(e){e.stopImmediatePropagation(),0==l&&(l=getScrollingElement().scrollTop)}var c={isEnabled:{configurable:!1,enumerable:!1,get:function(){return n},set:void 0},scrollTop:{configurable:!1,enumerable:!1,get:function(){return o},set:void 0},on:{value:function(){n||(o=e.pageYOffset,l=0,e.document.body.style.overflow="hidden",e.document.body.style.height=e.innerHeight+"px",e.document.body.scrollTop=o,e.addEventListener("resize",r,!1),e.addEventListener("scroll",i,!1)),n=!0},configurable:!1,enumerable:!1,writable:!1},off:{value:function(){n&&(e.document.body.style.height="auto",e.document.body.style.overflow="visible",getScrollingElement().scrollTop=o,e.removeEventListener("resize",r),e.removeEventListener("scroll",i),o=null,l=0),n=!1},configurable:!1,enumerable:!1,writable:!1}};return Object.defineProperties({},c)}(window);
!function(e){e.passiveSupported=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e.passiveSupported=!0}});e.addEventListener("test",null,t)}catch(e){}}(window);
function scrollWindowTo(o){"scrollBehavior"in document.documentElement.style?window.scrollTo({top:o,behavior:"smooth"}):"scrollTo"in window?window.scrollTo(o):getScrollingElement().scrollTop=o}
var loader;document.addEventListener("DOMContentLoaded",function(){document.querySelector("#jsEmail").addEventListener("click",function(e){e.preventDefault(),window.location.href="mailto:olegn@outlook.com"},!1),loader=pageLoader(),document.documentElement.appendChild(loader)},!!window.passiveSupported&&{passive:!0}),window.addEventListener("load",function(){loader.parentNode.removeChild(loader)},!!window.passiveSupported&&{passive:!0});