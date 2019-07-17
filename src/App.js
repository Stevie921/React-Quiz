import React from 'react';
import './App.css';
import QnA from "./QnA";

class App extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
     <div>
      <h1>General Knowledge Quiz</h1>
      <Questions/>
     </div>
    )
  }
}

class Questions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      question: QnA["one"],
      correct: QnA["oneCorrect"],
      answers: QnA["oneAnswers"],
      number: 1
     }
    this.handleClick = this.handleClick.bind(this);
    this.replay = this.replay.bind(this);
   }

  replay(){
   window.location.reload();
  }

  handleClick(e){
    let QnA_Container = document.getElementById("QnA_Container");
    let question = document.getElementById("question");
    let total = document.getElementById("total");
    let set = e.target.style;

    this.setState({number: this.state.number += 1});
    setTimeout(() => {
    switch(this.state.number){
      case 1:
      this.setState({question:  QnA["one"], answers: QnA["oneAnswers"], correct: QnA["oneCorrect"]});
      break;
      case 2:
      this.setState({question:  QnA["two"], answers: QnA["twoAnswers"], correct: QnA["twoCorrect"]});
      break;
      case 3: 
      this.setState({question:  QnA["three"], answers: QnA["threeAnswers"], correct: QnA["threeCorrect"]});
      break;
      case 4: 
      this.setState({question:  QnA["four"], answers: QnA["fourAnswers"], correct: QnA["fourCorrect"]});
      break;
      case 5: 
      this.setState({question:  QnA["five"], answers: QnA["fiveAnswers"], correct: QnA["fiveCorrect"]});
      break;
      case 6: 
      this.setState({question:  QnA["six"], answers: QnA["sixAnswers"], correct: QnA["sixCorrect"]});
      break;
      case 7: 
      this.setState({question:  QnA["seven"], answers: QnA["sevenAnswers"], correct: QnA["sevenCorrect"]});
      break;
      case 8: 
      this.setState({question:  QnA["eight"], answers: QnA["eightAnswers"], correct: QnA["eightCorrect"]});
      break;
      case 9: 
      this.setState({question:  QnA["nine"], answers: QnA["nineAnswers"], correct: QnA["nineCorrect"]});
      break;
      case 10: 
      this.setState({question:  QnA["ten"], answers: QnA["tenAnswers"], correct: QnA["tenCorrect"]});
      break;
      default:
      question.style.display = "none";
      total.style.display = "block";
      }
    }, 2000);
     if(e.target.innerText === this.state.correct){ 
      this.setState({ score: this.state.score += 1});
      set.background = "#53A844";
      set.color = "#fff";
     } else {
      set.background = "#EB1A1A";
      set.color = "#fff";
     }
     QnA_Container.classList.add("next");
     setTimeout(() => { set.background = "#fff"; set.color = "black";}, 2000);
     setTimeout(() => { QnA_Container.classList.remove("next");}, 5000);
    }

render(){
   let answers = this.state.answers;
   let score = this.state.score;
   return(
     <div id="quiz">
      <div id="QnA_Container">
       <div id="question"> 
       <h2>{this.state.question}</h2>
       <div id="answers">
        {answers.map(answer => <span onClick={this.handleClick}>{answer}</span>)}
       </div>
       <p>Score: {score}</p>
       </div>
       <div id="total">
        <p>Your final score is:  {this.state.score} out of 10!</p>
        <button id="replay" onClick={this.replay}>Replay</button>
       </div>
      </div>
     </div>
    )
  }
}

export default App;


