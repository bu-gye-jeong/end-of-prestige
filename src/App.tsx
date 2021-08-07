import React from "react";
import "./App.css";

interface GameProps {}

class Game extends React.Component<GameProps> {
  constructor(props: GameProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div id="topBar">Lorem ipsum dolor sit amet, consectetur adipisicing elit </div>
      </div>
    );
  }
}

export default Game;
