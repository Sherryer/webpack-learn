import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ErrorBoundary from './ErrorBoundary.jsx';
import lichking from './image/background.jpg'
import css from './style.css';

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {a:1, b:()=>("i am b") }
    }

    click(){
        console.log(22222);
        this.setState(function (state) {
            return {
                a: 2
            }
        })
    }

    render(){

        return(
            <div>
                <div className={css.color}>
                    {this.state.a},1111 {this.state.b()}
                </div>
                <img src={lichking} onClick={this.click.bind(this)} alt="" style={{"width":"300px"}}/>
            </div>
        )
    }
}




ReactDom.render(
    <ErrorBoundary>
        <Test/>
    </ErrorBoundary>
    , document.getElementById("div"));


