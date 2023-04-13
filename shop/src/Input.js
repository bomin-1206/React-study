import { useDeferredValue } from "react";
import { useState, useTransition } from "react";

let a = new Array(10000).fill(0)

function Input() {
    let [name,setName] = useState('')
    let [isPending, startTransition] = useTransition()
    let state = useDeferredValue(name)

    return (
        <div className="Input">
            <input onChange={(e)=>{
                startTransition(()=>{
                    setName(e.target.value)
                })
            }} />
            {
                isPending ? '로딩중' :
                a.map(()=>{
                    return <div>{state}</div>
                })
            }
        </div>
    );
}

export default Input;