import firebase from 'firebase'

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDtB_8ZQ2xAkJSu96vc8zfnKOYdeEDODLk",
  authDomain: "wordcooccurrenceexample.firebaseapp.com",
  databaseURL: "https://wordcooccurrenceexample.firebaseio.com",
  projectId: "wordcooccurrenceexample",
  storageBucket: "wordcooccurrenceexample.appspot.com",
  messagingSenderId: "669259821747"
};
var fire = firebase.initializeApp(config);
export default fire;
