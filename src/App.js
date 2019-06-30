import React, { Component } from "react";
import FriendCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import character from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    character,
    score: 0,
    highscore: 0
  };

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

  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Jumbotron />
        {this.state.character.map(friend => (
          <FriendCard
            sortCharacters={this.sortCharacters}
            id={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
