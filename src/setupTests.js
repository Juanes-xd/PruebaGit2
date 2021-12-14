//Aqui esta todo para repasar.

/* Creando otro componente*/
/* function Helloworld(props){
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
  )
} */

/*Creando componente en forma de clase
class Helloworld extends React.Component{

    state = {
      show: true
    }
  
    toggleShow = () => {
  
      this.setState({show: !this.state.show}) //Con el ! le decimso que si esta en true cambie a flase y viceversa.
    }
  
    render(){
  
      if (this.state.show) {
        return ( 
          /*Para usar props en react hay que implementar this
          <div id="hello">
          <h3>{this.props.subtitle}</h3> 
          {this.props.mytext}
          <button onClick={ () => this.toggleShow() }>Toggle show</button>
          </div>
      
          )
      }
      else{
        return(
          <h1>No hay elementos
            <button onClick={ () => this.toggleShow() }>Toggle show</button>
          </h1>
          
        )
      }
      
    }
  }
  
  
  
  function App() {
    return (
      /*De esta manera puedo llamar otro componente cuantas veces quiera
      <div> This is my component: <Helloworld mytext="hello juanes" subtitle="el mejor"/> 
      <Helloworld mytext="hello willy"/> 
      <Helloworld mytext="hello cami"/> 
      </div>  
    );
  }
  
*/