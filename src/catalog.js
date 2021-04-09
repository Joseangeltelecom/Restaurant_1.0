import { content } from './index'

function renderCatalog () {

    const section = document.createElement('section')
    section.classList.add('grid')
    const container = document.createElement('div')
    container.classList.add('container')
    const cell1 = document.createElement('div')
    cell1.classList.add('cell')
    cell1.classList.add('cachapa1')
    const cell2 = document.createElement('div')
    cell2.classList.add('cell')
    cell2.classList.add('cachapa2')
    const cell3 = document.createElement('div')
    cell3.classList.add('cell')
    cell3.classList.add('cachapa3')
    const cell4 = document.createElement('div')
    cell4.classList.add('cell')
    cell4.classList.add('cachapa4')
    const cell5 = document.createElement('div')
    cell5.classList.add('cell')
    cell5.classList.add('cachapa5')
    const cell6 = document.createElement('div')
    cell6.classList.add('cell')
    cell6.classList.add('cachapa6')

    content.appendChild(section)
    section.appendChild(container)
    container.appendChild(cell1)
    container.appendChild(cell2)
    container.appendChild(cell3)
    container.appendChild(cell4)
    container.appendChild(cell5)
    container.appendChild(cell6)

}

export {renderCatalog};