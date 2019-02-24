import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';
import styled, { createGlobalStyle } from 'styled-components';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Router from './components/HOC/Router';

export default class App extends Component {
  state = {
    username: '',
    loggingIn: false
  }

  completeLogin = (username) => {
    this.setState({
      username
    });
  }

  toggleLogin = () => {
    this.setState(state => ({
      loggingIn: !state.loggingIn
    }), () => {
      if (!this.state.loggingIn) {
        this.setState({ username: '' });
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <SimpleStorage parent={this} />
        <GlobalStyle />
        <AppContainer>
          <TopBar username={this.state.username} toggleLogin={this.toggleLogin} />
          <Header />
          <Router {...this.state} completeLogin={this.completeLogin} />
        </AppContainer>
      </React.Fragment>
    );
  }
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 400;
    src: local('PT Sans Italic'), local('PTSans-Italic'), url(https://fonts.gstatic.com/s/ptsans/v9/jizYRExUiTo99u79D0e0x8mN.ttf) format('truetype');
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 700;
    src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'), url(https://fonts.gstatic.com/s/ptsans/v9/jizdRExUiTo99u79D0e8fOydLxUY.ttf) format('truetype');
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0KEwA.ttf) format('truetype');
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    src: local('PT Sans Bold'), local('PTSans-Bold'), url(https://fonts.gstatic.com/s/ptsans/v9/jizfRExUiTo99u79B_mh0O6tKA.ttf) format('truetype');
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;
  }

  #root {
    width: 100%;
  }
`;
