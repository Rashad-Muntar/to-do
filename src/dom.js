import { projectFactory } from './modules/project'
import { todoFactory } from './modules/todo'

const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []

const content = document.getElementById('content')
const sideBarproject = document.querySelector('.projects')
const mainContent = document.getElementById('projectTitle')
// let prTitle = document.getElementById('prTitle')

const projectConstructor = () => {
    let project = projectFactory(
        document.getElementById('prtitle').value,
        document.getElementById('prdesc').value,
        document.getElementById('prdate').value,
        document.getElementById('prpriority').value,
        false,
        []
    )
    EXISTING_DATA.push(project)
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
    location.reload()
}

const createProject = () => {
    const newProBtn = document.getElementById('prsubmit')
    newProBtn.addEventListener('click', projectConstructor)
}

const allProjects = () => {
    for(let i = 0; i < EXISTING_DATA.length; i++){
        let projectTitle = document.createElement('div')
        projectTitle.classList.add('prs')
        projectTitle.innerHTML = EXISTING_DATA[i].title
        sideBarproject.appendChild(projectTitle)
    }
}

const displayProjects = () => {
    document.querySelector('.project').addEventListener('click', (e) => {
        document.querySelector('.projectList').classList.toggle('hide')
    })
}


const todoConstructor = () => {
    let newToDo = todoFactory(
        document.getElementById('title').value,
        document.getElementById('desc').value,
        document.getElementById('date').value,
        document.getElementById('priority').value,
        false,
        []
    )
    for( let i = 0; i < EXISTING_DATA.length; i++) {
        if (document.body.contains(document.querySelector('#prTitle'))) {
            let projectTitle = document.getElementById('prTitle').textContent

            if( EXISTING_DATA[i].title === projectTitle) {
                EXISTING_DATA[i].todos.push(newToDo)
                localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
                location.reload()
            }
        } 
    }
}

const createTodo = () => {
    const todoBtn = document.getElementById('submit')
    todoBtn.addEventListener('click', todoConstructor)
}



const mainProjectDisplay = () => {
    const allSidebarprojects = document.querySelectorAll('.prs')
    for(let i = 0; i < allSidebarprojects.length; i++){
        console.log(allSidebarprojects[i])
        allSidebarprojects[i].addEventListener('click', ()=>{
            let projectTitle = document.createElement('h3')
            projectTitle.setAttribute('id', 'prTitle')
            projectTitle.classList.add('p-5')
            projectTitle.innerHTML = allSidebarprojects[i].textContent
            if (document.body.contains(document.querySelector('#prTitle'))) {
                document.querySelector('#prTitle').remove();
              }
              mainContent.appendChild(projectTitle)
              document.querySelector('.todoAddBtn').classList.remove('hide')
            })
    }
}



export { createProject, displayProjects, allProjects, todoConstructor, createTodo, mainProjectDisplay}

