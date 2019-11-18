import React from 'react';
import '../styles/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';


class App extends React.Component {
  counter = 0;
  state = {
    tasks: []
  }
  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: new Date().getTime()

    }
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true;
  }

  render() {
    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        <AddTask add={this.addTask}></AddTask>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}></TaskList>
      </div>
    );
  }
}

export default App;
