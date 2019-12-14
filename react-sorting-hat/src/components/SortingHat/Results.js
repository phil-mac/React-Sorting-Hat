import React from 'react';

export default (props) => {
    return( 
        <div>
            <p className="App-header">
                Result: {props.houseResult}
            </p>
            <button onClick={props.reset}>Again!</button>
        </div>

    )
}