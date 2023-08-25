import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './Form';
import Table from './Table';
import Login from './Login';
import  Update  from './Update';
import Home from './Home';
import WithNav from './WithNav';
import Without from './WithOutNav';
import ImgVd from './ImgVd';
import Video from  "./VdoUld";


export default function MainApp() {
  return (
    <div>
         <Router>
              <Routes>
                <Route element={<Without/>}>
                   <Route exact path='/' element={<Login/>}></Route>
                </Route>
                <Route element={< WithNav />}>
                <Route exact path='/read/:id' element={< Home />}></Route>
                <Route exact path='/update/:id' element={<Update/>}></Route>
                <Route exact path='/Upload' element={<ImgVd/>}></Route>
                <Route exact path='/VdoUld' element={<Video/>}></Route>
                <Route exact path='/form' element={<Form />}></Route>
                <Route exact path='/View' element={<Table />}></Route>
                </Route>
              </Routes>
         </Router>

    </div>
  )
}
