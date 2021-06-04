import { projectFactory, deleteProject } from './modules/project'
import { todoFactory } from './modules/todo'

const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []

const content = document.getElementById('content')
const sideBarproject = document.querySelector('.projects')
const mainContent = document.getElementById('projectTitle')
const todosWrapper = document.getElementById('todosWrapper')
const todoFormBtn = document.getElementById('todoForm-link')
const todoForm = document.querySelector('.newTodoForm')
const todoContainer = document.createElement('div')
todoContainer.setAttribute('id', 'todoContainer') 

const todoFormDisplay = () => {
    todoFormBtn.addEventListener('click', () => {
        todoForm.classList.toggle('hide')
    })
    
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
    EXISTING_DATA.push(project)
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
    location.reload()
}

const createProject = (e) => {
    if(e){
        e.preventDefault()
    }
    const newProBtn = document.getElementById('prsubmit')
    newProBtn.addEventListener('click', projectConstructor)
}

const allProjects = () => {
    for(let i = 0; i < EXISTING_DATA.length; i++){
        let projectWrapper = document.createElement('div')
        let projectTitle = document.createElement('div')
        let delBtn = document.createElement('div')

        delBtn.innerHTML = 'X'
        projectWrapper.classList.add('d-flex', 'justify-content-between', 'col-12', 'projectTitle')
        delBtn.classList.add('projectDelBtn', 'btn-danger', 'col-3', 'd-flex', 'justify-content-center')
        projectTitle.classList.add('prs')

        projectTitle.innerHTML = EXISTING_DATA[i].title

        projectWrapper.appendChild(projectTitle)
        projectWrapper.appendChild(delBtn)
        sideBarproject.appendChild(projectWrapper)
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
        allSidebarprojects[i].addEventListener('click', (e)=>{
            let projectTitle = document.createElement('h3')
            projectTitle.setAttribute('id', 'prTitle')
            
            projectTitle.classList.add('p-5')
            projectTitle.innerHTML = allSidebarprojects[i].textContent
            if (document.body.contains(document.querySelector('#prTitle'))) {
                document.querySelector('#prTitle').remove();
              }
              mainContent.appendChild(projectTitle)
              document.querySelector('.todoAddBtn').classList.remove('hide')
              for( let j = 0; j < EXISTING_DATA.length; j++){

                  if(document.querySelector('#prTitle').textContent === EXISTING_DATA[j].title){
                    for( let k = 0; k < EXISTING_DATA[j].todos.length; k++){
                        console.log(EXISTING_DATA[j].todos[k].title)
                        let todoTitle = document.createElement('p')

                        todoTitle.classList.add('todoTitle')
                        todoTitle.innerHTML = EXISTING_DATA[j].todos[k].title
                        if (document.body.contains(document.querySelector('#todoContainer'))) {
                            document.querySelector('#todoContainer').remove();
                          }
                        todoContainer.appendChild(todoTitle)
                        todosWrapper.appendChild(todoContainer)
                    }
                  }
              }
              
            })
    }
}

const deleteEvent = () => {
    const delbtns = document.querySelectorAll('.projectDelBtn')
    console.log(delbtns)
        for(let i = 0; i < delbtns.length; i += 1){
            delbtns[i].addEventListener('click', (e)=>{
                e.stopPropagation()
                console.log('del deleted')
                deleteProject(i)
                
            })
        }

}





// todo starts here
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

const createTodo = (e) => {
    if(e){
        e.preventDefault()
    }
    const todoBtn = document.getElementById('submit')
    todoBtn.addEventListener('click', todoConstructor)
}







export { createProject, 
        displayProjects, 
        allProjects, 
        todoConstructor, 
        createTodo, 
        mainProjectDisplay,
        deleteEvent,
        todoFormDisplay
    }

