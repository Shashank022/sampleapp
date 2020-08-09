/* eslint-disable default-case */
import React, {useReducer} from 'react'

const initialState = 0;
const reducer =(state, action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
        }

    }

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2,dispatch2] = useReducer(reducer, initialState)


    return(

        <div>
            <div>Count  : {count}</div>
            <button onClick={()=>{dispatch('increment')}}>[+]</button>
            <button onClick={()=>{dispatch('decrement')}}>[-]</button>
            <button onClick={()=>{dispatch('reset')}}>RESET</button>

            <div>Count2  : {count2}</div>
            <button onClick={()=>{dispatch2('increment')}}>[+]</button>
            <button onClick={()=>{dispatch2('decrement')}}>[-]</button>
            <button onClick={()=>{dispatch2('reset')}}>RESET</button>
        </div>
    )
}

export default CounterThree
