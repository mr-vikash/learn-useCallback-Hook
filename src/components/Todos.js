import React from 'react'
import { memo } from 'react'
const Todos = ({todos,addTodo}) => {
    console.log("child component rendered")
  return (
    <div>
      <button onClick={addTodo}>addTodo</button>
      <div className='todos'>
      {
        todos.map((todo,i)=>{
            return <h2 key={i}>{todo}</h2>
        })
      }
      </div>
    </div>
  )
}

export default memo(Todos);
