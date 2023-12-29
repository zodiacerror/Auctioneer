import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UseStateHook from './Hooks/UseStateHook'
import UseEffectHook from './Hooks/UseEffectHook';
import Home from './Hooks/Home';
import Admin from './Admin/App';
import Guest from './Guest/App';
import UseRefHook from './Hooks/UseRefHook';
import UseReducerHook from './Hooks/UseReducerHook';
import UseCallBackHook from './Hooks/UseCallBackHook';


const App = () => {
  return (
    <Routes>
      
      <Route path='/Admin/*' element={ <Admin/>} />
      <Route path='/Guest/*' element={ <Guest/>} />
      <Route path='/UseStateHook' element={ <UseStateHook/>} />
      <Route path='/UseEffectHook' element={ <UseEffectHook/>} />
      <Route path='/UseRefHook' element={ <UseRefHook/>} />
      <Route path='/UseReducerHook' element={ <UseReducerHook/>} />
      <Route path='/UseCallBackHook' element={ <UseCallBackHook/>} />
      <Route path='/Home' element={ <Home/>} />
    
    </Routes>
  )
}
export default App