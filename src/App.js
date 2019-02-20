import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends Component {

  state ={
    userInput: ''
  }

  userInputHandler = (event) =>{
    this.setState({userInput : event.target.value} )
  }

  deleteChaeHandler =(index) =>{
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText =text.join('');
    this.setState({userInput : updatedText});
  }
  render() {

    const charList = this.state.userInput.split('').map( (char,index) => {
      return <Char character ={char} 
                  key ={index}
                  clicked= {()=>this.deleteChaeHandler(index)}/>;
    });

    return (
      <div className="UserApp"> 
        <input type="text" onChange ={this.userInputHandler} value={this.state.userInput}/>
        <br />
        {this.state.userInput}

        <Validation userLength ={this.state.userInput.length}/>
        {charList}
      </div>
      
    );
  }
}

export default App;
