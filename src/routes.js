import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Calculate from './pages/Calculate'; 

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calculate" element={<Calculate />} />
        </Routes>    
    );
}

