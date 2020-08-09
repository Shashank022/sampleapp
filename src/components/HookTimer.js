import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();
    
useEffect(() => {
     intervalRef.current = setInterval(()=>{
        setTimer(prevTimer => prevTimer + 1);
        },1000)
    return () => {
        clearInterval(intervalRef.current);
        }
    }, []);

    return (
        <div>
            HOOKTIMER GOES THIS WAY :{timer}     
        <button onClick={clearInterval(intervalRef.current)}>Click</button>
        </div>
    )
}

export default HookTimer;