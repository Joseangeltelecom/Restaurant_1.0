import { ProjectToStorage } from "./constructor"
import { renderAllNewProjects } from "./handleProjects"

export function saveLocal() {
  localStorage.setItem("ProjectToStorage", JSON.stringify(ProjectToStorage))
}

export function restoreLocal() {
  ProjectToStorage = JSON.parse(localStorage.getItem("ProjectToStorage"))
  if (ProjectToStorage === null) ProjectToStorage = []
  renderAllNewProjects()
}
