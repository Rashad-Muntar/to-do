const projectFactory = (title, description, date, priority, completed) => {
    
    return {title, description, date, priority, completed}
}

const defaultProject = projectFactory('Default Project', 'Default project one', '08/02/2021', 'Medium', false );

const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []
 for( let i = 0; i < EXISTING_DATA.length; i++) {
    if(EXISTING_DATA[i].title == 'Default Project'){
        EXISTING_DATA.push(defaultProject)
        localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
    }
 }

export  { projectFactory }