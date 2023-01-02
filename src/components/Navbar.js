import React from 'react';

export default function Navbar(){
    return(
    <nav>
    <img src = {require("../images/globe-logo.png")} className = "nav--logo"/>
    <h3 className = "nav--title">my travel journal</h3>
    </nav>
    )
}