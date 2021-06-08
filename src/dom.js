import { projectFactory, deleteProject } from './modules/project'
import { todoFactory } from './modules/todo'

const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []
const projectArr = []
const content = document.getElementById('content')
const sideBarproject = document.querySelector('.projects')
const mainContent = document.getElementById('projectTitle')
const todosWrapper = document.getElementById('todosWrapper')
const todoFormBtn = document.getElementById('todoForm-link')
const todoForm = document.querySelector('.newTodoForm')
let todoTitleDisplay = document.createElement('p')
let todoDescription = document.createElement('p')
let todoDate = document.createElement('p')


todoTitleDisplay.classList.add('todoTitleDisplay')


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
    projectArr.push(project)
    EXISTING_DATA.push(project)
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
    mainProjectDisplay()
}

const createProject = (e) => {
    const newProBtn = document.getElementById('prsubmit')
    newProBtn.addEventListener('click', projectConstructor)
}

const allProjects = () => {
    for(let i = 0; i < EXISTING_DATA.length; i++){
        let projectWrapper = document.createElement('div')
        let projectTitle = document.createElement('div')
        let delBtn = document.createElement('div')

        // delBtn.innerHTML = 'X'
        delBtn.classList.add('far', 'fa-trash-alt')
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

              if (document.getElementById('todosWrapper').contains(document.getElementById('todosContainer'))) {
                document.querySelector('#todosContainer').innerHTML = ''
              }

              for( let j = 0; j < EXISTING_DATA.length; j++){
                  if(document.querySelector('#prTitle').textContent === EXISTING_DATA[j].title){
                    for( let k = 0; k < EXISTING_DATA[j].todos.length; k++){
                        let todoTitle = document.createElement('p')
                        let todoDiv = document.createElement('div')
                        let delIcon = document.createElement('span')

                        delIcon.classList.add('far', 'fa-trash-alt', 'todoDelIcon')
                        todoTitle.classList.add('todoTitle')
                        todoDiv.classList.add('todoDiv', 'd-flex', 'justify-content-between' ,'col-12')


                        todoTitle.innerHTML = EXISTING_DATA[j].todos[k].title
                        todoDiv.appendChild(todoTitle)
                        todoDiv.appendChild(delIcon)

                       document.getElementById('todosContainer').appendChild(todoDiv)
                         todoTitle.addEventListener('click', () => {


                           todoTitleDisplay.innerHTML= EXISTING_DATA[j].todos[k].title
                           todoDescription.innerHTML= EXISTING_DATA[j].todos[k].description
                           todoDate.innerHTML= EXISTING_DATA[j].todos[k].date

                           document.getElementById('todoDisplay').appendChild(todoTitleDisplay)
                           document.getElementById('todoDisplay').appendChild(todoDate)
                           document.getElementById('todoDisplay').appendChild(todoDescription)

                           document.getElementById('todosWrapper').appendChild(document.getElementById('todoDisplay'))

                       })
                        

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
                mainProjectDisplay()
                localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
                
                for( let j = 0; j < EXISTING_DATA.length; j++){
                    if(document.querySelector('#prTitle').textContent === EXISTING_DATA[j].title){
                        let last = EXISTING_DATA[j].todos.pop()
                          let todoTitle = document.createElement('p')
                          todoTitle.textContent = last.title
                          if(document.getElementById('todosContainer')){
                            document.getElementById('todosContainer').appendChild(todoTitle)
                          }

                    }
                }
            }
        } 
    }
}

const createTodo = () => {
    const todoBtn = document.getElementById('submit')
    todoBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        todoConstructor()
    } )
    mainProjectDisplay()
}


let cont = document.getElementById('todoDiv')
let prs = document.querySelectorAll(".prs")
const todoDelete = () => {

    for(let i = 0; i < prs.length; i++){
        if(prs[i].textContent.clicked == true){
            console.log("prs is clicked")
        }
    }
    // if (document.querySelectorAll(".prs").clicked == true){
    //     // let todoDelBtn = document.querySelector('.todoDelIcone')
        
    //     // console.log(todoDelBtn)
    //     // for(let i = 0; i < delbtns.length; i += 1){
    //     //     console.log("todo do deleted")
    //     //     // delbtns[i].addEventListener('click', (e)=>{
    //     //     //     e.stopPropagation()
    //     //     //     console.log('del deleted')
    //     //     //     deleteTodo(i)
    //     //     // })
    //     // }
    // }
}


export { createProject, 
        displayProjects, 
        allProjects, 
        todoConstructor, 
        createTodo, 
        mainProjectDisplay,
        deleteEvent,
        todoFormDisplay,
        todoDelete,
    }

