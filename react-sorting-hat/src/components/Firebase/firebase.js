import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


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
          this.db = app.database();

          this.googleProvider = new app.auth.GoogleAuthProvider();
      }

      doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password); 
  
      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

      doSignInWithGoogle = () =>{
          this.auth.signInWithPopup(this.googleProvider);
      }
  
      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password => 
        this.auth.currentUser.updatePassword(password);

        // --- User API ---

        user = uid => this.db.ref(`users/${uid}`);

        users = () => this.db.ref(`users`);

        // --- messages API ---
         message = uid => this.db.ref(`messages/${uid}`)
         messages = () => this.db.ref(`messages`)


         messageOne = () => this.db.ref(`message`);

         data = () => this.db.ref(`userData`);

    }

  export default Firebase;