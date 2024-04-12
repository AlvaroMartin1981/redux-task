import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask  } from './redux/taskSlice';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState('');

  const handleClickAdd = () => {
    dispatch(addTask({
      id: Math.random(),
      text: formData
    }))
    setFormData('')
  }

  const handleDeleteTask = id => {
    dispatch(deleteTask( id ));
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <input
      type="text"
      placeholder='escribe una tarea'
      value={formData}
      onChange={e =>setFormData(e.target.value)}/>
      <button onClick={handleClickAdd}>Agregar Tarea</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default App;
