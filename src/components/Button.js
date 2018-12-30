import React, { Component } from 'react'



const isOperator = (val) => {

    return !isNaN(val) || val === "." || val === "=";
}

const Button = (props) => {
    return ( 
        <div onClick={() => props.handleClick(props.children)} className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}>
             {props.children}
  
        </div>
     );
}
 
export default Button;