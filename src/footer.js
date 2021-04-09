import { content } from './index'

function renderFooter () {
    
    const footer = document.createElement('footer')
    const h4 = document.createElement('h4')
    h4.textContent = `Jose Angel © 2021`;
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    const a1 = document.createElement('a')
    a1.classList.add('a1')
    const li2 = document.createElement('li')
    const a2 = document.createElement('a')
    a2.classList.add('a2')
    const li3 = document.createElement('li')
    const a3 = document.createElement('a')
    a3.classList.add('a3')

    content.appendChild(footer)
    footer.appendChild(h4)
    footer.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    li1.appendChild(a1)
    li2.appendChild(a2)
    li3.appendChild(a3)
}

export {renderFooter};