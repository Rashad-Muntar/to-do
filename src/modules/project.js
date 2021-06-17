const projectFactory = (title, description, date, priority, completed, todos) => ({
  title, description, date, priority, completed, todos,
});

const defProject = () => {
  const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  const defaultProject = projectFactory('Default Project', 'Default project one', '08/02/2021', 'Medium', false, []);
  if (!EXISTING_DATA.find((o) => o.title === 'Default Project')) {
    EXISTING_DATA.push(defaultProject);
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
  }
};

const projectConstructor = () => {
  const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  const project = projectFactory(
    document.getElementById('prtitle').value,
    document.getElementById('prdesc').value,
    document.getElementById('prdate').value,
    document.getElementById('prpriority').value,
    false,
    [],
  );
  EXISTING_DATA.push(project);
};

export {
  projectFactory, projectConstructor, defProject,
};