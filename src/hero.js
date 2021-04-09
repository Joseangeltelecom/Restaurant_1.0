import { content } from './index'

function renderHero () {

    const section = document.createElement('section')
    section.classList.add('hero')
    const h2 = document.createElement('h2')
    const span1 = document.createElement('span')
    span1.classList.add('cachapa')
    span1.textContent = "Cachapa";
    const span2 = document.createElement('span')
    span2.classList.add('la')
    span2.textContent = "La";
    const span3 = document.createElement('span')
    span3.classList.add('verdadera')
    span3.textContent = "Verdadera";
    const h3 = document.createElement('h3')
    h3.innerHTML = `Que nadie te deje confundir Solo aqui encontraras la cachapa Verdadera. <br /> Reserva tu cachapita abajo`
    const button = document.createElement('button')
    button.textContent = "Ver Menu";
   /*  button.addEventListener("click", (e) => {
        const target = e.target.innerText;
        if (target === "Ver Menu") menu();
      }); */
   

    content.appendChild(section)
    section.appendChild(h2)
    section.appendChild(h3)
    section.appendChild(button)
    h2.appendChild(span1)
    h2.appendChild(span2)
    h2.appendChild(span3)
}

export {renderHero};