/* eslint-disable consistent-return */
import { projectFactory } from './modules/project';
// import getLocal
import { todoFactory, deleteTodo, completeTodo } from './modules/todo';

// let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
const projectArr = [];
const sideBarproject = document.querySelector('.projects');
const mainContent = document.getElementById('projectTitle');
const todoFormBtn = document.getElementById('todoForm-link');
const todoForm = document.querySelector('.newTodoForm');
const editTodoForm = document.querySelector('.editTodoForm');
const todoTitleDisplay = document.createElement('p');
const todoDate = document.createElement('p');

todoTitleDisplay.classList.add('todoTitleDisplay');

const todoFormDisplay = () => {
  todoFormBtn.addEventListener('click', () => {
    todoForm.classList.toggle('hide');
  });
};


const allProjects = () => {
  let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  // const EXISTING_DATA = getLocal();

  for (let i = 0; i < EXISTING_DATA.length; i += 1) {
    const projectWrapper = document.createElement('div');
    const projectTitle = document.createElement('div');
    const delBtn = document.createElement('div');

    delBtn.classList.add('far', 'fa-trash-alt');
    projectWrapper.classList.add('d-flex', 'justify-content-between', 'col-12', 'projectTitle');
    delBtn.classList.add('projectDelBtn', 'col-3', 'd-flex', 'justify-content-center');
    projectTitle.classList.add('prs');

    projectTitle.innerHTML = EXISTING_DATA[i].title;

    projectWrapper.appendChild(projectTitle);
    projectWrapper.appendChild(delBtn);
    sideBarproject.appendChild(projectWrapper);
    deleteEvent()
  }
};

const displayProjects = () => {
  document.querySelector('.project').addEventListener('click', () => {
    document.querySelector('.projectList').classList.toggle('hide');
  });
};

const toggleProjectTitle = () => {
  if (document.body.contains(document.querySelector('#prTitle'))) {
    document.querySelector('#prTitle').remove();
  }
};

const toggleMainRightContent = () => {
  if (document.getElementById('todosWrapper').contains(document.getElementById('todosContainer'))) {
    document.querySelector('#todosContainer').innerHTML = '';
  }
};

const colors = () => {
  if (document.getElementById('todosContainer').contains(document.querySelector('.todoDiv'))) {
    const todoDiv = document.querySelectorAll('.todoDiv');
    for (let j = 0; j < todoDiv.length; j += 1) {
      if (todoDiv[j].getAttribute('value') === 'High') {
        todoDiv[j].classList.add('high');
      }
      if (todoDiv[j].getAttribute('value') === 'Medium') {
        todoDiv[j].classList.add('medium');
      }
      if (todoDiv[j].getAttribute('value') === 'Low') {
        todoDiv[j].classList.add('low');
      }
    }
  }
};

const todoColors = () => {
  const pr = document.querySelectorAll('.prs');
  for (let i = 0; i < pr.length; i += 1) {
    pr[i].addEventListener('click', () => {
      colors();
    });
  }
};

const getEditBtn = () => {
  let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  // const EXISTING_DATA = getLocal();

  for (let j = 0; j < EXISTING_DATA.length; j += 1) {
    for (let k = 0; k < EXISTING_DATA[j].todos.length; k += 1) {
      // if (document.getElementById('todosContainer').contains(document.querySelector('.todoDiv'))) {
      const todoIcons = document.querySelectorAll('.todoIcons');
      for (let l = 0; l < todoIcons.length; l += 1) {
        todoIcons[l].addEventListener('click', () => {
          editTodoForm.classList.toggle('hide');

          document.getElementById('editTitle').value = EXISTING_DATA[j].todos[k].title;
          document.getElementById('editDate').value = EXISTING_DATA[j].todos[k].date;
          document.getElementById('editDesc').value = EXISTING_DATA[j].todos[k].description;
          document.getElementById('editPriority').value = EXISTING_DATA[j].todos[k].priority;

          document.getElementById('todosWrapper').appendChild(document.getElementById('todoDisplay'));
          console.log('edit cliek');
        });
        // }
      }
    }
  }
};

