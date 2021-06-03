import { projectFactory } from './modules/project'

const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []

const content = document.getElementById('content')
const sideBarproject = document.querySelector('.projects')
const mainContent = document.getElementById('right-main')
let prTitle = document.getElementById('prTitle')

const projectConstructor = () => {
    let project = projectFactory(
        document.getElementById('title').value,
        document.getElementById('desc').value,
        document.getElementById('date').value,
        document.getElementById('priority').value,
    )
    EXISTING_DATA.push(project)
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
    location.reload()
}

const createProject = () => {
    const newProBtn = document.getElementById('submit')
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

const mainProjectDisplay = () => {
    const allSidebarprojects = document.querySelectorAll('.prs')
    for(let i = 0; i < allSidebarprojects.length; i++){
        console.log(allSidebarprojects[i])
        allSidebarprojects[i].addEventListener('click', ()=>{
            let projectTitle = document.createElement('h3')
            projectTitle.setAttribute('id', 'prTitle')
            projectTitle.innerHTML = allSidebarprojects[i].textContent
            if (document.body.contains(document.querySelector('#prTitle'))) {
                document.querySelector('#prTitle').remove();
              }
              mainContent.appendChild(projectTitle)
        })
    }
}


export { createProject, displayProjects, allProjects, mainProjectDisplay}

