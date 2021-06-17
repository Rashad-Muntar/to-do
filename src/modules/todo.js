const todoFactory = (title, description, date, priority, completed) => ({
  title, description, date, priority, completed,
});

// const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
// const getLocal = () =>{
// return JSON.parse(localStorage.getItem('Projects'));
// }

const deleteTodo = (index) => {
  const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  // const EXISTING_DATA = getLocal();

  for (let i = 0; i < EXISTING_DATA.length; i += 1) {
    EXISTING_DATA[i].todos.splice(index, 1);
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
  }
};

const completeTodo = () => {
  const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || [];
  // const EXISTING_DATA = getLocal();

  for (let i = 0; i < EXISTING_DATA.length; i += 1) {
    if (EXISTING_DATA[i].todos.completed === false) {
      EXISTING_DATA[i].todos.completed = true;
      localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
    } else {
      EXISTING_DATA[i].todos.completed = true;
      localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA));
    }
  }
};
// Export getLocal
export { todoFactory, deleteTodo, completeTodo };
