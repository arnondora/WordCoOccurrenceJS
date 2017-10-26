import React, { Component } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './Page/Home'
import DoGraph from './Page/DoGraph'
import NotFoundPage from './Page/NotFoundPage'

//Init Firebase
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyDtB_8ZQ2xAkJSu96vc8zfnKOYdeEDODLk",
  authDomain: "wordcooccurrenceexample.firebaseapp.com",
  databaseURL: "https://wordcooccurrenceexample.firebaseio.com",
  projectId: "wordcooccurrenceexample",
  storageBucket: "wordcooccurrenceexample.appspot.com",
  messagingSenderId: "669259821747"
};
firebase.initializeApp(config);

const Container = styled.div `
  margin: auto;
  margin-top: 40px;
  width:90%;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/makegraph" component = {DoGraph}/>

            {/* 404 Page */}
            <Route component={NotFoundPage}/>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
