import React from 'react';

import Welcome from './Welcome';
import Question from './Question';
import Results from './Results';

import {questionData} from './QuestionData';

import {Sort} from '../../hooks/Sort'

import {withFirebase} from '../Firebase';
import { initializeApp } from 'firebase';

const initialState = {
  questionList: questionData,
  qIndex: -1,
  houseResult: 'noneYet'
}

class SortingHat extends React.Component {
  state = {
    ...initialState,
  }

  submitQuestion = newAnswer => {
    // console.log('answered with: ' + newAnswer)
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

  saveState = () => {

  }

  incrementQuestion = () => {
      return this.state.qIndex + 1;
  }

  componentDidMount(){
    this.props.firebase.data(this.props.userId).on('value', snapshot => {
      // console.log(snapshot);
      if(snapshot.val()){
        const msg = snapshot.val();
        console.log('cDM: ')
        console.log(msg);
        this.setState({
          ...msg
        })
      }
      
      // setMOne(msg);
  })
  }

  componentWillUnmount(){
    this.props.firebase.data(this.props.userId).off();
  }

  componentDidUpdate(prevProps, prevState){
    console.log('cDU');
    console.log(this.state);
    // console.log(this.state.qIndex)
    // console.log(this.state.questionList)
    if(this.state.qIndex === this.state.questionList.length - 1){
      let house = Sort(this.state.questionList);
      // console.log('House is!: ' + house);
      if (prevState.houseResult !== house){
        this.setState({
          houseResult: house
        })
      }
    }
    this.props.firebase.data(this.props.userId)
      .set(this.state)

    console.log('user ID in soring hat: ' + this.props.userId)
  }

  startQuestions = () =>{
    this.setState({
      qIndex: 0
    })
  }

  reset = () => {
    this.setState({...initialState})
    this.startQuestions();
  }

  render() {
    return (
      <div className="App">
        {this.state.qIndex === -1 && <Welcome startQuestions={this.startQuestions}/>}
        {this.state.qIndex >= 0 && this.state.qIndex <= 5 && <Question activeQuestion={this.state.questionList[this.state.qIndex]} submitQuestion={this.submitQuestion}/>}
        {this.state.qIndex === 6 && <Results houseResult={this.state.houseResult} reset={this.reset}/>}
      </div>
    );
  }
}

export default withFirebase(SortingHat);
