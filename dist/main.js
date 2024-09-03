(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),r=n.n(o),l=n(314),a=n.n(l)()(r());a.push([e.id,":root{\n    --font : 1rem;\n    --row : minmax(200px,0.35fr);\n    --column : minmax(200px,0.2fr);\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    background-color: rgba(24, 26, 23, 0.788);\n}\n\n.container{\n    display: flex;\n    gap: 10px;\n}\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: 0;\n    height: 100vh;\n    left: 0;\n    width: min(6rem,15vh);\n    gap: 3vh;\n    background-color: rgba(8, 8, 8, 0.788);\n    padding-top: 4vh;\n    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n.add-proj{\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 4rem;\n    width: 5rem;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 20px;\n    font-size: 0.8rem;\n    font-family: 'Courier New', Courier, monospace;\n    font-weight: bolder;\n    background-color: rgba(36, 36, 35, 0.808);\n    color: aliceblue;\n    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n.add-proj:hover{\n    background-color: rgba(127, 255, 212, 0.733);\n    color: black;\n}\n.content{\n    height: 100vh;\n    width: 85vw;\n    padding-left: 7rem;\n    padding-top: 3rem;\n    display:grid;\n    grid-template-rows: repeat(auto-fit,var(--row));\n    grid-template-columns: repeat(auto-fit,var(--column));\n    grid-auto-rows: var(--row);\n    grid-auto-columns: var(--column);\n    overflow: auto;\n    gap: 2rem;\n}\n\n.new-project{\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 4rem;\n    width: 5rem;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 20px;\n    font-size: 0.8rem;\n    text-align: center;\n    font-family: 'Courier New', Courier, monospace;\n    font-weight: bolder;\n    background-color: rgba(36, 36, 35, 0.808);\n    color: aliceblue;\n    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n\n.remove-proj, .add-btn{\n    background-color: rgba(36, 36, 35, 0.568);\n    color: aliceblue; \n    text-align: center;\n    border-radius: 20px;\n    border: solid;\n    border-color: rgba(8, 8, 8, 0.548);\n    user-select: none;\n    font-size: 2rem;\n}\n\n.new-project:hover, .remove-proj:hover, .add-btn:hover{\n    background-color: rgba(127, 255, 212, 0.733);\n    color: black;\n}\n\n.taskform{\n    display: flex;\n    gap: 16px;\n    flex-direction: column;\n\n}\n\n.prior{\n    padding-left: 5.7rem;\n}\n\n#task{\n    resize: vertical;\n}\n\n.taskbuttons{\n    display: flex;\n    gap: 140px;\n}\n\n.taskcont{\n    background-color: rgba(36, 36, 35, 0.568);\n    color: aliceblue; \n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border-radius: 20px;\n    align-items: center;\n    border: solid;\n    border-color: rgba(8, 8, 8, 0.548);\n    user-select: none;\n}\n.taskdesc{\n    width: 80px;\n    height: 25px;\n    padding-top:5px ;\n    background-color: rgba(19, 19, 18, 0.5);\n    border: solid;\n    border-color: rgba(27, 27, 27, 0.075);\n    border-radius: 6px;\n    text-align: center;\n    user-select: none;\n}\n\n.editbtn{\n    width: 80px;\n    height: 25px;\n    padding-top:5px ;\n    background-color: rgba(19, 19, 18, 0.5);\n    border: solid;\n    border-color: rgba(27, 27, 27, 0.075);\n    border-radius: 6px;\n    text-align: center;\n    user-select: none;\n}\n\n.editbtn:hover{\n    background-color: rgba(127, 255, 212, 0.733);\n    color: black; \n}\n\n.taskdesc:hover{\n    background-color: rgba(127, 255, 212, 0.733);\n    color: black; \n}\n\n.tasktitle{\n    width: 120px;\n    height: 70px;\n    padding-top: 1.5rem;\n    padding-bottom: minmax(0px,1.5rem);\n    font-size: 1.5rem;\n    overflow-x: auto;\n}\n\n.removebtn{\n    width: 80px;\n    height: 25px;\n    padding-top:5px ;\n    background-color: rgba(19, 19, 18, 0.5);\n    border: solid;\n    border-color: rgba(27, 27, 27, 0.075);\n    border-radius: 6px;\n    text-align: center;\n    user-select: none;\n    \n}\n\n.removebtn:hover{\n    background-color: rgba(136, 28, 20, 0.521);;\n}\n\n.completed{\n    width: 80px;\n    height: 25px;\n    padding-top:5px ;\n    background-color: rgba(19, 19, 18, 0.5);\n    border: solid;\n    border-color: rgba(27, 27, 27, 0.075);\n    border-radius: 6px;\n    text-align: center;\n    user-select: none;\n}\n\n.completed:hover{\n    background-color: rgba(4, 240, 4, 0.623);\n}\n\n.btncon{\n    display: grid;\n    grid-template-rows: repeat(2,25px) ;\n    grid-template-columns: repeat(2,80px);\n    row-gap: 20px;\n    column-gap: 20px;\n}\n\n.Description{\n    height: 45vh;\n    width: 50vw;\n}\n\n.taskdescon{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.taskdetail{\n    padding-top: 10px;\n    height : 36vh;\n    width: auto;\n    overflow: auto;\n}\n.close{\n    width: 80px;\n    height: 25px;\n    border: solid;\n    border-radius: 10px;\n    border-color: rgba(37, 36, 36, 0.582);\n    text-align: center;\n    user-select: none;\n}\n.close:hover{\n    background-color: rgba(127, 255, 212, 0.733);\n    color: black;\n}\n\n.taskdescription, .taskpriority{\n    display: none;\n}",""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,l){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(a[i]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&a[s[0]]||(void 0!==l&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=l),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var l={},a=[],c=0;c<e.length;c++){var i=e[c],d=o.base?i[0]+o.base:i[0],s=l[d]||0,u="".concat(d," ").concat(s);l[d]=s+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var l=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<l.length;a++){var c=n(l[a]);t[c].references--}for(var i=o(e,r),d=0;d<l.length;d++){var s=n(l[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}l=i}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={id:o,exports:{}};return e[o](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o=n(72),r=n.n(o),l=n(825),a=n.n(l),c=n(659),i=n.n(c),d=n(56),s=n.n(d),u=n(540),p=n.n(u),m=n(113),g=n.n(m),b=n(365),f={};f.styleTagTransform=g(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),r()(b.A,f),b.A&&b.A.locals&&b.A.locals;const v=document.querySelector(".edit-dialog"),y=function(e,t,n){v.showModal();const o=document.getElementById("edit-title"),r=document.getElementById("edit-task"),l=document.getElementById("edit-Priority");o.value=e.textContent,r.value=t.textContent,"true"==n.textContent?l.checked=!0:l.checked=!1},h=function(){document.querySelectorAll(".removebtn").forEach((e=>{e.addEventListener("click",(function(){const t=e.closest(".taskcont");t&&t.remove()}))}))},S=function(){document.querySelectorAll(".editbtn").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".taskcont"),n=e.closest(".btncon").previousElementSibling,o=n.previousElementSibling,r=o.previousElementSibling;y(r,o,n),document.querySelector(".edit-submit").onclick=function(){r.textContent=document.getElementById("edit-title").value,o.innerHTML=document.getElementById("edit-task").value,document.getElementById("edit-Priority").checked?(t.style.border="solid",t.style.borderColor="red",n.textContent="true"):(t.style.border="solid",t.style.borderColor="rgba(8, 8, 8, 0.548)",n.textContent="false")},document.querySelector(".edit-delete").onclick=function(){document.querySelector(".edit-dialog").close()}}))}))},x=function(){document.querySelectorAll(".completed").forEach((e=>{const t=e.closest(".taskcont"),n=document.createElement("btn");n.classList.add("completed"),n.innerHTML="Undo";const o=e.closest(".btncon"),r=o.previousElementSibling;e.addEventListener("click",(()=>{t.style.border="solid",t.style.borderColor="green",o.removeChild(e),o.appendChild(n)})),n.addEventListener("click",(()=>{t.style.border="solid","true"==r.textContent?t.style.borderColor="red":t.style.borderColor="rgba(8, 8, 8, 0.548)",o.removeChild(n),o.appendChild(e)}))}))},k=function(){const e=document.querySelectorAll(".taskdesc"),t=document.querySelector(".taskdetail"),n=document.querySelector(".Description");e.forEach((e=>{const o=e.closest(".btncon").previousElementSibling.previousElementSibling;e.addEventListener("click",(()=>{t.innerHTML=o.innerHTML,n.showModal()}))}))};if(null==localStorage.getItem("swap")){const e={arr:[]};localStorage.setItem("swap",JSON.stringify(e))}if(null===localStorage.getItem("id")){let e=-1;localStorage.setItem("id",e)}const L=function(e){let t=localStorage.getItem("id");const n=JSON.parse(localStorage.getItem("swap")),o=document.querySelector(".content");if(-1==t)t=e.id,o.innerHTML=n.arr[t],console.log("KO2"),h(),S(),x(),k(),localStorage.setItem("swap",JSON.stringify(n)),localStorage.setItem("id",t);else if(e.id!=t)""==o.innerHTML?(t=e.id,console.log("KO"),o.innerHTML=n.arr[t],h(),S(),x(),k(),localStorage.setItem("swap",JSON.stringify(n)),localStorage.setItem("id",t)):(n.arr[t]=o.innerHTML,localStorage.setItem("swap",JSON.stringify(n)),console.log("ksi"),t=e.id,o.innerHTML=n.arr[t],console.log(n.arr),h(),S(),x(),k(),localStorage.setItem("swap",JSON.stringify(n)),localStorage.setItem("id",t));else for(let r=0;r<6;r++)""==n.arr[r]&&(e.id==t?(o.innerHTML=n.arr[t],console.log("KO4"),h(),S(),x(),k()):(o.innerHTML=n.arr[r],console.log("KO6"),h(),S(),x(),k(),localStorage.setItem("swap",JSON.stringify(n)),localStorage.setItem("id",r)))},E=document.querySelector(".task-dialog");if(null==localStorage.getItem("projstat")){let e=0;localStorage.setItem("projstat",e)}const w=function(e){const t=JSON.parse(localStorage.getItem("swap")),n=document.createElement("btn"),o=document.querySelector(".sidebar");let r=document.getElementById("project-title").value;n.classList.add("new-project"),n.setAttribute("id",e),n.innerHTML=r,n.addEventListener("click",(()=>{localStorage.getItem("id"),L(n),document.querySelector(".add-btn").addEventListener("click",(()=>{E.showModal()})),document.querySelector(".remove-proj").addEventListener("click",(()=>{const t=JSON.parse(localStorage.getItem("swap")),r=document.querySelector(".content");t.arr[e]="",r.innerHTML="",o.removeChild(n),localStorage.setItem("proj",o.innerHTML),localStorage.setItem("swap",JSON.stringify(t))}))})),o.appendChild(n),localStorage.setItem("proj",o.innerHTML),localStorage.setItem("swap",JSON.stringify(t))},I=function(e){const t=JSON.parse(localStorage.getItem("swap")),n=document.createElement("div"),o=document.createElement("button"),r=document.createElement("button");o.classList.add("add-btn"),o.innerHTML="Create Task",n.classList.add("content"),r.classList.add("remove-proj"),r.innerHTML="Remove Project",n.appendChild(r),n.appendChild(o),t.arr[e]=n.innerHTML,localStorage.setItem("swap",JSON.stringify(t))},C=document.querySelector(".task-dialog"),M=document.querySelector(".project-dialog"),q=document.querySelector(".delete"),T=document.querySelector(".submit");if(document.querySelector(".close").addEventListener("click",(()=>{document.querySelector(".Description").close()})),T.addEventListener("click",(()=>{let e=localStorage.getItem("id");const t=JSON.parse(localStorage.getItem("swap")),n=document.querySelector(".content");!function(){const e=document.getElementById("title").value,t=document.getElementById("task").value,n=document.getElementById("Priority").checked;""===e|""===t?(alert("Fill the valid details"),document.querySelector(".taskform").reset()):function(e,t,n){const o=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div"),a=document.createElement("btn"),c=document.querySelector(".content"),i=document.createElement("btn"),d=document.createElement("div"),s=document.createElement("btn"),u=document.createElement("btn"),p=document.querySelector(".Description"),m=document.querySelector(".taskdetail"),g=document.createElement("div"),b=document.createElement("div");g.textContent=t,b.textContent=n,g.classList.add("taskdescription"),b.classList.add("taskpriority"),o.classList.add("taskcont"),r.classList.add("tasktitle"),l.classList.add("taskdesc"),i.classList.add("completed"),s.classList.add("editbtn"),d.classList.add("btncon"),u.classList.add("completed"),r.textContent=`${e}`,l.textContent="Description",a.innerHTML="Remove",a.classList.add("removebtn"),i.innerHTML="Completed",s.innerHTML="Edit",u.textContent="Undo",n&&(o.style.border="solid",o.style.borderColor="red"),i.addEventListener("click",(()=>{o.style.border="solid",o.style.borderColor="green",d.removeChild(i),d.appendChild(u)})),u.addEventListener("click",(()=>{o.style.border="solid","true"==b.textContent?o.style.borderColor="red":o.style.borderColor="rgba(8, 8, 8, 0.548)",d.removeChild(u),d.appendChild(i)})),l.addEventListener("click",(()=>{m.innerHTML=g.innerHTML,p.showModal()})),document.querySelector(".close").addEventListener("click",(()=>{p.close()})),a.addEventListener("click",(()=>{c.removeChild(o)})),o.appendChild(r),o.appendChild(g),o.appendChild(b),d.appendChild(l),d.appendChild(s),d.appendChild(a),d.appendChild(i),o.appendChild(d),c.appendChild(o),document.querySelectorAll(".editbtn").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".taskcont"),n=e.closest(".btncon").previousElementSibling,o=n.previousElementSibling,r=o.previousElementSibling;y(r,o,n),document.querySelector(".edit-submit").onclick=function(){r.textContent=document.getElementById("edit-title").value,o.innerHTML=document.getElementById("edit-task").value,document.getElementById("edit-Priority").checked?(t.style.border="solid",t.style.borderColor="red",n.textContent="true"):(t.style.border="solid",t.style.borderColor="rgba(8, 8, 8, 0.548)",n.textContent="false")},document.querySelector(".edit-delete").onclick=function(){document.querySelector(".edit-dialog").close()}}))}))}(e,t,n)}(),C.close(),document.querySelector(".taskform").reset(),t.arr[e]=n.innerHTML,localStorage.setItem("swap",JSON.stringify(t))})),q.addEventListener("click",(()=>{C.close(),document.querySelector(".taskform").reset()})),null===localStorage.getItem("proj"))document.querySelector(".add-proj").addEventListener("click",(()=>{M.showModal()}));else{const e=document.querySelector(".sidebar");e.innerHTML=localStorage.getItem("proj"),document.querySelector(".add-proj").addEventListener("click",(()=>{M.showModal()})),document.querySelectorAll(".new-project").forEach((t=>{JSON.parse(localStorage.getItem("swap"));let n=localStorage.getItem("id");const o=document.querySelector(".content");t.addEventListener("click",(()=>{if(t.id==n){let e=localStorage.getItem("id");const n=JSON.parse(localStorage.getItem("swap"));""!==o.innerHTML&&(console.log(e),console.log(t.id),n.arr[e]=o.innerHTML,localStorage.setItem("swap",JSON.stringify(n)),console.log("fhiwhf")),o.innerHTML=n.arr[t.id],e=t.id,h(),S(),x(),k(),localStorage.setItem("id",e)}else t.id!=n&&L(t);document.querySelector(".add-btn").addEventListener("click",(()=>{C.showModal()})),document.querySelector(".remove-proj").addEventListener("click",(()=>{let n=localStorage.getItem("id");const o=JSON.parse(localStorage.getItem("swap"));let r=localStorage.getItem("projstat");const l=document.querySelector(".content");o.arr[n]="",l.innerHTML="",e.removeChild(t),localStorage.setItem("swap",JSON.stringify(o)),localStorage.setItem("proj",e.innerHTML),localStorage.setItem("id",n),localStorage.setItem("projstat",r)}))}))}))}document.querySelector(".proj-submit").addEventListener("click",(()=>{!function(){let e=localStorage.getItem("projstat");const t=JSON.parse(localStorage.getItem("swap"));if(6!=localStorage.getItem("projstat"))w(localStorage.getItem("projstat")),e++,localStorage.setItem("projstat",e);else for(let e=0;e<6;e++)if(""===t.arr[e]){I(e),w(e),console.log(t.arr);break}}(),function(){const e=JSON.parse(localStorage.getItem("swap"));if(6!==e.arr.length){const t=document.createElement("div"),n=document.createElement("button"),o=document.createElement("button");n.classList.add("add-btn"),n.innerHTML="Create Task",t.classList.add("content"),o.classList.add("remove-proj"),o.innerHTML="Remove Project",t.appendChild(o),t.appendChild(n),e.arr.push(t.innerHTML),console.log(e.arr),localStorage.setItem("swap",JSON.stringify(e))}}(),M.close(),document.querySelector(".projectform").reset()})),document.querySelector(".proj-delete").addEventListener("click",(()=>{M.close(),document.querySelector(".projectform").reset()}))})();