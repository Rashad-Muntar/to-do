import { projectFactory, deleteProject } from './modules/project'
import { todoFactory, deleteTodo, completeTodo } from './modules/todo'

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
let todoPriority = document.createElement('p')


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
    uppdateProjectList()
}

const uppdateProjectList = () => {
        let projects = document.querySelector('.projects')
        let projectTitle = document.createElement('div')
        let projectMain = document.createElement('div')
        let delBtn = document.createElement('div')

        let last = EXISTING_DATA.pop()

        projectMain.classList.add('prs')
        delBtn.classList.add('far', 'fa-trash-alt')
        projectTitle.classList.add('d-flex', 'justify-content-between', 'col-12', 'projectTitle')
        delBtn.classList.add('projectDelBtn', 'col-3', 'd-flex', 'justify-content-center')
        
        projectMain.innerHTML = last.title

        projectTitle.appendChild(projectMain)
        projectTitle.appendChild(delBtn)
        projects.appendChild(projectTitle)
        
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

        delBtn.classList.add('far', 'fa-trash-alt')
        projectWrapper.classList.add('d-flex', 'justify-content-between', 'col-12', 'projectTitle')
        delBtn.classList.add('projectDelBtn', 'col-3', 'd-flex', 'justify-content-center')
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

const toggleProjectTitle = () => {
    if (document.body.contains(document.querySelector('#prTitle'))) {
        document.querySelector('#prTitle').remove();
      }
}

const toggleMainRightContent = () => {
    if (document.getElementById('todosWrapper').contains(document.getElementById('todosContainer'))) {
        document.querySelector('#todosContainer').innerHTML = ''
      }
}

const mainProjectDisplay = () => {
    const allSidebarprojects = document.querySelectorAll('.prs')
    for(let i = 0; i < allSidebarprojects.length; i++){
        allSidebarprojects[i].addEventListener('click', (e)=>{
            let projectTitle = document.createElement('h3')
            projectTitle.setAttribute('id', 'prTitle')
            
            projectTitle.classList.add('p-5')
            projectTitle.innerHTML = allSidebarprojects[i].textContent
            
            toggleProjectTitle()

            mainContent.appendChild(projectTitle)
            document.querySelector('.todoAddBtn').classList.remove('hide')

            toggleMainRightContent()
            displayTodos()
            todoColors()
              
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
                updateTodoList()
            }
        } 
    }
}

const createTodo = () => {
    const todoBtn = document.getElementById('submit')
    todoBtn.addEventListener('click', (e)=>{
         
        if (document.getElementById('title').value == "" || 
            document.getElementById('date').value == "" || 
            document.getElementById('desc').value == "" ||
            document.getElementById('priority').value == "") 
        {
          alert("You need to fill out all fields");
          return false;
        }
        else{
            e.preventDefault()
            todoConstructor()
            document.querySelector('form').reset()
            document.querySelector('form').classList.add('hide')
        }
    } )
    
}

const todoColors = () => {
    let pr = document.querySelectorAll(".prs")
    for(let i = 0; i < pr.length; i++){
        pr[i].addEventListener('click', ()=>{
        if(document.getElementById('todosContainer').contains(document.querySelector('.todoDiv'))){
            let todoDiv = document.querySelectorAll('.todoDiv')
            for(let j = 0; j < todoDiv.length; j++){
                if(todoDiv[j].getAttribute('value') == 'High'){
                    todoDiv[j].classList.add('high')
                }
                if(todoDiv[j].getAttribute('value') == 'Medium'){
                    todoDiv[j].classList.add('medium')  
                }
                if(todoDiv[j].getAttribute('value') == 'Low'){
                    todoDiv[j].classList.add('low')  
                }              
            }
            
        }
            
            
        })
        
    } 
}


const displayTodos = () => {
    for( let j = 0; j < EXISTING_DATA.length; j++){
        if(document.querySelector('#prTitle').textContent === EXISTING_DATA[j].title){
          for( let k = 0; k < EXISTING_DATA[j].todos.length; k++){
              let todoTitle = document.createElement('p')
              let todoDiv = document.createElement('div')
              let date = document.createElement('p')
              let delIcon = document.createElement('span')
              let buttonsDiv = document.createElement('div')
              let moreIcon = document.createElement('span')
    
              delIcon.classList.add('far', 'fa-trash-alt', 'todoIcons', 'todoDelIcon')
              moreIcon.classList.add('fas', 'fa-info-circle', 'todoIcons')
              todoTitle.classList.add('todoTitle')
              todoDiv.classList.add('todoDiv', 'd-flex', 'justify-content-between' ,'col-12')
              buttonsDiv.classList.add('btnsDiv', 'd-fle')

              todoTitle.innerHTML = EXISTING_DATA[j].todos[k].title
              date.innerHTML = EXISTING_DATA[j].todos[k].date
              todoDiv.setAttribute('value', EXISTING_DATA[j].todos[k].priority)
              todoDiv.appendChild(todoTitle)
              todoDiv.appendChild(date)
              buttonsDiv.appendChild(delIcon)
              buttonsDiv.appendChild(moreIcon)
              todoDiv.appendChild(buttonsDiv)
              document.getElementById('todosContainer').appendChild(todoDiv)
              moreIcon.addEventListener('click', () => {

                 todoTitleDisplay.innerHTML= EXISTING_DATA[j].todos[k].title
                 todoDescription.innerHTML= EXISTING_DATA[j].todos[k].description
                 todoDate.innerHTML= EXISTING_DATA[j].todos[k].date
                 todoPriority.innerHTML = EXISTING_DATA[j].todos[k].priority

                 document.getElementById('todoDisplay').appendChild(todoTitleDisplay)
                 document.getElementById('todoDisplay').appendChild(todoDate)
                 document.getElementById('todoDisplay').appendChild(todoDescription)
                 document.getElementById('todoDisplay').appendChild(todoPriority)

                 document.getElementById('todosWrapper').appendChild(document.getElementById('todoDisplay'))

             })
              

          }
        }
    }
}


const updateTodoList = () => {

    for( let j = 0; j < EXISTING_DATA.length; j++){
        if(document.querySelector('#prTitle').textContent === EXISTING_DATA[j].title){
            let last = EXISTING_DATA[j].todos.pop()
              let todoTitle = document.createElement('p')
              let todoDiv = document.createElement('div')
              let date = document.createElement('p')
              let delIcon = document.createElement('span')
              let buttonsDiv = document.createElement('div')
              let moreIcon = document.createElement('span')

              delIcon.classList.add('far', 'fa-trash-alt', 'todoIcons', 'todoDelIcon')
              moreIcon.classList.add('fas', 'fa-info-circle', 'todoIcons')
              todoTitle.classList.add('todoTitle')
              todoDiv.classList.add('todoDiv', 'd-flex', 'justify-content-between' ,'col-12')
              buttonsDiv.classList.add('btnsDiv', 'd-fle')
              todoDiv.setAttribute('value', last.priority)

              todoTitle.innerHTML = last.title
              todoDate.innerHTML = last.date

              if(document.getElementById('todosContainer')){
                todoDiv.appendChild(todoTitle)
                todoDiv.appendChild(date)
                buttonsDiv.appendChild(delIcon)
                buttonsDiv.appendChild(moreIcon)
                todoDiv.appendChild(buttonsDiv)
                document.getElementById('todosContainer').appendChild(todoDiv)
                todoColors()
              }

        }
    }
}

const todoDelete = () => {
    let pr = document.querySelectorAll(".prs")
    for(let i = 0; i < pr.length; i++){
            pr[i].addEventListener('click', ()=>{
                if(document.getElementById('todosContainer').contains(document.querySelector('.todoDiv'))){
                    let todoDelBtn = document.querySelectorAll('.todoDelIcon')
                    for(let j = 0; j < todoDelBtn.length; j++){
                        todoDelBtn[j].addEventListener('click', ()=>{
                            deleteTodo(j)
                            console.log('todo is deleted')
                        })
                        
                    }
                }
                    
                
            })
            
        }  
    }

    const completeEvent = () => {
        let pr = document.querySelectorAll(".prs")
        for(let i = 0; i < pr.length; i++){
                pr[i].addEventListener('click', ()=>{
                    if(document.getElementById('todosContainer').contains(document.querySelector('.todoDiv'))){
                        let todo = document.querySelectorAll('.todoTitle')
                        for(let j = 0; j < todo.length; j++){
                            todo[j].addEventListener('click', ()=>{
                                completeTodo(j)
                                todo[j].classList.toggle('completedTodo')
                                console.log('todo is deleted')
                            })
                            
                        }
                    }
                        
                    
                })
                
            } 
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
        completeEvent,
        todoColors
    }

