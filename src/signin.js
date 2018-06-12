import React from 'react';

function Signin(props){
   

 return(
     <div>
         <h3>{props.headingsign}</h3>
         <input type="text"  placeholder="Enter Username" />
         <input type="text" placeholder="Enter Password"/>
         <button type="button">{props.buttontext}</button>
     </div>
 )   
}

export default Signin;