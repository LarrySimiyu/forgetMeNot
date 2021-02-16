import React, { useState } from 'react'

export default function TodoForm({ addTodo, todos }) {

    const [value, setValue] = useState("")

    const handleSubmit = (event) =>{
        
        event.preventDefault()
        
        if(!value) return;
        addTodo(value)
        setValue("")
    }

    const handleTyping = event => {
        setValue(event.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Add a task"
                onChange={handleTyping}
                className="input-field"
                value={value}
            />
        </form>
    )

}