import React, {useState} from 'react'

export default function Todo() {

    const [todo , setTodo] = useState([{
        id: 1,
        description: "Alaa"
        }
    ]);
    const [todotext, setTodoText] = useState('');

    const handleDelete = (id)=>{
      const newArr = todo.filter((el)=>id !== el.id)
      setTodo(newArr)
    }



    return (
        <div>
            <h2> -- Exercise 3</h2>
            <input type="text" onChange={(e)=>setTodoText(e.target.value)} />
            <button onClick={(e)=>setTodo([...todo,{id: todo.length+1 , description: todotext }])} >add</button>
            <ul>
                {
                    todo.map((todo)=>{
                        return <div key={todo.id}>
                            <li>{todo.description}</li>
                            <button  onClick={()=>handleDelete(todo.id)}>delete</button>
                        </div> 
                    })
                }
            </ul>
        </div>
    )
}
