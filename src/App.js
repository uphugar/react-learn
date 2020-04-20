import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium from 'radium';
// import UserInput from './User/UserInput'
// import UserOutput from './User/UserOutput';

class App extends Component {
  // use state hook provides state storage for functional components. for class component, it will replace only the part of the object is need to be updated. 
  // example, it will replace persons if that is sub-object is passed.
  // for functional component, it will replace whole object. example, it will replace persons with new object. also, otherdata object is lost.
  state = {
    persons: [
      { id:'iuhsddfiuh1',name: 'Uday', age: 29, hobbies: 'My hobbies are cooking, listening to music' },
      { id:'sdjhfhf',name: 'Vijay', age: 28 },
      { id:'kjsdfp2j',name: 'Vinod', age: 19 }
    ],
    showPersons: false,
    users: [
      { username: 'udayh', email: 'uday@test.com', name: 'Uday' },
      { username: 'vijaykumar', email: 'vijay@test.com', name: 'Vijay' }
    ]
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p)=> { return p.id === id})
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] =person;

    this.setState({
      persons: persons
    })
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler =(personIndex)=>{
    //to get a copy of array. array is reference type and its better not to modify the source.
    // const newPersons = this.state.persons.slice();
    const newPersons =[...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({persons: newPersons});
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
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid ',
      padding: '5px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color: 'black'
      }
    };
    //using radium for pseudo selectors

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,personIndex) => {
            return <Person 
            click ={() => this.deletePersonHandler(personIndex)} 
            name={person.name} 
            age={person.age} 
            key={person.id}
            nameChanged={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
      buttonStyle.backgroundColor='red';
      buttonStyle[':hover'] ={
        backgroundColor :'salmon',
        color:'black'
      }
    }
    const classes =[];
    if(this.state.persons.length<2)
    {
      classes.push('red');
    } 
    if(this.state.persons.length<1)
    {
      classes.push('bold')
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>Hi, this is React app!</p>
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

//Radium is styling package that provides pseudo selector and media queries along with inline styling
export default Radium(App);