import React from 'react';
import './App.css';

import Welcome from './components/Welcome';
import Question from './components/Question';
import Results from './components/Results';

import {questionData} from './QuestionData';

class App extends React.Component {
  state = {
    questionList: questionData,
    // activeQuestion: questionData[0],
    activeQuestionIndex: 0,
    houseResult: ''
  }

  submitQuestion = newAnswer => {
    console.log('answered with: ' + newAnswer)
    this.setState({
      activeQuestionIndex: this.incrementQuestion(),
      questionList: this.state.questionList.map((question, index) => {
        if (index === this.state.activeQuestionIndex){
          return {...question, answer: newAnswer}
        }else{
          return question;
        }
      })
    })
  }

  incrementQuestion = () => {
    if (this.state.activeQuestionIndex < this.state.questionList.length - 1){
      return this.state.activeQuestionIndex + 1;
    } else{
      return this.state.activeQuestionIndex;
    }
  }

  componentDidUpdate(){
    console.log('cDU');
    console.log(this.state.activeQuestionIndex)
    console.log(this.state.questionList)
  }

  render() {
    return (
      <div className="App">
        <Welcome />
        <Question activeQuestion={this.state.questionList[this.state.activeQuestionIndex]} submitQuestion={this.submitQuestion}/>
        <Results />
      </div>
    );
  }
}

export default App;
