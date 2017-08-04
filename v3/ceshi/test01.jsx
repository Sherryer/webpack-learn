import React from 'react';
import ReactDOM from "react-dom"

class Test extends React.Component{
    constructor(z){
        super();
        this.state = {
            a:1
        }
    }

    click(){
        console.log(11111,this);
        this.setState({a:++this.state.a})
    }

    render (){
        return (
            <div onClick = {this.click}>{this.state.a}嘻嘻嘻哈哈哈</div>
        )
    }
}


ReactDOM.render(
    <Test></Test>,
    document.getElementById('container')
);