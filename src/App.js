//import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";

//import About from "./pages/About";

// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import React, { Component } from "react";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Col from "./components/Col";
import Card from "./components/Card";
import characters from "./characters.json";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  state = {
    // image: "",
    // match: false,
    // matchCount: 0
    score: 0,
    topScore: 0,
    characters,
    message : "",
    clickedChars: []
  };

  // componentDidMount() {
  //   this.loadImages();
  // }

  handleIncrement = () => {

    // We always use the setState method to update a component's state
  //  this.setState({ score: this.state.score + 1 });

      const newScore = this.state.score + 1;
      this.setState({
        score: newScore,
        message: "Correct!"
      });
      if (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
      }
      else if (this.state.score === 12) {
        this.setState({ message: "You win!" });
        this.handleReset();
      }
      this.doShuffle();
  };

  handleClick = id => {
    if (this.state.clickedChars.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clickedChars: this.state.clickedChars.concat(id) });
    } else {
      this.setState({ message: "You lost. Play again." });
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clickedChars: []
      //message : ""
    });
    this.doShuffle();
  };

  doShuffle = () => {
    let shuffledChars = shuffleArray(characters);
    this.setState({ characters: shuffledChars });
  };

render() {
  return (
    <div>
        <Wrapper>
        <div>
      <Navbar>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top  ">

          <span>Clicky Game</span>
          <span>Click an image to begin! {this.state.message}</span>
          <span>Score: {this.state.score} | Top Score: {this.state.topScore}</span>

        </nav>
      </Navbar>
      <Hero backgroundImage="/assets/images/background.jpg">
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          {this.state.characters.map(character => (
          <Card
            setCharacter={this.setCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            handleIncrement={this.handleIncrement}
            handleClick={this.handleClick}
          />
        ))}
          </Col>
        </Row>
      </Container>
    </div>
        </Wrapper>
        <Footer />
        </div>
  );
}
}

export default App;
