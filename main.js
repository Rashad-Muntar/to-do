(()=>{"use strict";var e={169:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"body{padding:0;margin:0}.container-fluid{padding:0;margin:0}header{background-color:#dc3545;padding:0;margin:0}#navbarNav{display:flex;justify-content:space-between}.headerGroupOne{display:flex;margin-left:20px}.headerGroupTwo{float:right;margin-right:20px}.fas,.far{color:#000}form{padding:20px}main{height:100vh;width:100vw}main #content{width:100%;height:100%;display:flex;align-items:center;position:relative}main #content .side-bar{width:25%;height:100%;background:#e2e2e2;padding:50px 20px}main #content .side-bar .icons{width:95%;margin:15px 0;padding:7px 5px;border-radius:2px;cursor:pointer}main #content .side-bar .icons i{margin-right:10px;font-size:1.5em;color:gray}main #content .side-bar .icons:hover{background-color:#f1f1f1}main #content .side-bar .project{display:flex;justify-content:space-between}main #content .side-bar .projects{padding-left:20px}main #content #main-right{background-color:#fff;height:100vh;width:100%;display:flex;flex-direction:column;justify-items:center;align-items:center}main #content .todoAddBtn{margin:10px}main #content .todoAddBtn i{margin:10px}main #content h3{display:flex;justify-content:center;align-content:center;background:#e2e2e2}.projectTitle{margin-bottom:8px}.hide{display:none}",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(r[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function d(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var l=e[r],c=t.base?l[0]+t.base:l[0],a=n[c]||0,s="".concat(c," ").concat(a);n[c]=a+1;var u=d(s),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:s,updater:g(m,t),references:1}),o.push(s)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var d=r(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}return t}var a,s=(a=[],function(e,t){return a[e]=t,a.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var i=document.createTextNode(r),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(i,d[t]):e.appendChild(i)}}function m(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,f=0;function g(e,t){var n,o,r;if(t.singleton){var i=f++;n=p||(p=c(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=c(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=d(n[o]);i[r].references--}for(var c=l(e,t),a=0;a<n.length;a++){var s=d(n[a]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=c}}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(169);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r=(e,t,n,o,r,i)=>({title:e,description:t,date:n,priority:o,completed:r,todos:i}),i=r("Default Project","Default project one","08/02/2021","Medium",!1),d=JSON.parse(localStorage.getItem("Projects"))||[];for(let e=0;e<d.length;e++)"Default Project"==d[e].title&&(d.push(i),localStorage.setItem("Projects",JSON.stringify(d)));const l=JSON.parse(localStorage.getItem("Projects"))||[];function c(e){for(let t=0;t<l.length;t++)l[t].todos.splice(e,1),localStorage.setItem("Projects",JSON.stringify(l)),location.reload()}const a=JSON.parse(localStorage.getItem("Projects"))||[],s=[],u=(document.getElementById("content"),document.querySelector(".projects")),m=document.getElementById("projectTitle"),p=(document.getElementById("todosWrapper"),document.getElementById("todoForm-link")),f=document.querySelector(".newTodoForm");let g=document.createElement("p"),h=document.createElement("p"),y=document.createElement("p");g.classList.add("todoTitleDisplay");const v=()=>{const e=document.querySelectorAll(".prs");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(n=>{let o=document.createElement("h3");o.setAttribute("id","prTitle"),o.classList.add("p-5"),o.innerHTML=e[t].textContent,document.body.contains(document.querySelector("#prTitle"))&&document.querySelector("#prTitle").remove(),m.appendChild(o),document.querySelector(".todoAddBtn").classList.remove("hide"),document.getElementById("todosWrapper").contains(document.getElementById("todosContainer"))&&(document.querySelector("#todosContainer").innerHTML="");for(let e=0;e<a.length;e++)if(document.querySelector("#prTitle").textContent===a[e].title)for(let t=0;t<a[e].todos.length;t++){let n=document.createElement("p"),o=document.createElement("div"),r=document.createElement("span");r.innerHTML="X",r.classList.add("todoDelIcon"),n.classList.add("todoTitle"),o.classList.add("todoDiv","d-flex","justify-content-between","col-12"),n.innerHTML=a[e].todos[t].title,o.appendChild(n),o.appendChild(r),document.getElementById("todosContainer").appendChild(o),n.addEventListener("click",(()=>{g.innerHTML=a[e].todos[t].title,h.innerHTML=a[e].todos[t].description,y.innerHTML=a[e].todos[t].date,document.getElementById("todoDisplay").appendChild(g),document.getElementById("todoDisplay").appendChild(y),document.getElementById("todoDisplay").appendChild(h),document.getElementById("todosWrapper").appendChild(document.getElementById("todoDisplay"))}))}}))},E=()=>{let e={title:document.getElementById("title").value,description:document.getElementById("desc").value,date:document.getElementById("date").value,priority:document.getElementById("priority").value,completed:!1};for(let t=0;t<a.length;t++)if(document.body.contains(document.querySelector("#prTitle"))){let n=document.getElementById("prTitle").textContent;if(a[t].title===n){a[t].todos.push(e),v(),localStorage.setItem("Projects",JSON.stringify(a));for(let e=0;e<a.length;e++)if(document.querySelector("#prTitle").textContent===a[e].title){let t=a[e].todos.pop(),n=document.createElement("p");n.textContent=t.title,document.getElementById("todosContainer")&&document.getElementById("todosContainer").appendChild(n)}}}};document.getElementById("prsubmit").addEventListener("click",(()=>{let e=r(document.getElementById("prtitle").value,document.getElementById("prdesc").value,document.getElementById("prdate").value,document.getElementById("prpriority").value,!1,[]);s.push(e),a.push(e),localStorage.setItem("Projects",JSON.stringify(a)),v()})),document.querySelector(".project").addEventListener("click",(e=>{document.querySelector(".projectList").classList.toggle("hide")})),(()=>{for(let e=0;e<a.length;e++){let t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");o.classList.add("far","fa-trash-alt"),t.classList.add("d-flex","justify-content-between","col-12","projectTitle"),o.classList.add("projectDelBtn","btn-danger","col-3","d-flex","justify-content-center"),n.classList.add("prs"),n.innerHTML=a[e].title,t.appendChild(n),t.appendChild(o),u.appendChild(t)}})(),E(),document.getElementById("submit").addEventListener("click",(e=>{e.preventDefault(),E()})),v(),v(),(()=>{const e=document.querySelectorAll(".projectDelBtn");console.log(e);for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",(e=>{var n;e.stopPropagation(),console.log("del deleted"),n=t,d.splice(n,1),localStorage.setItem("Projects",JSON.stringify(d)),location.reload()}))})(),p.addEventListener("click",(()=>{f.classList.toggle("hide")})),(()=>{let e=document.querySelectorAll(".prs");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(()=>{if(document.getElementById("todosContainer").contains(document.querySelector(".todoDiv"))){let e=document.querySelectorAll(".todoDelIcon");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(()=>{c(t),console.log("todo is deleted")}))}}))})()})()})();