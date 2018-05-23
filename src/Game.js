import React, { Component } from 'react';
import logo from './logo.svg';
import bomb from './bomb.svg';
import './game.css';
import { calcBoard, checkAdjacentSquares } from './functions.js';

class Game extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Minesweeper</h1>
        </header>
        <Board />
      </div>
    );
  }
}

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: null,
      boardClicked: null,
      boardSize: null,
      difficulty: null,
      showSizeDialog: true,
      showDiffDialog: false,
      message: 'Click any square',
      playAgain: false
    };
    this.clickSize = this.clickSize.bind(this);
    this.clickDifficulty = this.clickDifficulty.bind(this);
    this.clickSquare = this.clickSquare.bind(this);
  }

  reset() {
    let newState = Object.assign({}, this.state);
    newState = {
      board: null,
      boardClicked: null,
      boardSize: null,
      difficulty: null,
      showSizeDialog: true,
      showDiffDialog: false,
      message: 'Click any square',
      playAgain: false
    };
    this.setState((state) => {
      return newState;
    });
  }

  clickSize(size) {
    let board = [];
    let boardClick = [];
    for (let i = 0; i < Math.pow(size, 2); i++) {
      board.push('nobomb');
      boardClick.push(false);
    }
    let newState = Object.assign({}, this.state);
    newState.board = board;
    newState.boardClicked = boardClick;
    newState.boardSize = size;
    newState.showSizeDialog = false;
    newState.showDiffDialog = true;
    this.setState((state) => {
      return newState;
    });
  }

  clickDifficulty(diff) {
    let diffFactor = (diff === 'hard') ? .4 : .25;
    if (diff === 'easy') {
      diffFactor = .1;
    }
    let newState = Object.assign({}, this.state);
    // assign random true values based on difficulty factor
    for (let i = 0; i < (Math.pow(this.state.boardSize, 2) * diffFactor); i++) {
      newState.board[Math.floor(Math.random() * this.state.board.length)] = 'bomb';
    }
    // determine number of adjacent bombs
    let tmpBoard = calcBoard(newState.board, this.state.boardSize);
    newState.board = tmpBoard;
    newState.showDiffDialog = false;
    newState.difficulty = diff;
    this.setState((state) => {
      return newState;
    });
  }

  clickSquare(id) {
    if (!this.state.playAgain) {
      let newState = Object.assign({}, this.state);
      let checkedBoard = checkAdjacentSquares(id, this.state.board, this.state.boardClicked, this.state.boardSize);
      newState.boardClicked = checkedBoard;
      if (checkedBoard.every((val, i, arr) => val === arr[0] )) {
        newState.message = 'BOOM!!!';
        newState.playAgain = true;
      }
      let bombs = [];
      this.state.board.forEach(function(item, index, arr) {
        if (item === 'bomb') {
          bombs.push(index);
        }
      });
      function checkBoard(value) {
        return value === false;
      }
      let numClicked = checkedBoard.filter(checkBoard);
      if (numClicked.length === bombs.length) {
        newState.message = 'You won!!!';
        newState.playAgain = true;
      } 
      this.setState((state) => {
        return newState;
      });
    }
  }

  render() {
    if (this.state.showSizeDialog === true) {
      return (
        <div className='dialog-size'>
          <h3>Select the size board you would like</h3>
          <div className="button-wrapper">
            <button onClick={() => this.clickSize(6)}>6x6</button>
            <button onClick={() => this.clickSize(8)}>8x8</button>
            <button onClick={() => this.clickSize(10)}>10x10</button>
            <button onClick={() => this.clickSize(12)}>12x12</button>
          </div>
        </div>
      );
    }
    else if (this.state.showDiffDialog === true) {
      return (
        <div className='dialog-diff'>
          <h3>Select difficulty level</h3>
          <div className="button-wrapper">
            <button onClick={() => this.clickDifficulty('easy')}>Easy</button>
            <button onClick={() => this.clickDifficulty('medium')}>Medium</button>
            <button onClick={() => this.clickDifficulty('hard')}>Hard</button>
          </div>
        </div>
      );
    }
    else {
      let squares = [];
      let numSquares = Math.pow(this.state.boardSize, 2);
      for (let i = 0; i < numSquares; i++) {
        squares.push(<Square board={this.state.board} grid={this.state.boardSize} bomb={this.state.board[i]} 
          clicked={this.state.boardClicked[i]} key={i} id={i} handleClick={this.clickSquare}/>);
      }
      let playAgain = (this.state.playAgain) ? <button className="play-again" onClick={() => this.reset()}>Play again?</button> : '';
      return (
        <div>
          <div id="message">
            <h3>{this.state.message}</h3>
            {playAgain}
          </div>
          <div className="game-board">
            <div className="game-data">
              <div>Size: {this.state.boardSize}x{this.state.boardSize}</div>
              <img src={logo} className="App-logo" alt="logo" />
              <div>Difficulty:<br /> {this.state.difficulty}</div>
            </div>
            <div className="game-play">
              {squares}
            </div>
          </div>
        </div>
      );
    }
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.id);
  }
  
  render () {
    let grid = 100 / this.props.grid;
    let styles = {
      flex: '0 0 ' + grid + '%',
      height: grid * 5 + 'px',
      backgroundImage: (this.props.bomb === 'bomb' && this.props.clicked) ? `url(${bomb})` : 'none',
      opacity: (this.props.clicked) ? 1 : .5
    };
    let pStyles = {
      display: (this.props.clicked) ? 'block' : 'none'
    }
    return (
      <div className="square" style={styles} onClick={() => this.handleClick()}>
        <p style={pStyles}>{(this.props.bomb !== 'bomb') ? this.props.bomb : ''}</p>
      </div>
    );
  }
}

class Board extends React.Component {
  render() {
    return (
      <div>
        <Setup board={this.props.board} />
      </div>
    );
  }
}

export default Game;
