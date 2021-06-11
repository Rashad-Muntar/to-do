const projectFactory = (title, description, date, priority, completed, todos) => {
    
    return {title, description, date, priority, completed, todos}
}

const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []

const defaultProject = projectFactory('Default Project', 'Default project one', '08/02/2021', 'Medium', false );

const defProject = () => {
  for(let i = 0; i < EXISTING_DATA.length; i++){
    while(EXISTING_DATA[i].title != 'Default Project'){
      EXISTING_DATA.unshift(defaultProject)
      localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
    }
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
    updateProjectList()
}

export  { projectFactory, deleteProject, projectConstructor, defProject }