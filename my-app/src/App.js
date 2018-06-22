import React, { Component } from "react";
import Container from "./components/Container";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Row from "./components/Row";
import Column from "./components/Column";
import cards from "./cards.json";
import "./App.css";

// const App = () => <Container />;

class App extends Component {
  // Set this.state
  state = {
    cards,
    Score: 0,
    rightWrong: "",
    clicked: []
  };

  // componentDidMount() {
  //   this.setState({ cards: this.handleShuffle(this.state.cards) });
  // }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.Score + 1;
    this.setState({
      Score: newScore,
      rightWrong: ""
    });

    if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      Score: 0,
      rightWrong: "Zowie!",
      clicked: []
    });
    this.handleShuffle();
  };

  //Shuffles Cards
  shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleShuffle = () => {
    let shuffled = this.shuffleCards(this.state.cards);
    this.setState({ cards: shuffled });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          title="DC Comics Memory Game"
          score={this.state.Score}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Click on a card and gain a point--but, don't click on the same card
          twice or POW!!! ZOWIE!!!
        </Title>

        <Container>
          <Row>
            {this.state.cards.map(item => (
              <Column size="md-3 sm-6">
                <Card
                  key={item.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={item.id}
                  image={item.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
