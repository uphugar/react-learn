import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person' 

class App extends Component {
  // use state hook provides state storage for functional components.
  // for class component, it will replace only the part of the object is need to be updated. 
  // example, it will replace persons if that is sub-object is passed.
  // for functional component, it will replace whole object. 
  // example, it will replace persons with new object. also, otherdata object is lost.
  state = {
    persons:[
      {name:'Uday', age:29, hobbies:'My hobbies are cooking, listening to music'},
      {name:'Vijay', age:28},
      {name:'Vinay', age:19 }
    ]
  }

  switchNameHandler =(newName)=>{
    this.setState({
      persons:[
        {name:newName, age:29, hobbies:'My hobbies are cooking, listening to music'},
        {name:'Vijay', age:28},
        {name:'Vinay', age:19 }
      ]
    });
    // this.state.persons[0].name='Udaya P Hugar'
  };

  nameChangedHandler =(event)=>{
    this.setState({
      persons:[
        {name:'Uday', age:29, hobbies:'My hobbies are cooking, listening to music'},
        {name:event.target.value, age:28},
        {name:'Vinay', age:19 }
      ]
    })
  }

  //passing method reference in the props
  render() { 
    const buttonStyle ={
      backgroundColor:'yellow',
      font:'inherit',
      border:'1px solid red',
      padding: '5px',
      cursor:'pointer'
    };
    
    return(
    <div className="App">
      <p>Hi, this is React app!</p>
      <button style={buttonStyle} onClick={this.switchNameHandler.bind(this,'Udaya P ')}>Switch Names</button>
      <Person 
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} 
        click={() => this.switchNameHandler('Uday!')} 
        >{this.state.persons[0].hobbies}
      </Person>
      <Person 
        name={this.state.persons[1].name}
        age={this.state.persons[1].age} 
        nameChanged={this.nameChangedHandler}
        >{this.state.persons[1].hobbies}
      </Person>
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
  )}
}

export default App;