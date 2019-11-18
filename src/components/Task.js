import React from 'react';
import "../styles/Task.css";

const Task = (props) => {
    const importantStyle = {
        color: "#5e9cff",
    }
    if (props.task.active) {
        return (
            <div className="task">
                <p>
                    <strong style={props.task.important ? importantStyle : null}>{props.task.text}</strong> - to <span>{props.task.date}</span>
                </p>
                <button className="done" onClick={() => props.change(props.task.id)}>Done</button>
                <button className="deleteTask" onClick={() => props.delete(props.task.id)}>X</button>
            </div>
        );
    }
    else {
        const finish = new Date(props.task.finishDate).toLocaleString();
        return (
            <div>
                <p>
                    <strong>{props.task.text}</strong><em> to  </em>{props.task.date} - done in <span>{finish}</span>
                    <button className="deleteTask" onClick={() => props.delete(props.task.id)}>X</button>
                </p>
            </div>
        )
    }
}

export default Task;