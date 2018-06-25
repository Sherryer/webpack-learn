import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ErrorBoundary from './public/ErrorBoundary.jsx';
import lichking from './image/background.jpg'
import css from './style.css';

import Xixi from './testComponent/xixi'

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {a:1, b:()=>("i am b") }
    }

    increment (state, props) {
        return {a: state.a + 1};
    }

    click(){
        this.setState(this.increment);
        this.setState(this.increment);
        this.setState(this.increment);
    }


    render(){
        return(
            <div>
                <div className={css.color}>
                    {this.state.a},7788 {this.state.b()}
                    {<Xixi/>}
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
    , document.getElementById("dom"));



// if(module.hot){
//     module.hot.accept( './testComponent/xixi', function(){
//         console.log("11111 test update")
//     });
// }
