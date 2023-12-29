import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from './Pages/Category';
import Place from './Pages/Place';
import SubCategory from './Pages/SubCategory';
import District from './Pages/District';


const App = () => {
  return (
    <Routes>
      <Route path='/Category' element={ <Category/>} />
      <Route path='/District' element={ <District/>} />
      <Route path='/Place' element={ <Place/>} />
      <Route path='/SubCategory' element={ <SubCategory/>} />
    
    </Routes>
  )
}
export default App