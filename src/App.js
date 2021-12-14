//import logo from './logo.svg';
import React from 'react';
import './App.css';
import task from './samples/task.json';
import Tasks  from './components/Tasks';

class App extends React.Component{

  state={
    task:task
  }

  render(){
    return <div>

      <Tasks task={this.state.task}/>
    </div>
  }

}

export default App;
