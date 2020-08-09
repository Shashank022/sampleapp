import React, {useReducer} from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
// import PParentCompoent from './components/PParentCompoent';
// import Home from '../src/components/Home';
// import Hello from '../src/components/Hello';
// import FocusInput from './components/FocusInput';
//import HookTimer from './components/HookTimer';
//import ParentComponent from './components/ParentComponent';
import ApiCall from './components/ApiCall';
//import CounterOne from './components/CounterOne';
//import CounterTwo from './components/CounterTwo';
//import CounterThree from './components/CounterThree';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";


export const CountContext = React.createContext();

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


function App() {
  
  const [count, dispatch] = useReducer(reducer, initialState);

//const [count , setCount] = useState(0);

  return (
    <CountContext.Provider value={{countState : count , countDispatch : dispatch}}>
    <div className="App">
      {/* <Home/>
      <Hello increment={()=> setCount(count + 1)}/> */}
      {/* <FocusInput/> */}
      {/* <HookTimer/> */}
      {/* <ParentComponent/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* {count}
      <ComponentA/> */}
      {/* <ComponentB/>
      <ComponentC/> */}
      {/* <PParentCompoent/> */}

      <ApiCall/>
      <Router>
        <div>
          <Route path="/about" component={ComponentA} />
          <Route path="/users" component={ComponentB} />
          <Route path="/contact" component={ComponentC} />
        </div>
      </Router>
    </div>
  </CountContext.Provider>    

  );
}

export default App;
