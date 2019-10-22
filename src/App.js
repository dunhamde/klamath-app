import React, { Component} from "react";
import {hot} from "react-hot-loader";
import styled from "styled-components";
import SiteHeader from "./header/components/header.js";

const AppContainer = styled.div`
    margin: 16px;
    font-family: Arial, Helvetica, sans-serif;
`

class App extends Component{
  render(){
    return(
      <AppContainer>
        <SiteHeader />
      </AppContainer>
    );
  }
}

export default hot(module)(App);
