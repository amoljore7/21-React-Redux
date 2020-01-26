
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import flightAction from './flightAction'



class Filght extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }
      render() {
        const { flightData } = this.props.flightData;
        return (
            <div>
                <h1>Hero Flight</h1>
            </div>

        );

    }
}

function mapStateToProps(state) {
    return {
        flightData: state.filght_Get_Data
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        heroBannerDataInReduxStore: flightAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filght);





