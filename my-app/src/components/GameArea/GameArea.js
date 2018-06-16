import React from "react";
import Card from "../Card/Card";
  import React, { Component } from 'react';
  import Navbar from '../Navbar/Navbar';
  import GameArea from '../GameArea/GameArea';
  import Footer from '../Footer/Footer';
  import cards from '../../cards.json';
  
  const GameArea = props =>
  props.cards.map(item => (
    <Card key={item.id} clickfx={props.clickfx}>
      {item}
    </Card>
  ));

  class Container extends Component {
      state = {
          cards,
          score = 0
      }
      handleclick = id => {
          const thisCard = this.state.cards.find(el => el.id === id);
          const scoreCard = this.setState({thisCard})
          
          increment: function() {
              this.setState({ score: this.state.score++ });
          }
      }
  
      render(){
          return (
              <Navbar score={this.state.score}></Navbar>
              <GameArea cards={this.state.cards} clickFx={this.handleclick}></GameArea>
              <Footer />
          );
      }
  }
  
  // getInitialState: function() {
  //     return {
  //         counter: 0
  //     };
  },
  
  increment: function() {
      this.setState({ counter: this.state.counter++ });
  },
  
  render: function() {
      return <div>
          <div>{this.state.counter}</div>
          <FancyButton text="Increment!" icon="fa-arrow-circle-o-up" onClick={this.increment} />
      </div>;
  }
  }); 
export default GameArea;
