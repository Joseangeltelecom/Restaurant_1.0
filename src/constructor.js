import { setId } from './uid'


// store my projects
export let ProjectToStorage = []

// Constructor Function (Projects)
export function  NewProject(title) {
  this.title = title
  this.id = setId()
  this.tasks = [] 
  this.info = function(){

 return `${this.title, this.id, this.tasks}`
  
  }
}

// constructor function: Tasks:
export function NewTask(check, title, date, priority) {
  this.check = check
  this.title = title
  this.date = date
  this.priority = priority
  this.id = setId()
  this.info = function(){
    
 return `${this.check, this.title, this.date, this.priority, this.id}`
  
  }
}


