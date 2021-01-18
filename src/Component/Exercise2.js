import React,{useState} from 'react'

export default function Colors() {

    const colors = ['red', 'yellow','green', 'blue', 'orange'];

    const [color, setColor] = useState(colors[0]);

    return (
        <div style={{backgroundColor : color}}>
            <h2>--Exercise 2</h2>
        {colors.map(e => <button onClick={()=>setColor(e)} >{e}</button>)}
        </div>
    )
}
