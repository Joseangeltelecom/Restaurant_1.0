import { renderHeader } from './header'
import { renderHero } from './hero'
import { renderContact} from './contact'
import { renderFooter } from './footer'
import { renderCatalog } from './catalog'


const content = document.getElementById('content')

function home() {
    content.innerHTML = "";
    renderHeader()
    renderHero()
    renderFooter();
  }
  function menu() {
    content.innerHTML = "";
    renderHeader()
    renderCatalog()
    renderFooter();
  }
  function contact() {
    content.innerHTML = "";
    renderHeader()
    renderContact()
    renderFooter();
  }
home();

document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "Home") home();
    if (target === "Menu" || target === "Ver Menu") menu();
    if (target === "Contact" || target === "Submit") contact();
  });

export {content};