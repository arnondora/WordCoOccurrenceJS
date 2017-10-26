import React, { Component } from 'react'
import styled from 'styled-components'
import fire from './fire.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './Page/Home'
import NotFoundPage from './Page/NotFoundPage'

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

            {/* 404 Page */}
            <Route component={NotFoundPage}/>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
