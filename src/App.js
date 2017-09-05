import React, { Component } from 'react';
import level from './level';
import levelBar from './levelBar';
import QuestionContainer from './QuestionContainer';
import Player from './Player';


const data = {
  "board": {
    "levelBarContainerHeight": "200px",
    "levelBarUnits": 20,
    "title": "Quiz Game",
    "questionCount": 0,
    "currentQuestion": 0,
    "showAnswer": true,
    "playerTurn": 0,
    "winningCount": 10,
    "winningMessage": "HighScore!",
    "winningPlayer": '',
    "HighScore": ''
  },
  "questions": [
    {"question": "Ready to play? Pick a level."}
  ],
  "players": [
    {"name": "Player 1", "score": 5},
    {"name": "Player 2", "score": 5},
    {"name": "Player 3", "score": 5},
    {"name": "Player 4", "score": 5}
  ]
};

class App extends Component {
  constructor(){
    super();
    this.state = data;
  }
  handleAnswerClick(){
    let board = Object.assign({}, this.state.board);
    board.showAnswer = true;
    this.setState({

    })
  }


  handleScoring(index, delta) {
    let playerArray = this.state.players.slice();
    let board = Object.assign({}, this.state.board);
    let newScore = playerArray[index].score + delta;
    let Win= [];

if(newScore < 0) {newScore = 0;}
if(newScore > this.state.board.winningCount) {newScore = this.state.board.winningCount;}

    playerArray[index].score = newScore;

if(newScore === this.state.board.winningCount){
  //hide buttons
  board.showAnswer = false;
  //display winner
  board.winningPlayer = 'Player ' + (index + 1);
  //collect highscore

}
for (let i = 0; i < this.state.newScore; i +=1) {
      this.state.Win.push({this.generateWin()});
    }
  }
    
  generateWin () {
    return '#' +  Math.random().toString(16).substr(-6);
  }
  
  updateColor (index) {
    let Wins = this.state.Wins.slice();
    const currentWin = this.generateWin();
    Wins[index] = currentWin;
    this.setState({
      Wins : Wins
    });
 }

    this.setState({
      Players: playerArray,
      board: board
    });

  }

  render() {
    const players = this.state.players.map(function(player, i){
      return (
        <Player 
        key={i} 
        stats={this.state.players[i]}
        units={this.state.board.levelBarUnits}
        handlePlusScore={()=>{ this.handleScoring(i, 1); }}
        handleMinusScore={()=>{ this.handleScoring(i, -1); }}
        />
        );
    }, this);

    return (
      <div id="container">
        <h1>Quiz Game</h1>
        <QuestionContainer 
        showAnswer={this.state.board.showAnswer}
        question={this.state.questions[1].question}/>
        <section className="scoring">
          {players}
        </section>
      </div>
    );
  }
}
    return (
      <div className="Win-container">
        { this.state.Wins.map((Win, index) => <Win key={`Win-${index}`} index={index} update={this.updateWin.bind(this)}></Win>) }
      </div>
    )
  }
export default App;
