import React, { useReducer } from 'react';

// Definimos el reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'MULTIPLY':
      return { count: state.count * 2 }
    default:
      return state;
  }
}

// Componente principal
const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 1 });
  return (
    <div>
      <h1>Ejemplo de useReducer en React</h1>
      <div>
      <h2>Contador: {state.count}</h2>
      {/* Botones para incrementar y decrementar */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'MULTIPLY' })}>Multiply</button>
    </div>
    </div>
  );
};

export default App;
