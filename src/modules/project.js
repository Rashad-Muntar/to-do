const projectFactory = (title, description, date, priority, completed, todos) => ({
  title, description, date, priority, completed, todos,
});

const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];

const defProject = () => {
  const defaultProject = projectFactory('Default Project', 'Default project one', '08/02/2021', 'Medium', false, []);

  if (!EXISTING_DATA.find((o) => o.title === 'Default Project')) {
    EXISTING_DATA.push(defaultProject);
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
  }
};

const deleteProject(index) {
  EXISTING_DATA.splice(index, 1);
  localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
  window.location.reload();
}

const projectConstructor = () => {
  const project = projectFactory(
    document.getElementById('prtitle').value,
    document.getElementById('prdesc').value,
    document.getElementById('prdate').value,
    document.getElementById('prpriority').value,
    false,
    [],
  );
  EXISTING_DATA.push(project);
  localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
};

export {
  projectFactory, deleteProject, projectConstructor, defProject,
};