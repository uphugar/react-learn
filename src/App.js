import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
// import UserInput from './User/UserInput'
// import UserOutput from './User/UserOutput';

class App extends Component {
  // use state hook provides state storage for functional components. for class component, it will replace only the part of the object is need to be updated. 
  // example, it will replace persons if that is sub-object is passed.
  // for functional component, it will replace whole object. example, it will replace persons with new object. also, otherdata object is lost.
  state = {
    persons: [
      { name: 'Uday', age: 29, hobbies: 'My hobbies are cooking, listening to music' },
      { name: 'Vijay', age: 28 },
      { name: 'Vinay', age: 19 }
    ],
    users: [
      { username: 'udayh', email: 'uday@test.com', name: 'Uday' },
      { username: 'vijaykumar', email: 'vijay@test.com', name: 'Vijay' }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29, hobbies: 'My hobbies are cooking, listening to music' },
        { name: 'Vijay', age: 28 },
        { name: 'Vinay', age: 19 }
      ]
    });
    // this.state.persons[0].name='Udaya P Hugar'
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Uday', age: 29, hobbies: 'My hobbies are cooking, listening to music' },
        { name: event.target.value, age: 28 },
        { name: 'Vinay', age: 19 }
      ],
      showPersons: false
    })
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  userNameChangeHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value, email: 'uday@test.com', name: 'Uday' },
        { username: 'vijaykumar', email: 'vijay@test.com', name: 'Vijay' }
      ]
    })
  }
  //passing method reference in the props
  render() {
    const buttonStyle = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid red',
      padding: '5px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
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
        </div>
      )
    }

    return (
      <div className="App">
        <p>Hi, this is React app!</p>
        {/* <UserInput usernameHandler={this.userNameChangeHandler} username={this.state.users[0].username}/>
      <UserOutput name={this.state.users[0].name} email={this.state.users[0].email} username={this.state.users[0].username}/>
      <UserOutput name={this.state.users[1].name} email={this.state.users[1].email} username={this.state.users[1].username}/> */}

        <button style={buttonStyle} onClick={this.togglePersons}>Toggle Persons</button>
        {persons}
        
      </div>
      //react converts html lookalike jsx code to React.createElement. react takes care of the compilation. 
      // React.createElement('div', null,'im react app!' )
    )
  }
}

export default App;