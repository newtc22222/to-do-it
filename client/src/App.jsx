import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [listTodo, setListTodo] = useState([]);

  const fetchTodo = async () => {
    try {
      const res = await axios.get('http://localhost:8000/');
      setListTodo(res.data);
    } catch (err) {
      console.error(err);
    }

  }

  useEffect(() => { fetchTodo() });

  return (
    <>
      {listTodo.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </>
  )
}

export default App
