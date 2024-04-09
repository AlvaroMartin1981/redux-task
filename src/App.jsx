import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/taskSlice';

const App = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ task: '' });

  const handleAddTask = e => {
    e.preventDefault();
    dispatch(addTask({ id: new Date().getTime(), name: formData.task, completed: false }));
    setFormData({ task: '' });
  };

  const handleDeleteTask = id => {
    dispatch(deleteTask({ id }));
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" id="task" value={formData.task} onChange={e => setFormData({ task: e.target.value })} />
        <button type="submit">Agregar tarea</button>
      </form>
    </>
  );
};

export default App;
