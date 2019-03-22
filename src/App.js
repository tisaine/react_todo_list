import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//port uuid from 'uuid';
import axios from 'axios';

import './App.css';
import Axios from 'axios';


class App extends Component {
  state = {
    todos: []
  }

  //Using json placeholder and making the request 
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7')
    .then(res => this.setState({ todos: res.data}))
  }

  //Marking the checkbox as complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }
      
      )});
  } 

  //Deleting the todolist item from  the red buttons
  delTodo = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id
      !== id)] }) );
  }

  //Add another to do to the list
  addTodo = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: 
        [...this.state.todos, res.data] }));
  }


  render() {
     return (
       <Router>
      <div className="App">
        <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} 
            markComplete={this.markComplete}
            delTodo={this.delTodo}/>
          </React.Fragment>
        )}></Route>
        <Route path="/about" component={About}></Route>
        
        </div>        
      </div>
      </Router>
    );
  }
}

export default App;
