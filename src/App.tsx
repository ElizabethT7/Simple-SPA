import React from 'react';
import Header from './components/header/index';
import Main from './components/main';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
