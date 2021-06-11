const projectFactory = (title, description, date, priority, completed, todos) => {
    
    return {title, description, date, priority, completed, todos}
}

const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []


const defProject = () => {
  let defaultProject = projectFactory('Default Project', 'Default project one', '08/02/2021', 'Medium', false, []);

  if (!EXISTING_DATA.find(o => o.title === 'Default Project')){
    EXISTING_DATA.push(defaultProject)
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
  }
  
}

 function deleteProject(index){
    EXISTING_DATA.splice(index, 1)
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
    location.reload()
  }

  const projectConstructor = () => {
    let project = projectFactory(
        document.getElementById('prtitle').value,
        document.getElementById('prdesc').value,
        document.getElementById('prdate').value,
        document.getElementById('prpriority').value,
        false,
        []
    )
    projectArr.push(project)
    EXISTING_DATA.push(project)
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
}

export  { projectFactory, deleteProject, projectConstructor, defProject }