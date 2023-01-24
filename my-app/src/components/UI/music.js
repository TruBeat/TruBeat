import React, { Component } from "react";
import "./music.css";
import song from "../audio/2.mp3";
import { Play, Pause,  SpeakerHigh} from "phosphor-react";

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
        <div className="container">
            <h1>Kala Chasma</h1>
        <button className="Button button1" onClick={this.playPause}>
                { !this.state.isPlaying ? <Play size={32} /> : <Pause size={32} /> }  
        </button>
        
        <p className="Status">
          { this.state.isPlaying ? "Playing..." : "Paused" }
        </p>
        <div class="slidecontainer">        
            <SpeakerHigh size={32} />
            <input type="range" min="1" max="100" >
            </input>
        </div>
      </div>
    );
  }
}

export default App;