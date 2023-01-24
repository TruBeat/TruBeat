import React, { Component } from "react";
import "./music.css";
import song from "../audio/1.mp3";

class App extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false,
  };
    
  playPause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div>
        <h1 className="app-name"> TruBeat </h1>
        <button className="Button" onClick={this.playPause} id="play-icon">
          Play | Pause
        </button>
        
        <p className="Status">
          { this.state.isPlaying ? "Playing..." : "Paused" }
        </p>
      </div>
    );
  }
}

export default App;