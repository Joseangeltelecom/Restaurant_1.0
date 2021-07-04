import { NewProject } from './constructor'
import {ProjectToStorage} from './constructor'
import {saveLocal} from './localstorage'
import {renderAllNewTasks} from './index'

// current Project: 
export let currentProject

// DOM manipulation: 
const containerProjects = document.querySelector('.container-projects')
const projectButton = document.querySelector('.project-button')
const inputProject = document.querySelector('.input-project')
const cancelProjectPopUp = document.querySelector('.button-cancel-project-popup')

// Activate popup: 
projectButton.addEventListener('click', function(){
    inputProject.classList.add('active');
})

// Hide PopPup:
cancelProjectPopUp.addEventListener('click', function(){
    inputProject.classList.remove('active');
})

// Submit of the form Project:
inputProject.addEventListener('submit', function(e){
e.preventDefault(); // prevent default behavior
const ProjectName = document.querySelector('#newProject').value // get the project value name
addProjectToStorage(ProjectName) // store the "project value name to "ProjectToStorage"
renderAllNewProjects() // Render all the projects inside "ProjectToStorage"
inputProject.classList.remove('active');  // hide or remove the Project popUp.
});


// this function Render all the projects inside "ProjectToStorage":
function renderAllNewProjects(){
    containerProjects.innerHTML = " "; // Erase all projects displayed on the DOM.

    ProjectToStorage.forEach(project => { // ForEach to iterate over all my projects inside ProjectToStorage
      console.log(ProjectToStorage) // test 
        const newProject = document.createElement('div') // create a container for each new project
        newProject.classList.add('new-project-added')   // Add a class to give style to each of the new projects
        newProject.id = project.id                     // set the id of created div (newProject) equal to the id of each project

        newProject.addEventListener('click', () => { // This eventListener help me when click over each project The current project will
          currentProject = project                   // be equal to the project I clicked on.
        
          renderAllNewTasks() // after clicking clicking on the project and setting it as a current project I render all my task for that project.
        })

        const iconList = document.createElement('div') // Create Icon List
        iconList.classList.add('icon-list')            // add style to my Icon list
        const pProject = document.createElement('p')  // Create the p element for my text or title
        pProject.textContent = project.title;         // The value of my text will be equaled to the title of the project created with my constructor function.
        const iconCancel = document.createElement('div') // create my Cancel icon.
        iconCancel.classList.add('icon-cancel')          // I give style to my Icon cancel.
        iconCancel.addEventListener('click', function() { // add addEvenlisister to my Icon Cancel when I click on it call the fuction "RemoveProject"
        removeProject (project.id)});                    // will remove a project depending on its id.
        
        containerProjects.appendChild(newProject)       // append my new project to the project container
        newProject.appendChild(iconList)                // append my iconList to my Project
        newProject.appendChild(pProject)                // apend my P element to new project
        newProject.appendChild(iconCancel)              // append my cancel element to new project.
      
    })
  }

  // Esta funcion me filtra los book  de acuerdo all title.
// function removeProject (id) {

//     ProjectToStorage = ProjectToStorage.filter(project => project.id !== id)
//     saveLocal();
//     renderAllNewProjects()
//   }

//Remove Project Function: 
function removeProject(id) { 
  for (let i = 0; i< ProjectToStorage.length; i++){ // interate over ProjecToStorage
    if ( ProjectToStorage[i].id === id /*85*/) {    // i will be each of the project if the project id is equal to Project id I clicked on
      ProjectToStorage.splice(i, 1); //  It will remove from my array ProjectToStorage.
    }
  }

  saveLocal(); // save the changes in my local storage
  renderAllNewProjects() // after removing that project it will render all the Projects
}

// const deleteFolder = (id) => {
//   for (let i = 0; i < shelf.length; i++) {
//     if (shelf[i].id === id) {
//       shelf.splice(i, 1);
//     }
//   }
//   domHandler.createFolderDivs(shelf);
// };

//Add new project to storage Function:
  function addProjectToStorage(id){ // this function add a new project created with my NewProject constructor
    var newProjectt = new NewProject (id) // each new project will be equal to the a new instance of my constructor.
    ProjectToStorage.push(newProjectt); // I push my new Project to the PojectoStorage array.
    saveLocal();                       // set the changes in my local storage.
  }

  export {containerProjects};
  export {renderAllNewProjects}
  export {removeProject}