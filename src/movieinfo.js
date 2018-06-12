import React from 'react';
function Movieinfo(props){
  return(
    <li><strong>Movie Name:</strong> {props.moviename}, <strong>Genre:</strong> {props.genrename}</li>
  )
}

export default Movieinfo;