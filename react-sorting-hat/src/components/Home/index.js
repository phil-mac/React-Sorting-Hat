import React, {useState, useEffect} from 'react';
import { withAuthorization, AuthUserContext } from '../Session';
import {withFirebase} from '../Firebase';
import SortingHat from '../SortingHat';

const HomePage = (props) => {
    const [mOne, setMOne] = useState('-');
    
    const updateVal = e => {
        // console.log('update called');
        props.firebase.messageOne()
        .set({
            text: e.target.value
        })
    }

    useEffect(() => {
        props.firebase.messageOne().on('value', snapshot => {
            // console.log(snapshot);
            const msg = snapshot.val().text;
            // console.log(msg);
            setMOne(msg);
        })

        // console.log(authUser.uid);

        return () => {
            props.firebase.messageOne().off();
        } 
    }, [])

    return(
        <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Home Page</h1>
                <p>The Home Page is accessible by every signed in user.</p>
                <hr/>
                <p>Message  Field:</p>
                <input onChange={updateVal} value={mOne}/>
                <p>user: {authUser.uid}</p>
                <hr/>
                <SortingHat userId={authUser.uid}/>
            </div>
        )}
        </AuthUserContext.Consumer>

    )
}

const condition = authUser => !!authUser;

export default withFirebase(withAuthorization(condition)(HomePage));