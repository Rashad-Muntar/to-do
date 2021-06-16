// import { getLocal } from './todo';

const projectFactory = (title, description, date, priority, completed, todos) => ({
  title, description, date, priority, completed, todos,
});

// let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];

const defProject = () => {
  let EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  // const EXISTING_DATA = getLocal();

  const defaultProject = projectFactory('Default Project', 'Default project one', '08/02/2021', 'Medium', false, []);

  if (!EXISTING_DATA.find((o) => o.title === 'Default Project')) {
    EXISTING_DATA.push(defaultProject);
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
  }
};

const deleteProject = (index) => {
  const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  // const EXISTING_DATA = getLocal();

  EXISTING_DATA.splice(index, 1);
  localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
  window.location.reload();
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
  EXISTING_DATA.push(project);
  allProjects();
};

export {
  projectFactory, deleteProject, projectConstructor, defProject,
};