import React from 'react';
import Greeter from './Greeter.jsx';

class Container extends React.Component {
     getGreetRender (value){
        if (value > 0) {
            return <Greeter data = { 'hello wky' } />
        } else {
            return <Greeter data = { 'wky hello' } />
        }
    }
    
    render(){
    return <div >
        	<button onClick = { this.props.onClick } > 点击 </button> 
        	<p>{this.props.value}</p>
        	{ this.getGreetRender(this.props.value) }
        </div>
    }
}

export default Container;
