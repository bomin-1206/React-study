import { useState, useTransition } from "react";

let a = new Array(10000).fill(0)

function Input() {
    let [name,setName] = useState('')
    let [isPending, startTransition] = useTransition()

    return (
        <div className="Input">
            <input onChange={(e)=>{ setName(e.target.value)}} />
            <p>안녕</p>
            {
                a.map(()=>{
                    return <div>{name}</div>
                })
            }
        </div>
    );
}

export default Input;