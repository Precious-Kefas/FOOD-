import { Component } from "react";

//this is a class component
// in CC prps are acessed with ths keyword so we use this
class Welcome extends Component{
    render() {
        return <h2>this is {this.props.name }</h2>
    }
}

export default Welcome