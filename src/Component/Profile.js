import React, {Component} from 'react';


export default class Profile extends Component {
    state = {
      Person: { fullName: "Alma Yacoubi", bio:"I'm a student at the prep-school",img:'https://profilepicture7.com/img/img_keai/1/503909187.jpg'
      ,profession:'student' },
       isShow:false
      };
  
       handleChange=()=>{
        this.setState({isShow:!this.state.isShow})
       };
   
    render() {
      return (
          <div>
        <button onClick={this.handleChange}>Enter</button>
       {this.state.isShow ? 
            <div className="text" >
            <h1 style={{color:'pink'}}> {this.state.Person.fullName}</h1>
            <h2> {this.state.Person.bio} </h2>
            <h2> {this.state.Person.profession}</h2>
             <img src={this.state.Person.img} />
            </div> 
     
      : null  }
</div>
      ) 
  
    }
}
    
  