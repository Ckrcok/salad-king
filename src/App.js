import "./App.css";
import React, { Component } from "react";

class App extends React.Component {
  state = {
    spiceLevel: 0,
    status: "Let's start"
  };

  handleClickPlus = () => {
    let statusMassage = "";

    if (this.state.spiceLevel == -1) {
      statusMassage = "Let's start";
      this.setState({ status: statusMassage });
    }
    if (this.state.spiceLevel >= 2) {
      statusMassage = "Getting hot eh?";
      this.setState({ status: statusMassage });
    }
    if (this.state.spiceLevel >= 5) {
      statusMassage = "Are you Okay there BUD??";
      this.setState({ status: statusMassage });
    }
    if (this.state.spiceLevel >= 9) {
      statusMassage = "Holy Moly you are A legened";
      this.setState({ status: statusMassage });
    }
    this.setState({ spiceLevel: this.state.spiceLevel + 1 });
    console.log("Plus");
  };

  handleClickMinus = () => {
    let statusMassage = "";

    if (this.state.spiceLevel >= 2) {
      statusMassage = " that's better isn't?";
      this.setState({ status: statusMassage });
    }
    if (this.state.spiceLevel >= 5) {
      statusMassage = "Maybe drink the jug of milk";
      this.setState({ status: statusMassage });
    }
    if (this.state.spiceLevel >= 9) {
      statusMassage = " Hahaha you got too brave";
      this.setState({ status: statusMassage });
    }
    if (this.state.spiceLevel <= 0) {
      statusMassage = " Wrong way buddy its gonna be too sweet";
      this.setState({ status: statusMassage });
    }

    this.setState({ spiceLevel: this.state.spiceLevel - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Salad King Pepper Chart SPA</h1>
        <button
          onClick={() => {
            this.handleClickPlus();
          }}
        >
          Add Some Heat
        </button>
        <button
          onClick={() => {
            this.handleClickMinus();
          }}
        >
          Cool It Off
        </button>
        <h2>
          Spice Level: {this.state.spiceLevel} <br />
          Status:{this.state.status}
        </h2>
      </div>
    );
  }
}

export default App;
