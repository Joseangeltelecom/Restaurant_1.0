import { content } from './index'

function renderHeader () {
    
    const header = document.createElement('header')
    header.classList.add('main-head')
    const nav = document.createElement('nav')
    const h1 = document.createElement('h1')
    h1.classList.add('logo')
    h1.textContent = "La Verdadera";
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    li1.textContent = "Home";
    const li2 = document.createElement('li')
    li2.textContent = "Menu"; 
    const li3 = document.createElement('li')
    li3.textContent = "Contact"; 

    content.appendChild(header)
    header.appendChild(nav)
    nav.appendChild(h1)
    nav.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2) 
    ul.appendChild(li3) 
   
}

export {renderHeader};