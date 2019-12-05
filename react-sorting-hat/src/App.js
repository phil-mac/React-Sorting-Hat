import React from 'react';
import './App.css';

import Welcome from './components/Welcome';
import Question from './components/Question';
import Results from './components/Results';

import {questionData} from './QuestionData';

import {Sort} from './hooks/Sort'

class App extends React.Component {
  state = {
    questionList: questionData,
    // activeQuestion: questionData[0],
    qIndex: -1,
    houseResult: 'noneYet'
  }

  submitQuestion = newAnswer => {
    console.log('answered with: ' + newAnswer)
    this.setState({
      qIndex: this.incrementQuestion(),
      questionList: this.state.questionList.map((question, index) => {
        if (index === this.state.qIndex){
          return {...question, answer: newAnswer}
        }else{
          return question;
        }
      })
    })
  }

  incrementQuestion = () => {
    // if (this.state.qIndex < this.state.questionList.length - 1){
      return this.state.qIndex + 1;
    // } else{
    //   return this.state.qIndex;
    // }
  }

  componentDidUpdate(prevProps, prevState){
    console.log('cDU');
    console.log(this.state.qIndex)
    console.log(this.state.questionList)
    if(this.state.qIndex === this.state.questionList.length - 1){
      let house = Sort(this.state.questionList);
      console.log('House is!: ' + house);
      if (prevState.houseResult !== house){
        this.setState({
          houseResult: house
        })
      }
    }

  }

  startQuestions = () =>{
    this.setState({
      qIndex: 0
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.qIndex === -1 && <Welcome startQuestions={this.startQuestions}/>}
        {this.state.qIndex >= 0 && this.state.qIndex <= 5 && <Question activeQuestion={this.state.questionList[this.state.qIndex]} submitQuestion={this.submitQuestion}/>}
        {this.state.qIndex === 6 && <Results houseResult={this.state.houseResult}/>}
      </div>
    );
  }
}

export default App;
