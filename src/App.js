import React, { Component } from 'react';
import './App.css';

import { Provider } from './context';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Provider>
        <React.Fragment>
          <Layout />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
