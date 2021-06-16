(()=>{"use strict";var e={169:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(645),d=o.n(n)()((function(e){return e[1]}));d.push([e.id,"body{padding:0;margin:0}.container-fluid{padding:0;margin:0}header{background-color:#dc3545;padding:0;margin:0}#navbarNav{display:flex;justify-content:space-between}.headerGroupOne{display:flex;margin-left:20px}.headerGroupTwo{float:right;margin-right:20px}.fas,.far{color:#000}form{padding:20px}main{height:100vh;width:100vw}main #content{width:100%;height:100%;display:flex;align-items:center;position:relative}main #content .todoAddBtn i{margin:10px}main #content .side-bar{width:25%;height:100%;background:#e2e2e2;padding:50px 20px}main #content .side-bar .icons{width:95%;margin:15px 0;padding:7px 5px;border-radius:2px;cursor:pointer}main #content .side-bar .icons i{margin-right:10px;font-size:1.5em;color:gray}main #content .side-bar .icons:hover{background-color:#f1f1f1}main #content .side-bar .project{display:flex;justify-content:space-between}main #content .side-bar .projectDelBtn,main #content .side-bar .prs{cursor:pointer}main #content .side-bar .projectTitle{display:flex;padding:7px}main #content .side-bar .projectTitle:hover{background-color:#ffebee}main #content .fa-trash-alt:hover{color:#d15046}main #content #main-right{background-color:#fff;height:100vh;width:100%;display:flex;flex-direction:column;justify-items:center;align-items:center}main #content #prTitle{font-weight:bold;color:#dc3545;display:flex;justify-content:center}main #content .todoAddBtn{margin:10px}main #content h3{display:flex;align-content:center;background:#e2e2e2}#todosWrapper{display:flex;width:100%;justify-content:space-evenly}#todosWrapper #toggleTodoForm{width:33.33%;padding:10px}#todosWrapper #todosContainer{width:33.33%;padding:10px;box-sizing:border-box}#todosWrapper #todoDisplay{width:33.33%;display:flex;justify-content:space-between;align-content:center;padding:10px;margin-top:0;height:100px}#todosWrapper #todoDisplay p{padding:0;margin:0}.todoDiv{margin:10px;display:flex;justify-content:space-between;align-content:center;padding:10px;color:#fff;border-radius:5px}.todoTitle{padding:5px;margin:0 0 0 0;display:flex;justify-content:center;align-content:center;cursor:pointer}.todoDelIcon{padding:5px;margin:0 20px 0 0;display:flex;justify-content:center;align-content:center;cursor:pointer}.newTodoForm,.editTodoForm{display:flex;justify-content:space-around;flex-direction:column;background:#fff0f2}.newTodoForm input,.editTodoForm input{width:100%;height:40px;border-radius:5px;margin-bottom:10px}.newTodoForm textarea,.editTodoForm textarea{width:100%;border-radius:5px}.newTodoForm select,.editTodoForm select{width:100%;height:40px;border-radius:5px;margin-bottom:10px}.hide{display:none}.todoIcons{font-size:1.3em}.fa-info-circle:hover{color:green;cursor:pointer}.completedTodo{text-decoration:line-through;color:#e6e6e6;opacity:.6}.medium{background-color:#daa520}.low{background-color:green}.high{background-color:#dc3545}#projectTitle{width:100%;margin-left:15px}",""]);const r=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var d={};if(n)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(d[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&d[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},379:(e,t,o)=>{var n,d=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),r=[];function i(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],d=0;d<e.length;d++){var l=e[d],c=t.base?l[0]+t.base:l[0],a=o[c]||0,s="".concat(c," ").concat(a);o[c]=a+1;var u=i(s),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(r[u].references++,r[u].updater(m)):r.push({identifier:s,updater:f(m,t),references:1}),n.push(s)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=d(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var a,s=(a=[],function(e,t){return a[e]=t,a.filter(Boolean).join("\n")});function u(e,t,o,n){var d=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=s(t,d);else{var r=document.createTextNode(d),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function m(e,t,o){var n=o.css,d=o.media,r=o.sourceMap;if(d?e.setAttribute("media",d):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,g=0;function f(e,t){var o,n,d;if(t.singleton){var r=g++;o=p||(p=c(t)),n=u.bind(null,o,r,!1),d=u.bind(null,o,r,!0)}else o=c(t),n=m.bind(null,o,t),d=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else d()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var d=i(o[n]);r[d].references--}for(var c=l(e,t),a=0;a<o.length;a++){var s=i(o[a]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}o=c}}}}},t={};function o(n){var d=t[n];if(void 0!==d)return d.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=o(379),t=o.n(e),n=o(169);t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;const d=(e,t,o,n,d,r)=>({title:e,description:t,date:o,priority:n,completed:d,todos:r}),r=e=>{let t=JSON.parse(localStorage.getItem("Projects"))||[];t.splice(e,1),localStorage.setItem("Projects",JSON.stringify(t))},i=e=>{const t=JSON.parse(localStorage.getItem("Projects"))||[];for(let o=0;o<t.length;o+=1)t[o].todos.splice(e,1),localStorage.setItem("Projects",JSON.stringify(t))},l=()=>{const e=JSON.parse(localStorage.getItem("Projects"))||[];for(let t=0;t<e.length;t+=1)e[t].todos.completed,e[t].todos.completed=!0,localStorage.setItem("Projects",JSON.stringify(e))},c=[],a=document.querySelector(".projects"),s=document.getElementById("projectTitle"),u=document.getElementById("todoForm-link"),m=document.querySelector(".newTodoForm"),p=document.querySelector(".editTodoForm"),g=document.createElement("p"),f=document.createElement("p");g.classList.add("todoTitleDisplay");const y=()=>{let e=JSON.parse(localStorage.getItem("Projects"))||[];for(let t=0;t<e.length;t+=1){const o=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div");d.classList.add("far","fa-trash-alt"),o.classList.add("d-flex","justify-content-between","col-12","projectTitle"),d.classList.add("projectDelBtn","col-3","d-flex","justify-content-center"),n.classList.add("prs"),n.innerHTML=e[t].title,o.appendChild(n),o.appendChild(d),a.appendChild(o)}},h=()=>{if(document.getElementById("todosContainer").contains(document.querySelector(".todoDiv"))){const e=document.querySelectorAll(".todoDiv");for(let t=0;t<e.length;t+=1)"High"===e[t].getAttribute("value")&&e[t].classList.add("high"),"Medium"===e[t].getAttribute("value")&&e[t].classList.add("medium"),"Low"===e[t].getAttribute("value")&&e[t].classList.add("low")}},v=()=>{const e=document.querySelectorAll(".prs");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",(()=>{h()}))},E=()=>{let e=JSON.parse(localStorage.getItem("Projects"))||[];for(let t=0;t<e.length;t+=1)for(let o=0;o<e[t].todos.length;o+=1){const n=document.querySelectorAll(".todoIcons");for(let d=0;d<n.length;d+=1)n[d].addEventListener("click",(()=>{p.classList.toggle("hide"),document.getElementById("editTitle").value=e[t].todos[o].title,document.getElementById("editDate").value=e[t].todos[o].date,document.getElementById("editDesc").value=e[t].todos[o].description,document.getElementById("editPriority").value=e[t].todos[o].priority,document.getElementById("todosWrapper").appendChild(document.getElementById("todoDisplay")),console.log("edit cliek")}))}},S=()=>{let e=JSON.parse(localStorage.getItem("Projects"))||[];for(let t=0;t<e.length;t+=1)if(document.querySelector("#prTitle").textContent===e[t].title)for(let o=0;o<e[t].todos.length;o+=1){const n=document.createElement("p"),d=document.createElement("div"),r=document.createElement("p"),i=document.createElement("span"),l=document.createElement("div"),c=document.createElement("span");i.classList.add("far","fa-trash-alt","todoDelIcon"),c.classList.add("fas","fa-info-circle","todoIcons"),n.classList.add("todoTitle"),d.classList.add("todoDiv","d-flex","justify-content-between","col-12"),l.classList.add("btnsDiv","d-fle"),n.innerHTML=e[t].todos[o].title,r.innerHTML=e[t].todos[o].date,d.setAttribute("value",e[t].todos[o].priority),d.appendChild(n),d.appendChild(r),l.appendChild(i),l.appendChild(c),d.appendChild(l),document.getElementById("todosContainer").appendChild(d),c.addEventListener("click",(()=>{p.classList.toggle("hide"),document.getElementById("editTitle").value=e[t].todos[o].title,document.getElementById("editDate").value=e[t].todos[o].date,document.getElementById("editDesc").value=e[t].todos[o].description,document.getElementById("editPriority").value=e[t].todos[o].priority,document.getElementById("todosWrapper").appendChild(document.getElementById("todoDisplay"))}))}},I=()=>{const e=document.querySelectorAll(".projectDelBtn");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",(e=>{e.stopPropagation(),r(t),document.querySelector(".projects").innerHTML="",document.querySelector(".projectList").classList.remove("hide"),y()}))},b=()=>{let e=JSON.parse(localStorage.getItem("Projects"))||[];const t={title:document.getElementById("title").value,description:document.getElementById("desc").value,date:document.getElementById("date").value,priority:document.getElementById("priority").value,completed:!1};for(let o=0;o<e.length;o+=1)if(document.body.contains(document.querySelector("#prTitle"))){const n=document.getElementById("prTitle").textContent;e[o].title===n&&(e[o].todos.push(t),localStorage.setItem("Projects",JSON.stringify(e)))}},x=()=>{if(document.getElementById("todosContainer").contains(document.querySelector(".todoDiv"))){const e=document.querySelectorAll(".todoDelIcon");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",(()=>{i(t),document.getElementById("todosContainer").innerHTML="",S(),h()}))}},j=()=>{const e=document.querySelectorAll(".prs");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",(()=>{const o=document.createElement("h3");o.setAttribute("id","prTitle"),o.classList.add("p-5"),o.innerHTML=e[t].textContent,document.body.contains(document.querySelector("#prTitle"))&&document.querySelector("#prTitle").remove(),s.appendChild(o),document.querySelector(".todoAddBtn").classList.remove("hide"),document.getElementById("todosWrapper").contains(document.getElementById("todosContainer"))&&(document.querySelector("#todosContainer").innerHTML=""),v(),S()}))};(()=>{let e=JSON.parse(localStorage.getItem("Projects"))||[];const t=d("Default Project","Default project one","08/02/2021","Medium",!1,[]);e.find((e=>"Default Project"===e.title))||(e.push(t),localStorage.setItem("Projects",JSON.stringify(e)))})(),document.getElementById("prsubmit").addEventListener("click",(()=>{(()=>{let e=JSON.parse(localStorage.getItem("Projects"))||[];const t=d(document.getElementById("prtitle").value,document.getElementById("prdesc").value,document.getElementById("prdate").value,document.getElementById("prpriority").value,!1,[]);c.push(t),e.push(t),localStorage.setItem("Projects",JSON.stringify(e)),(()=>{let e=JSON.parse(localStorage.getItem("Projects"))||[];const t=document.querySelector(".projects"),o=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),r=e.pop();n.classList.add("prs","col-8"),d.classList.add("far","fa-trash-alt","col-2"),o.classList.add("d-flex","justify-content-between","col-12","projectTitle"),d.classList.add("projectDelBtn","col-3","d-flex","justify-content-center"),n.innerHTML=r.title,o.appendChild(n),o.appendChild(d),t.appendChild(o),j(),I()})()})(),document.querySelector(".prForm").reset()})),document.querySelector(".project").addEventListener("click",(()=>{document.querySelector(".projectList").classList.toggle("hide")})),y(),b(),document.getElementById("submit").addEventListener("click",(()=>{if(""===document.getElementById("title").value||""===document.getElementById("date").value||""===document.getElementById("desc").value||""===document.getElementById("priority").value)return!1;b(),document.querySelector("form").reset(),document.querySelector("form").classList.add("hide"),(()=>{let e=JSON.parse(localStorage.getItem("Projects"))||[];for(let t=0;t<e.length;t+=1)if(document.querySelector("#prTitle").textContent===e[t].title){const o=e[t].todos.pop(),n=document.createElement("p"),d=document.createElement("div"),r=(document.createElement("p"),document.createElement("span")),i=document.createElement("div"),l=document.createElement("span");r.classList.add("far","fa-trash-alt","todoDelIcon"),l.classList.add("fas","fa-info-circle","todoIcons"),n.classList.add("todoTitle"),d.classList.add("todoDiv","d-flex","justify-content-between","col-12"),i.classList.add("btnsDiv","d-fle"),d.setAttribute("value",o.priority),n.innerHTML=o.title,f.innerHTML=o.date,document.getElementById("todosContainer")&&(d.appendChild(n),d.appendChild(f),i.appendChild(r),i.appendChild(l),d.appendChild(i),document.getElementById("todosContainer").appendChild(d),x(),h(),E())}})()})),j(),I(),u.addEventListener("click",(()=>{m.classList.toggle("hide")})),(()=>{const e=document.querySelectorAll(".prs");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",(()=>{if(document.getElementById("todosContainer").contains(document.querySelector(".todoDiv"))){const e=document.querySelectorAll(".todoDelIcon");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",(()=>{i(t),document.getElementById("todosContainer").innerHTML="",S(),h()}))}}))})(),(()=>{const e=document.querySelectorAll(".prs");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",(()=>{if(document.getElementById("todosContainer").contains(document.querySelector(".todoDiv"))){const e=document.querySelectorAll(".todoTitle");for(let t=0;t<e.length;t+=1)e[t].addEventListener("click",(()=>{l(),e[t].classList.toggle("completedTodo")}))}}))})(),v(),(()=>{let e=JSON.parse(localStorage.getItem("Projects"))||[];document.querySelector("#editSubmit").addEventListener("click",(()=>{for(let t=0;t<e.length;t+=1)for(let o=0;o<e[t].todos.length;o+=1){if(""===document.getElementById("editTitle").value||""===document.getElementById("editDate").value||""===document.getElementById("editDesc").value||""===document.getElementById("editPriority").value)return!1;e[t].todos[o].title=document.getElementById("editTitle").value,e[t].todos[o].date=document.getElementById("editDate").value,e[t].todos[o].description=document.getElementById("editDesc").value,e[t].todos[o].priority=document.getElementById("editPriority").value,localStorage.setItem("Projects",JSON.stringify(e))}}))})()})()})();