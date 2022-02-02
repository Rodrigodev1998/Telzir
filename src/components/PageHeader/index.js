import React from "react";
import {Link} from 'react-router-dom';


import './styles.css';


export default function PageHeader(){
    return(
        <header className="page-header">
      <div className="top-bar-container">
      <img className="logo" src="/img/logo.png"  />
      </div>
    </header>
    );
}