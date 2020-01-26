import React, { Component } from 'react';
import ShowName from './Component/ShowName/showName.jsx';
import Flight from './Component/Filght/flight';

import { connect } from 'react-redux';


class App extends Component {

  render() {
    return (
      <div>
        <ShowName />
        <Flight />
      </div>
    );
  }

}

const mapStatetoProps = (state) => {
  return {
    storeState: state,
  }
}


export default connect(mapStatetoProps, dispatch => ({ dispatch }))(App);
