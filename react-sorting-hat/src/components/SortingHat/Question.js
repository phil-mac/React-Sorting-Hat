import React from 'react';

export default class Question extends React.Component{
    state = {
        answer: 'none'
    }

    setAnswer = e => {
        this.setState({
            answer: e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.submitQuestion(this.state.answer);
    }
    
    render(){
        return(
            <div className="App-intro">
                <form onSubmit={this.handleSubmit}>
                    <h3>{this.props.activeQuestion.question}</h3>
                    {this.props.activeQuestion.options.map(item =>
                        <div key={item}>
                            <input type='radio' name='question' value={item} onClick={this.setAnswer}/> {item}
                        </div> 
                    )}
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

 