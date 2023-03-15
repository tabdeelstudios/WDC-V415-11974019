import React, { Component } from "react";
import songs from "./services/songs";
import SongCard from "./components/SongCard";

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            songs:songs,
            output:[]
        }
    }

sortSongsByTitle = ()=>{
    this.setState({songs : this.state.songs.sort((a, b) => b.rating - a.rating)});
}

sortSongsByRating = ()=>{
    this.setState({songs : this.state.songs.sort((a, b) =>a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)});
}

  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <button className="st-btn" onClick={this.sortSongsByTitle}>Sort by Title</button>
        <button className="st-btn" onClick={this.sortSongsByRating}>Sort by Rating</button>
        <div id="song-list">
           {this.state.songs.map((song)=>{
            return <SongCard data={song.title}/>
           })}
        </div>
      </div>
    );
  }
}

export default App;
