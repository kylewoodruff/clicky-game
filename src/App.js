import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import character from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    character,
    score: 0,
    highscore: 0,
    clicked: []
  };

  characterClicked = (id) => {
    this.count(id);
    this.sortCharacters();
  }

  sortCharacters = () => {
    // sort this.state.character for character with an a new order
    const character = this.shuffle(this.state.character);
    // Set this.state.friends equal to the new friends array
    this.setState({ character });
  };

  shuffle = array => {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  count = id => {
    let clickedArray = this.state.clicked;

    if (!clickedArray.includes(id)) {
      console.log("value not found!")
      this.state.clicked.push(id);
      this.setState({ clicked: this.state.clicked });
      console.log("array", this.state.clicked);
      this.setState({ score: this.state.score + 1 });
      console.log("Score:", this.state.score);
      if (this.state.score >= this.state.highscore) {
        this.setState({ highscore: this.state.highscore + 1 });
        console.log("HighScore:", this.state.highscore);
      }

    } else {
      console.log("found value");
      this.reset();
    }

  };

  reset = () => {
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ clicked: [], score: 0 });
    console.log("game over");
    console.log(this.state.clicked, this.state.score);
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Jumbotron
          score={this.state.score}
          highscore={this.state.highscore} />
        {this.state.character.map(character => (
          <CharacterCard
            clicked={this.characterClicked}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
