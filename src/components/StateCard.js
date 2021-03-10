import React, {Component} from 'react';

class StateCard extends Component {
  // Constructor (always part of a class component)
  constructor(props) {
    super(props);
    this.state = {
      button1: "On!",
      button2: 0,
      button3: "You",
    };
  }

  // Functions to handle button presses.
  handleButton1 = () => {
    if (this.state.button1 ==="On!") {
        this.setState({button1: "Off..."})
    } else{
        this.setState({button1: "On!"})
    }
  }
  handleButton2 = () => {
this.setState(state=>{
    state.button2 = state.button2 + 1
    return state
})
  }
  handleButton3 = () => {
     if (component.state.button3 === "You") {
      component.setState({button3: "are"})
    } else if (component.state.button3 === "are") {
      component.setState({button3: "Cool!"})
    } else {
      component.setState({button3: "You"})
    }
  }

  // The render function
  render() {
    return(
      <div className="StateCard">
        <h2>Press some buttons!</h2>
        <div className="card-content">
          <div className="item">
            <button onClick={this.handleButton1}>
              Button 1
            </button>
            <p>Current status: {this.state.button1}</p>
          </div>
          <div className="item">
            <button onClick= {this.handleButton2}>
              Button 2
            </button>
            <p>Current count: {this.handleButton2}</p>
          </div>
          <div className="item">
            <button onClick={this.handleButton3}>button 3</button>
            <p>Current word: {this.handleButton3}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StateCard;
