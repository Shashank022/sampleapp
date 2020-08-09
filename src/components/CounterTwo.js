/* eslint-disable default-case */
import React, {useReducer} from 'react'

const initialState = {
    firstCounter:0,
    secondCounter :2
};
const reducer =(state, action)=>{
    switch(action.type  ){
        case 'increment':
            return {...state, firstCounter : state.firstCounter + action.value}
        case 'decrement':
            return {...state,firstCounter : state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter : state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter : state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
        }
    }

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return(

        <div>
            <div>First Counter  : {count.firstCounter}</div>
            <button onClick={()=>{dispatch({type :'increment', value : 1})}}>[+]</button>
            <button onClick={()=>{dispatch({type :'decrement', value : 1})}}>[-]</button>

            <div>Second Counter  : {count.secondCounter}</div>
            <button onClick={()=>{dispatch({type :'increment2', value : 4})}}>[+]</button>
            <button onClick={()=>{dispatch({type :'decrement2', value : 4})}}>[-]</button>
            <button onClick={()=>{dispatch({type :'reset'})}}>Reset</button>
        </div>
    )
}

export default CounterTwo
