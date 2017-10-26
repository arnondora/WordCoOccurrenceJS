import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import firebase from 'firebase'

const Container = styled.div``
const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const GraphContainer = styled.div`
    margin-top:50px;
`

const ProfilePicture = styled.img`
  width:100px;
  height: 100px;
`
const ProfileName = styled.p`
  margin-left: 10px;
  font-size: 1.2em;
`

export default class DoGraph extends Component
{
  constructor (props)
  {
    super(props)
    this.state = {
      accessToken: null,
      user: null,
    }
  }

  componentDidMount ()
  {
fetch('https://graph.facebook.com/v2.1/me?fields=name,picture.width(300).height(300),posts&access_token=' + this.props.location.state.accessToken)
  .then((response) => response.json())
  .then((json) => {
    // Some user object has been set up somewhere, build that user here
    console.log(json)
    this.setState({
      accessToken: this.props.location.state.accessToken,
      user: json,
    })
  })
  .catch(() => {
    console.log('ERROR GETTING DATA FROM FACEBOOK')
  })
  }

  render()
  {
    if (this.state.user == null)
      return <Container><h2>Loading User Hold on...</h2></Container>

    var graphElement = <GraphContainer><h2>Generating Graph...</h2></GraphContainer>
    if (this.state.graphData != null) {
      // TODO Build Graph Here!
    }

    return <Container>
      <h1>Generated Graph</h1>
      <ProfileContainer>
        <ProfilePicture src = {this.state.user.picture.data.url}/>
        <ProfileName>{this.state.user.name}</ProfileName>
      </ProfileContainer>

      {graphElement}
    </Container>

  }
}
