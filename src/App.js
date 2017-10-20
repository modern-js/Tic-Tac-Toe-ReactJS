import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      SYMBOL_PLAYER_ONE: "O",
      SYMBOL_PLAYER_TWO: "X",
      currentTurn: "O",
      board:[
        "", "", "",
        "", "", "",
        "", "", ""
      ],
      winner:null
    }
  }
  handleClick(index){
    if(this.state.board[index] === "" && !this.state.winner){
      this.state.board[index] = this.state.currentTurn
      this.setState({
        playingBoard: this.state.board,
        winner: this.checkForWinner(),
        currentTurn: this.state.currentTurn === this.state.SYMBOL_PLAYER_ONE ? this.state.SYMBOL_PLAYER_TWO : this.state.SYMBOL_PLAYER_ONE
      })
    }
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winningCombos.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return currentTurn
      } else {
        return false
      }
    })
  }

  render() {
    return (
      <div className="app-container">
        {this.state.winner ? <h1>{`The winner is ${this.state.winner}`}</h1> : null}
        <div className="board">
          {this.state.board.map((cell, index) => {
            return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>
          })}
        </div>
      </div>
    )
  }
}

export default App;
