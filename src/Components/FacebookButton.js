import React,{Component} from 'react'
import styled from 'styled-components'


const Container = styled.button`
  width: auto;
  background-color: #3b5998;
  color: #f7f7f7;
  font-size: 1em;
  padding: 20px 20px 20px 20px;
`

export default class FacebookButton extends Component
{

  render ()
  {
    return <Container onClick={this.props.login}><i className="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</Container>
  }
}
