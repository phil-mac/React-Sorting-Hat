import React from 'react';

export default (props) => {
    return( 
        <header className="App-header">
            <h1 className="App-title">Soring Hat</h1>
            <button onClick={props.startQuestions}>Begin</button>
        </header>
    )

    
}