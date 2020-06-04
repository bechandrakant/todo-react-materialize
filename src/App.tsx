import React, { useState } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

export interface ITodo {
  id: number,
  content: string,
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  const deleteTodo = (id: number) => {
    let newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const addTodo = (content: string) => {
    let id = Math.floor(Math.random() * 100) + 1
    setTodos([...todos, {
      id,
      content,
    }])
  }

  return (
    <div className="container">
      <h3 className="center green-text">Todo List App</h3>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  )
}

export default App
