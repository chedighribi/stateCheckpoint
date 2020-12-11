import React from "react";
import './App.css';
//import profil from './profil.jpg'

class App extends React.Component {
  state= {
    Person:{
      fullname:'Chedi ghribi',
      bio:'Born in Tunisia',
      //I have an issue with the image .
      //imgsrc: profil,
      imgsrc:'./profile',
      profession:'Student'
    },
    show:false,
    timer:0,
    intervall: null,

  }

   hideone =() => {
   this.setState({show:!this.state.show})
   this.setState({timer:0})
 }

 componentDidMount() {
  this.setState({
    intervall: setInterval(
      () => this.setState({ timer: this.state.timer + 1 }),
      1000
    )
  });
}


render (){
  return (
<div className='App'>
  { (!this.state.show) ? 
   
  <button className='btn' onClick={this.hideone} >
    Show my profile
  </button>
  :
 <div>
  <button className='btn' onClick={this.hideone}>Hide my profile</button >
  <ul>
    <li>{this.state.Person.fullname} </li>
    <li>{this.state.Person.bio} </li>
    <li>{this.state.Person.imgsrc} </li>
    <li>{this.state.Person.profession} </li>
  </ul> 
  <span>{this.state.timer}</span>
  </div>
  }
</div>
)
}
}
export default App;
