import React, { Component } from 'react';




class ClearButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <button  onClick={this.props.handleClear} className="clear-btn">{this.props.children}</button>
            </div>
         );
    }
}
 
export default ClearButton;