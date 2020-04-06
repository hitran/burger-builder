import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        id: 'asv',
        name: "Max",
        age: 28
      },
      {
        id: 'qwer',
        name: "Manu",
        age: 18,
        hobbies: "Racing"
      },
      {
        id: 'ljhl',
        name: "Stephanie",
        age: 20
      }
    ],
    otherState: 'Another state',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(person => person.id === id);
    if (personIndex !== -1) {
      persons[personIndex].name = event.target.value;
    }
    
    this.setState({persons: persons});
  }

  deletePersonHandler = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    
    let style = {
      backgroundColor: "green",
      color: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'blue',
        color: 'black'
      }
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = <div>
      {
        this.state.persons.map((person, index) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={this.deletePersonHandler.bind(this, index)}
            textChange={(e) => this.nameChangedHandler(e, person.id)}
          > {person.hobbies ? `My hobbies: ${person.hobbies}` : null}
          </Person>
        ))
      }
    </div>
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React Developer</h1>
        <p className={classes.join(' ')}>This is really working!!!</p>
        <button
          onClick={this.togglePersonHandler}
          style={style}
        > Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
