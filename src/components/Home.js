import React, { useState, useEffect }from 'react';


const Home = () => {

const [values, setValues]   = useState(20);

const getUpdatedValues = () =>{
        setValues(values +12 );
    }

useEffect(() => {
    console.log("It renders when ever value changess now :");
},[values]);

    return ( 
        <div>
            <p className={'background: 	#FF6347'}>Count : 
                <button onClick={getUpdatedValues}>
                    Count
                </button>
                {values}
                 </p>
        </div>
     );
}
 
export default Home;
