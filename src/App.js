import React, { Component } from "react";
import ReactKnob from "./ReactKnob";
import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.setVolume = this.setVolume.bind(this);
    this.state = {
      gainValue: 20
    };
  }
  setVolume(fatId, property, value) {
    console.log("sv coluem", value);
    this.setState({
      gainValue: value
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>React knob</p>
          <ReactKnob
            width={45}
            height={45}
            fatId={1}
            setValue={this.setVolume}
            value={this.state.gainValue}
            defaultValue={20}
            unit={1}
            max={100}
            min={0}
            fatProperty={"gain"}
          />
          <h5>{this.state.gainValue}</h5>
        </header>
      </div>
    );
  }
}

export default styled(App)`
  .App {
    text-align: center;
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;