const displayTodos = () => {
  let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  // const EXISTING_DATA = getLocal();

  for (let j = 0; j < EXISTING_DATA.length; j += 1) {
    if (document.querySelector('#prTitle').textContent === EXISTING_DATA[j].title) {
      for (let k = 0; k < EXISTING_DATA[j].todos.length; k += 1) {
        const todoTitle = document.createElement('p');
        const todoDiv = document.createElement('div');
        const date = document.createElement('p');
        const delIcon = document.createElement('span');
        const buttonsDiv = document.createElement('div');
        const moreIcon = document.createElement('span');

        delIcon.classList.add('far', 'fa-trash-alt', 'todoDelIcon');
        moreIcon.classList.add('fas', 'fa-info-circle', 'todoIcons');
        todoTitle.classList.add('todoTitle');
        todoDiv.classList.add('todoDiv', 'd-flex', 'justify-content-between', 'col-12');
        buttonsDiv.classList.add('btnsDiv', 'd-fle');

        todoTitle.innerHTML = EXISTING_DATA[j].todos[k].title;
        date.innerHTML = EXISTING_DATA[j].todos[k].date;
        todoDiv.setAttribute('value', EXISTING_DATA[j].todos[k].priority);
        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(date);
        buttonsDiv.appendChild(delIcon);
        buttonsDiv.appendChild(moreIcon);
        todoDiv.appendChild(buttonsDiv);
        document.getElementById('todosContainer').appendChild(todoDiv);
        moreIcon.addEventListener('click', () => {
          editTodoForm.classList.toggle('hide');
          document.getElementById('editTitle').value = EXISTING_DATA[j].todos[k].title;
          document.getElementById('editDate').value = EXISTING_DATA[j].todos[k].date;
          document.getElementById('editDesc').value = EXISTING_DATA[j].todos[k].description;
          document.getElementById('editPriority').value = EXISTING_DATA[j].todos[k].priority;

          document.getElementById('todosWrapper').appendChild(document.getElementById('todoDisplay'));
        });
      }
    }
  }
};

const deleteEvent = () => {
  let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects'));
  if (document.querySelector('.projectList').contains(document.querySelector('.projects'))) {
    const delbtns = document.querySelectorAll('.projectDelBtn');
    for (let i = 0; i < delbtns.length; i += 1) {
      delbtns[i].addEventListener('click', (e) => {
        e.stopPropagation();
        EXISTING_DATA.splice(i, 1);
        localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
        document.querySelector('.projects').innerHTML = ''
        document.querySelector('.projectList').classList.remove('hide')
        allProjects()
        
      });
      
    }
  }
};

const updateProjectList = () => {
  let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  // const EXISTING_DATA = getLocal();
  const projects = document.querySelector('.projects');
  const projectTitle = document.createElement('div');
  const projectMain = document.createElement('div');
  const delBtn = document.createElement('div');

  const last = EXISTING_DATA.pop();
  

  projectMain.classList.add('prs', 'col-8');
  delBtn.classList.add('far', 'fa-trash-alt', 'col-2');
  projectTitle.classList.add('d-flex', 'justify-content-between', 'col-12', 'projectTitle');
  delBtn.classList.add('projectDelBtn', 'col-3', 'd-flex', 'justify-content-center');

  projectMain.innerHTML = last.title;

  projectTitle.appendChild(projectMain);
  projectTitle.appendChild(delBtn);
  projects.appendChild(projectTitle);
  mainProjectDisplay();
  deleteEvent();
};

// todo starts here

const updateTodoList = () => {
  let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  // const EXISTING_DATA = getLocal();

  for (let j = 0; j < EXISTING_DATA.length; j += 1) {
    if (document.querySelector('#prTitle').textContent === EXISTING_DATA[j].title) {
      const last = EXISTING_DATA[j].todos.pop();
      const todoTitle = document.createElement('p');
      const todoDiv = document.createElement('div');
      const date = document.createElement('p');
      const delIcon = document.createElement('span');
      const buttonsDiv = document.createElement('div');
      const moreIcon = document.createElement('span');

      delIcon.classList.add('far', 'fa-trash-alt', 'todoDelIcon');
      moreIcon.classList.add('fas', 'fa-info-circle', 'todoIcons');
      todoTitle.classList.add('todoTitle');
      todoDiv.classList.add('todoDiv', 'd-flex', 'justify-content-between', 'col-12');
      buttonsDiv.classList.add('btnsDiv', 'd-fle');
      todoDiv.setAttribute('value', last.priority);

      todoTitle.innerHTML = last.title;
      todoDate.innerHTML = last.date;

      if (document.getElementById('todosContainer')) {
        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDate);
        buttonsDiv.appendChild(delIcon);
        buttonsDiv.appendChild(moreIcon);
        todoDiv.appendChild(buttonsDiv);
        document.getElementById('todosContainer').appendChild(todoDiv);
        updateDeleteBtn();
        colors();
        getEditBtn();
      }
    }
  }
};
const projectConstructor = () => {
  let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];

  // const EXISTING_DATA = getLocal();
  const project = projectFactory(
    document.getElementById('prtitle').value,
    document.getElementById('prdesc').value,
    document.getElementById('prdate').value,
    document.getElementById('prpriority').value,
    false,
    [],
  );
  projectArr.push(project);
  EXISTING_DATA.push(project);
  localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
  updateProjectList();
};

const createProject = () => {
  const newProBtn = document.getElementById('prsubmit');
  newProBtn.addEventListener('click', () => {
    projectConstructor();
    document.querySelector('.prForm').reset();
  });
  
};


