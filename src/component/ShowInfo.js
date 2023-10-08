import { useDispatch, useSelector } from "react-redux"
import { changeName } from "../redux/counter"

export const ShowInfo = () => {
    const name = useSelector((state) => state.counter.name)
    const dispatch = useDispatch()
    
    return (
        <>
        <h3>Your name is : {name}</h3>
        <input  type='text' placeholder="your name" onChange={(e)=>dispatch(changeName(e.target.value))}></input>
        
        </>
    )
}