(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){const e=document.createElement("header");e.classList.add("main-head");const t=document.createElement("nav"),n=document.createElement("h1");n.classList.add("logo"),n.textContent="La Verdadera";const d=document.createElement("ul"),c=document.createElement("li");c.textContent="Home";const l=document.createElement("li");l.textContent="Menu";const o=document.createElement("li");o.textContent="Contact",a.appendChild(e),e.appendChild(t),t.appendChild(n),t.appendChild(d),d.appendChild(c),d.appendChild(l),d.appendChild(o)}function n(){const e=document.createElement("footer"),t=document.createElement("h4");t.textContent="Jose Angel © 2021";const n=document.createElement("ul"),d=document.createElement("li"),c=document.createElement("a");c.classList.add("a1");const l=document.createElement("li"),o=document.createElement("a");o.classList.add("a2");const s=document.createElement("li"),i=document.createElement("a");i.classList.add("a3"),a.appendChild(e),e.appendChild(t),e.appendChild(n),n.appendChild(d),n.appendChild(l),n.appendChild(s),d.appendChild(c),l.appendChild(o),s.appendChild(i)}e.d({},{k:()=>a});const a=document.getElementById("content");function d(){a.innerHTML="",t(),function(){const e=document.createElement("section");e.classList.add("hero");const t=document.createElement("h2"),n=document.createElement("span");n.classList.add("cachapa"),n.textContent="Cachapa";const d=document.createElement("span");d.classList.add("la"),d.textContent="La";const c=document.createElement("span");c.classList.add("verdadera"),c.textContent="Verdadera";const l=document.createElement("h3");l.innerHTML="Que nadie te deje confundir Solo aqui encontraras la cachapa Verdadera. <br /> Reserva tu cachapita abajo";const o=document.createElement("button");o.textContent="Ver Menu",a.appendChild(e),e.appendChild(t),e.appendChild(l),e.appendChild(o),t.appendChild(n),t.appendChild(d),t.appendChild(c)}(),n()}d(),document.addEventListener("click",(e=>{const c=e.target.innerText;"Home"===c&&d(),"Menu"!==c&&"Ver Menu"!==c||(a.innerHTML="",t(),function(){const e=document.createElement("section");e.classList.add("grid");const t=document.createElement("div");t.classList.add("container");const n=document.createElement("div");n.classList.add("cell"),n.classList.add("cachapa1");const d=document.createElement("div");d.classList.add("cell"),d.classList.add("cachapa2");const c=document.createElement("div");c.classList.add("cell"),c.classList.add("cachapa3");const l=document.createElement("div");l.classList.add("cell"),l.classList.add("cachapa4");const o=document.createElement("div");o.classList.add("cell"),o.classList.add("cachapa5");const s=document.createElement("div");s.classList.add("cell"),s.classList.add("cachapa6"),a.appendChild(e),e.appendChild(t),t.appendChild(n),t.appendChild(d),t.appendChild(c),t.appendChild(l),t.appendChild(o),t.appendChild(s)}(),n()),"Contact"!==c&&"Submit"!==c||(a.innerHTML="",t(),function(){const e=document.createElement("section");e.classList.add("formsection");const t=document.createElement("form"),n=document.createElement("label");n.textContent="Name";const d=document.createElement("input");d.type="text";const c=document.createElement("label");c.textContent="Email";const l=document.createElement("input");l.type="text";const o=document.createElement("label");o.textContent="Message";const s=document.createElement("input");s.classList.add("textarea"),s.type="text";const i=document.createElement("button");i.textContent="Submit",i.type="submit",a.appendChild(e),e.appendChild(t),t.appendChild(n),t.appendChild(d),t.appendChild(c),t.appendChild(l),t.appendChild(o),t.appendChild(s),t.appendChild(i)}(),n())}))})();