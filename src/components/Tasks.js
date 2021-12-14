import  React, { Component } from "react";
import Task from './Task';
class Tasks extends Component{

    render(){

        return this.props.task.map(task => <Task task={task}/>)

    }

}


export default Tasks;