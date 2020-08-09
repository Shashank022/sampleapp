import React, { useState } from 'react'

function PParentCompoent() {

const [age, setAge]  = useState(0);
const [salary, setSalary]  = useState(15000);
const handleClick = ()=>{
    setAge(age+1);
}

const handleClickEvent = ()=>{
    setAge(age-1);
}

    return (  
        <div>
            AGE : {age}
            <button onClick={handleClick}>[+]</button>
            <button onClick={handleClickEvent}>[-]</button>
            Salary : {salary}
            <button onClick={handleClick}>[+]</button>
            <button onClick={handleClickEvent}>[-]</button>

        </div>
    )
}

export default PParentCompoent
  