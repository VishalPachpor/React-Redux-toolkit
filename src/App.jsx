import { useState } from 'react'
import AddTodo from "./components/AddTodo"
import './App.css'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This code is for react redux</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
