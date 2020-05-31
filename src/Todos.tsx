import React from 'react'
import { ITodo } from './App';

const Todos = (props: { todos: ITodo[]; deleteTodo: (arg0: number) => void; }) => {

  const todoList = props.todos.length ?
      (props.todos.map((todo: ITodo, index: number ) => 
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <i className="material-icons red-text right"  onClick={() => props.deleteTodo(todo.id)}>delete</i>
        </div>
      ))
    : <div className="collection-item"><p>You have no todos left, yay!</p></div>
  return (
    <div className="collection">
      { todoList }
    </div>
  )
}

export default Todos
