(()=>{"use strict";(()=>{document.getElementsByClassName("callback-btn fancyboxModal hidden-xs")[0];const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.querySelector(".modal-close"),document.addEventListener("click",(l=>{(l.target.matches(".callback-btn")||l.target.matches(".button-services"))&&(l.preventDefault(),e.style.display="block",t.style.display="block"),(l.target.matches(".modal-overlay")||l.target.closest(".modal-close"))&&(e.style.display="none",t.style.display="none")}))})(),document.querySelectorAll(".top-menu>ul>li").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();let t=e.target.getAttribute("href").substring(1);const l=document.getElementById(t).getBoundingClientRect().top-50;window.scrollBy({top:l,behavior:"smooth"})}))})),(()=>{const e=document.querySelector(".mob-menu-btn"),t=document.querySelector(".mobile-menu"),l=document.querySelector(".overlay"),r=document.querySelector(".mobile-menu-close"),o=t.querySelectorAll("ul>li>a"),a=()=>{t.classList.toggle("open")};e.style.cursor="pointer",r.style.cursor="pointer",e.addEventListener("click",a),r.addEventListener("click",a),l.addEventListener("click",a),o.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),a();let t=e.target.getAttribute("href").substring(1);const l=document.getElementById(t).getBoundingClientRect().top-50;window.scrollBy({top:l,behavior:"smooth"})}))}))})(),(()=>{const e=document.querySelector(".logo.left>a"),t=document.querySelector(".h-panel-right");e.href="index.html",t.childNodes.forEach((e=>{e.innerHTML=`<a>${e.innerHTML}</a>`,e.childNodes[0]&&"header-email"===e.childNodes[0].parentNode.className?e.childNodes[0].href="mailto:info@sitename.com":e.childNodes[0]&&"header-tel"===e.childNodes[0].parentNode.className&&(e.childNodes[0].href="tel:8(987)654-32-10"),e.cursor="pointer"}))})(),(()=>{const e=document.querySelector(".form-group>input[name='fio']"),t=document.querySelector(".form-group>input[name='tel']");e.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-яА-Я]/g,"")})),e.addEventListener("blur",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/^[а-я]/g,(function(e){return e.toUpperCase()})),e.target.value=e.target.value.replace(/(?!^)[А-Я]/g,(function(e){return e.toLowerCase()}))})),t.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^0-9\+]/g,"")})),t.addEventListener("blur",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/\++/g,"+"),e.target.value=e.target.value.replace(/[+]$/g,"")}))})(),(()=>{document.querySelector(".top-slider");const e=document.querySelectorAll(".table"),t=document.querySelectorAll(".item.relative");let l=0;setInterval((()=>{var r,o;r=t,e[o=l].classList.remove("active"),r[o].style.display="none",l++,l>=e.length&&(l=0),((e,t,l,r)=>{e[l].classList.add("active"),t[l].style.display="block"})(e,t,l)}),3e3)})()})();