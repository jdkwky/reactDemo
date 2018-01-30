import React, { Component } from 'react';
import lstyles from '../css/greetl.less';

class Greeter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
        console.log(this.state)
    }
    componentWillMount() {
        const {data} = this.props;
        this.setState({ data: data });
    }
    // componentWillReceiveProps(nextProps){
    // 	const {data} = nextProps;
    // 	this.setState({data:data});
    // }
    render() {
        const { data } = this.state;
        // const {data}  = this.props;
        console.log(data)
        // const name = propsData.data;
        return ( < div className = { `${lstyles.greet}` } > { data } < /div >)
    }
}
export default Greeter;