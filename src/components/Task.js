import React, {Component} from "react";


class Task extends Component{
    render(){
        return <div>
            {this.props.Task.title} - {this.props.Task.description} - {this.props.Task.id}

        <input type="checkbox"/>

        <button>
            x
        </button> 
        </div> 
    }
}

export default Task;