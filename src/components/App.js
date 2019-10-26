import React from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Task from './Task';

class App extends React.Component {
  state = {
    tasks: [

    ]
  }

  render() {
    return (
      <div className="App">
        <AddTask></AddTask>
      </div>
    );
  }
}

export default App;
