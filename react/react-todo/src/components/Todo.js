import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const Todo = ({ todos, removeTodo, updateTodo, completeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = newValue => {
    updateTodo(edit.id, newValue)

    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>
  }

  return (
    <div className="todo">
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <RiCloseCircleLine
              className="delete-icon"
              onClick={() => removeTodo(todo.id)}
            ></RiCloseCircleLine>
            <TiEdit
              className="edit-icon"
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
            ></TiEdit>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Todo
