import React from "react";
import "./MenuButton.scss";

class MenuButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'black',
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  handleClick(){
  this.setState({open:!this.state.open});
  }
  
  render(){
    return(
      <div className="container"
        onClick={this.props.onClick ? this.props.onClick: 
          ()=> {this.handleClick();}}>
        <div className="line top" style={{transform: this.state.open ? 'rotate(45deg)':'none'}} />
        <div className="line middle" style={{opacity: this.state.open ? 0: 1, transform: this.state.open ? 'translateX(-16px)':'none'}} />
        <div className="line bottom" style={{transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none'}}/>
      </div>
    )
  }
}

export default MenuButton