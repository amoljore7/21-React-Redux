
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
    updateData=()=>{
        this.props.change_filght_Get_Data(["amol","Shubham","Rahul"])
    }
      render() {
        return (
            <div>
                <h1>It is Flight Component</h1>
                {this.props.flightData ? <h4>{this.props.flightData}</h4> :<h6>Data Not comming</h6>}
                <button onClick={this.updateData}>Change Array Data</button>
            </div>

        );

    }
}

function mapStateToProps(state) {
    return {
        flightData:state.filght_Get_Data
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        change_filght_Get_Data: flightAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filght);





