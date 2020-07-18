import React from "react";
import "./Menu.scss";

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
    }
  }
    
  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  render(){
    return(
      <div className="container" style={{height: this.state.open? '100%': 0, transition: 'height 0.3s ease'}}>
        {
          this.state.open?
            <div className="menuList">
              {this.props.children}
            </div>:null
        }
      </div>
    )
  }
}

export default Menu