import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movieinfo from './movieinfo';
import Signin from './signin';

class App extends Component {

  constructor(props){
    super(props);
    this.textChange = this.textChange.bind(this);
    this.username = this.username.bind(this);
    this.state = {initialtext:"Hey, I am initial text. Click on me to change",    
                  usernametext:"",              
                  movies_count:[{moviename: "UP", genrename:" Animated Love Story"},
                                {moviename: "Annabelle", genrename:"horror"},
                                {moviename: "Journey to the center of the earth", genrename:"Sci-Fi"}],
                  signin_text:[{headingsign: "Sign In", buttontext:" Sign In"},
                                {headingsign: "Quick Sign Up", buttontext:"Quick Sign Up"}]
    };
  }
  // onclick function for change text ---- Inorder to place the function out of render(), we need to specify
  // this.textChange = this.textChange.bind(this); and call it as {this.textChange} in the element. if inside render(), 
  //call it as {textChange.bind(this)}
  textChange(){
    this.setState({initialtext:"Hey I am changed!!!!!! :) :)"});
  }


    username(e){
        this.setState = {usernametext:e.target.value}
    }

  render() {
    // To print 1-5 numbers
    var numbers =[];
    for(var i=1;i<=5;i++){     
      numbers[i-1] = i;
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* prints 1-5 numbers */}
        <p className="App-intro"><strong>Printing numbers till 5: </strong>
          {numbers.join(",")}
        </p>

        {/* Change text on click */}
        <p onClick={this.textChange}>{this.state.initialtext}</p>

        {/* Using props */}
        <div className="movies">
          <h5>Movies List</h5>
          <ul>
            {/* We can directly pass the prop names like below if only one , if multiple pass in constructor in state
            <Movieinfo moviename="XXXX" genrename="rom"/> */}
            
            {/* if we need to display any particular mocvie name and genrename from object in state in constructor */}
            {/* <Movieinfo moviename={this.state.movies_count[0].moviename} genrename={this.state.movies_count[0].genrename}/> */}
            
            {/* Running map, arrow function in order to show li's count equal to object properties given in state in constructor */}
            {this.state.movies_count.map((ele,i)=> {
              return <Movieinfo key={i} moviename={this.state.movies_count[i].moviename} genrename={this.state.movies_count[i].genrename} />
            })}
          </ul>
        </div>

        <div className="panel">
          <div className="panel-header">My Shopping App</div>
          <div className="panel-body">
            <p>Logged in user is Guest</p>
            {this.state.signin_text.map((ele,i)=>{
              return(
                <Signin headingsign={this.state.signin_text[i].headingsign} buttontext={this.state.signin_text[i].buttontext}/>
              )
            })}
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
