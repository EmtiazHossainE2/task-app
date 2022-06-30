import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Completed from './pages/Completed';
import Todos from './pages/Todos';
import Calendar from './pages/Calendar';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/completed' element={<Completed/>}/>
                <Route path='/todos' element={<Todos/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
            </Routes>
        </div>
    );
};

export default App;