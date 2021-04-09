import { content } from './index'

function renderContact () {

    const section = document.createElement('section')
    section.classList.add('formsection')
  
   const form = document.createElement('form')
    
    const label1 = document.createElement('label')
    label1.textContent = "Name";
    const input1 = document.createElement('input')
    input1.type="text";

    const label2 = document.createElement('label')
    label2.textContent = "Email";
    const input2 = document.createElement('input')
    input2.type="text";

    const label3 = document.createElement('label')
    label3.textContent = "Message";
    const textArea = document.createElement('input')
    textArea.classList.add('textarea')
    textArea.type="text";
    
    const button = document.createElement('button')
    button.textContent = "Submit";
    button.type="submit";  
    
   content.appendChild(section)
   section.appendChild(form)
   form.appendChild(label1)
   form.appendChild(input1)
   form.appendChild(label2)
   form.appendChild(input2)
   form.appendChild(label3)
   form.appendChild(textArea)
   form.appendChild(button)   

}

export {renderContact};