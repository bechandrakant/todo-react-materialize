import React, { useState } from 'react'

const AddTodo = (props: { addTodo: (arg0: string) => void }) => {
  const [content, setContent] = useState('')

  const handleContentChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    props.addTodo(content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="enter todo item" value={content} onChange={handleContentChange} />
    </form>
  )
}

export default AddTodo
