import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name : "Max",
        age: 28
      }, 
      {
        name : "Manu",
        age: 18,
        hobbies: "Racing"
      }, 
      {
        name : "Stephanie",
        age: 20
      }
    ],
    otherState: 'Another state'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name : newName,
          age: 28
        }, 
        {
          name : "Manu",
          age: 18,
          hobbies: "Racing"
        }, 
        {
          name : "Stephanie",
          age: 20
        }
      ]
    })
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        {
          name : "Max",
          age: 28
        }, 
        {
          name : e.target.value,
          age: 18,
          hobbies: "Racing"
        }, 
        {
          name : "Stephanie",
          age: 20
        }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
  }
    return (
      <div className="App">
        <h1>Hi, I'm a React Developer</h1>
        <p>This is really working!!!</p>
        <button 
          onClick={() => this.switchNameHandler("Maximilian!!!")}
          style={style}
        > Switch Name
        </button>
        {
          this.state.persons.map(person => (
          <Person 
            key={person.age} 
            name={person.name} 
            age={person.age}
            click={this.switchNameHandler.bind(this, 'Max')}
            textChange = {this.nameChangedHandler}
          > {person.hobbies? `My hobbies: ${person.hobbies}` : null}
        </Person>
        ))
        }
      </div>
    );
  }
}

export default App;
