import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person' 

function App() {
  // use state hook provides state storage for functional components.
  // for class component, it will replace only the part of the object is need to be updated. 
  // example, it will replace persons if that is sub-object is passed.
  // for functional component, it will replace whole object. 
  // example, it will replace persons with new object. also, otherdata object is lost.
  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Uday', age:29, hobbies:'cooking, listening to music'}
    ],
    otherdata:'some other data'
  });

  const switchNameHandler =()=>{
    setPersonState({
      persons: [
        {name: 'Uday P Hugar', age:29, hobbies:'cooking, listening to music'}
      ],
      otherdata: personState.otherdata
    })
  };
  return (
    <div className="App">
      <p>Hi, this is React app!</p>
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>{personState.persons[0].hobbies}</Person>
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
  );
}

export default App;
