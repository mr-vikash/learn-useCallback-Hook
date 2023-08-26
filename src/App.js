
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import { useCallback, useState } from 'react';

const  App =()=> {
  const [count,setCount] = useState(0);
  const [todos,setTodo] = useState([]);

  const increment =()=>
  {
    setCount((c)=>c + 1)
  };

  const addTodo = useCallback(()=>
    {
      setTodo((t)=>[...t,"New Todo"])
    }
  ,[todos])
  
  return (
    <div className="App">
     <Header/>
     <h1>Count:{count}</h1>
     <button onClick={increment}><h2>+</h2></button>
     <h1>My Todos</h1>
     <Todos addTodo={addTodo} todos={todos} />
    </div>
  );
}

export default App;
