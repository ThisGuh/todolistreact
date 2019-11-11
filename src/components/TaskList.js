import React from 'react';
import Task from './Task';
import "../styles/TaskList.css";

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}></Task>);
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}></Task>);


    return (
        <div className="taskList">
            <div className="activeTasks">
                <h1>Tasks to be done</h1>
                {activeTasks.length > 0 ? activeTasks : <p>Nothing to do :)</p>}
            </div>
            <hr />
            <div className="doneTasks">
                <h1>Tasks done <em>({done.length})</em></h1>
                {doneTasks.slice(0, 5)}
            </div>
        </div>
    );
}

export default TaskList;