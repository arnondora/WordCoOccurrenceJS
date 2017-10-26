import React, {Component} from 'react'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import firebase from 'firebase'


import Logo from '../Logo.png'
import FacebookButton from '../Components/FacebookButton'

const Container = styled.div`

`

const LogoImg = styled.img `
  display: block;
  margin: 0 auto;
  margin-top:10px;
  margin-bottom: 10px;
`

const Small = styled.p`
  color: #616161;
  font-size: 0.8em;
`

export default class Home extends Component
{
  constructor (props)
  {
    super(props)
    this.state = {
      accessToken : null
    };

    this.handleLogin = this.handleLogin.bind(this)
  }

  render()
  {
    if (this.state.accessToken != null)
      return <Redirect to={{
        pathname: "/makegraph",
        state: {accessToken: this.state.accessToken}
      }}/>

    return <Container>
      <h1>Thai Word Co-Occurrence Visualiser</h1>
      <LogoImg alt = "logo" src = {Logo}/>
      <p>
        This example takes posts from your Facebook account and creates the word co-occurrence graph
      </p>
      <Small>PS. This webpage doesn't store any information</Small>

      <h2>To getting Started, Please Login to your Facebook by using button below.</h2>
      <FacebookButton login={this.handleLogin}/>
    </Container>
  }


  handleLogin()
  {
    var FacebookIns = null;
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    provider.addScope('user_posts');
    firebase.auth().signInWithPopup(provider).then(function(result){
      console.log(result)
      this.setState({accessToken: result.credential.accessToken})
    }.bind(this));
  }

}