const todoConstructor = () => {
  let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  // const EXISTING_DATA = getLocal();

  const newToDo = todoFactory(
    document.getElementById('title').value,
    document.getElementById('desc').value,
    document.getElementById('date').value,
    document.getElementById('priority').value,
    false,
    [],
  );
  for (let i = 0; i < EXISTING_DATA.length; i += 1) {
    if (document.body.contains(document.querySelector('#prTitle'))) {
      const projectTitle = document.getElementById('prTitle').textContent;

      if (EXISTING_DATA[i].title === projectTitle) {
        EXISTING_DATA[i].todos.push(newToDo);
        localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
      }
    }
  }
};

const createTodo = () => {
  const todoBtn = document.getElementById('submit');
  todoBtn.addEventListener('click', () => {
    if (document.getElementById('title').value === ''
            || document.getElementById('date').value === ''
            || document.getElementById('desc').value === ''
            || document.getElementById('priority').value === '') {
      return false;
    }

    todoConstructor();

    document.querySelector('form').reset();
    document.querySelector('form').classList.add('hide');
    updateTodoList();
  });
};

const editForm = () => {
  let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];

  // const EXISTING_DATA = getLocal();
  const editSubmit = document.querySelector('#editSubmit');
  editSubmit.addEventListener('click', () => {
    for (let j = 0; j < EXISTING_DATA.length; j += 1) {
      for (let k = 0; k < EXISTING_DATA[j].todos.length; k += 1) {
        if (document.getElementById('editTitle').value === ''
                || document.getElementById('editDate').value === ''
                || document.getElementById('editDesc').value === ''
                || document.getElementById('editPriority').value === '') {
          return false;
        }
        EXISTING_DATA[j].todos[k].title = document.getElementById('editTitle').value;
        EXISTING_DATA[j].todos[k].date = document.getElementById('editDate').value;
        EXISTING_DATA[j].todos[k].description = document.getElementById('editDesc').value;
        EXISTING_DATA[j].todos[k].priority = document.getElementById('editPriority').value;
        localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
      }
    }
  });
};

const todoDelete = () => {
  const pr = document.querySelectorAll('.prs');
  for (let i = 0; i < pr.length; i += 1) {
    pr[i].addEventListener('click', () => {
      if (document.getElementById('todosContainer').contains(document.querySelector('.todoDiv'))) {
        const todoDelBtn = document.querySelectorAll('.todoDelIcon');
        for (let j = 0; j < todoDelBtn.length; j += 1) {
          todoDelBtn[j].addEventListener('click', () => {
            deleteTodo(j);
            document.getElementById('todosContainer').innerHTML = ''
            displayTodos()
            colors()
          });
        }
      }
    });
  }
};

const updateDeleteBtn = () => {
  if (document.getElementById('todosContainer').contains(document.querySelector('.todoDiv'))) {
    const todoDelBtn = document.querySelectorAll('.todoDelIcon');
    for (let j = 0; j < todoDelBtn.length; j += 1) {
      todoDelBtn[j].addEventListener('click', () => {
        deleteTodo(j);
        document.getElementById('todosContainer').innerHTML = ''
        displayTodos()
        colors()
      });
    }
  }
};


const mainProjectDisplay = () => {
  const allSidebarprojects = document.querySelectorAll('.prs');
  for (let i = 0; i < allSidebarprojects.length; i += 1) {
    allSidebarprojects[i].addEventListener('click', () => {
      const projectTitle = document.createElement('h3');
      projectTitle.setAttribute('id', 'prTitle');

      projectTitle.classList.add('p-5');
      projectTitle.innerHTML = allSidebarprojects[i].textContent;

      toggleProjectTitle();

      mainContent.appendChild(projectTitle);
      document.querySelector('.todoAddBtn').classList.remove('hide');

      toggleMainRightContent();
      // updateDeleteBtn();
      todoColors();
      displayTodos();
    });
  }
};

const completeEvent = () => {
  const pr = document.querySelectorAll('.prs');
  for (let i = 0; i < pr.length; i += 1) {
    pr[i].addEventListener('click', () => {
      if (document.getElementById('todosContainer').contains(document.querySelector('.todoDiv'))) {
        const todo = document.querySelectorAll('.todoTitle');
        for (let j = 0; j < todo.length; j += 1) {
          todo[j].addEventListener('click', () => {
            completeTodo(j);
            todo[j].classList.toggle('completedTodo');
          });
        }
      }
    });
  }
};

export {
  createProject,
  displayProjects,
  allProjects,
  todoConstructor,
  updateProjectList,
  createTodo,
  mainProjectDisplay,
  deleteEvent,
  todoFormDisplay,
  todoDelete,
  completeEvent,
  todoColors,
  editForm,
};