import React, { Component } from 'react';
import Character from './components/Character';
import CharacterJobs from './components/CharacterJobs';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="XIVMagick" />
        <Character name="Mozzey Magick" server="Leviathan" />
        <CharacterJobs />
        <Character name="Marley Magick" server="Jenova" />
        <CharacterJobs />
      </div>
    );
  }
}

export default App;
