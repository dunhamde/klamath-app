import React, { Component} from "react";
import {hot} from "react-hot-loader";
import styled from "styled-components";

const AppContainer = styled.div`
    margin: 16px;
    font-family: Arial, Helvetica, sans-serif;
`

class App extends Component{
  render(){
    return(
      <AppContainer>
        <h1>Klamath Tribes!</h1>
      </AppContainer>
    );
  }
}

export default hot(module)(App);
