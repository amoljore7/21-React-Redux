import React from 'react';
import {connect} from 'react-redux'
class App extends React.Component {
  render() {
    return (
      <div>Am App Component</div>
    );
  }
}

export default connect()(App);
