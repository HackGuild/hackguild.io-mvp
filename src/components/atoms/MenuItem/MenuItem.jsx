import React from "react";
import "./MenuItem.scss";



class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hover:false,
    }
  }
  
  handleHover(){
    this.setState({hover:!this.state.hover});
  }
  
  render(){
    return(
      <div style={{animationDelay:this.props.delay}} className="container">
        <div 
          style={{animation: '0.5s slideIn forwards', animationDelay:this.props.delay}}
          onMouseEnter={()=>{this.handleHover();}} 
          onMouseLeave={()=>{this.handleHover();}}
          onClick={this.props.onClick}
          className="menuItem"
        >
          {this.props.children}  
        </div>
      <div style={{animationDelay:this.props.delay}} className="line" />
    </div>  
    )
  }
}

export default MenuItem