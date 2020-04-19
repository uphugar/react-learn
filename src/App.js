import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person' 

class App extends Component {
  state = {
    persons:[
      {name:'Uday', age:29, hobbies:'My hobbies are cooking, listening to music'},
      {name:'Vijay', age:28},
      {name:'Vinay', age:19 }
    ]
  }
  render() { return(
    <div className="App">
      
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>{this.state.persons[0].hobbies}</Person>
      {/* <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
    </div>
    //react converts html lookalike jsx code to React.createElement. react takes care of the compilation. 
    // React.createElement('div', null,'im react app!' )
  )};
}

export default App;
