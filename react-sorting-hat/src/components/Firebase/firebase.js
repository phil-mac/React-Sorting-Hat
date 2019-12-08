import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSgCOK7uu5PNWErMw6lpbLGJbIo8tJzhU",
    authDomain: "sorting-hat-8.firebaseapp.com",
    databaseURL: "https://sorting-hat-8.firebaseio.com",
    projectId: "sorting-hat-8",
    storageBucket: "sorting-hat-8.appspot.com",
    messagingSenderId: "946116216681",
    appId: "1:946116216681:web:aef021cfef7582ded2dff8",
    measurementId: "G-5JGENWBT7Y"
  };

  class Firebase {
      constructor() {
          app.initializeApp(config);

          this.auth = app.auth();
      }

      doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password); 
  
      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
  
      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password => 
        this.auth.currentUser.updatePassword(password);
    }

  export default Firebase;