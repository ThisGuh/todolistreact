import React from 'react';
import "../styles/AddTask.css";

class AddTask extends React.Component {
    state = {
        text: "",
        checked: false,
        date: new Date().toISOString().slice(0, 10),
    }
    handleText = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    handleDate = (event) => {
        this.setState({
            date: event.target.value
        })
    }
    handleCheckbox = () => {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleClick = () => {

        if (this.state.text.length > 2) {
            const add = this.props.add(this.state.text, this.state.date, this.state.checked);
            if (add) {
                this.setState({
                    text: "",
                    checked: false,
                    date: new Date().toISOString().slice(0, 10),
                })
            }
        } else {
            alert("to short task name!");
        }

    }
    render() {
        return (
            <div className="addForm">
                <input type="text" placeholder="add task" value={this.state.text} onChange={this.handleText} />
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox} />
                <label htmlFor="important">Priority</label>
                <label htmlFor="date">Final date</label>
                <input type="date" value={this.state.date} min={this.state.date} onChange={this.handleDate} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddTask;