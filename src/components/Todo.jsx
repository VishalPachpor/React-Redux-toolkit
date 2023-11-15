import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import {removeTodo} from "../features/todo/todoSlice"

function Todo() {
  const todos = useSelector((state)=>state.todos)

  return (
    <div>Todo</div>
  )
}

export default Todo