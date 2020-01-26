import React, { Component } from 'react';
import ShowNameAction from './showNameAction';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class ShowName extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>It is Show Name Component</h1>
                <h2>My Name is : {this.props.name}</h2>
                <button onClick={() => this.props.changeName("Shubham")}>Change Name</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        name: state.name
    };
}
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        changeName: ShowNameAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowName);