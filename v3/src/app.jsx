import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ErrorBoundary from './ErrorBoundary.jsx';
import lichking from './image/background.jpg'
import css from './style.css';

class Test extends Component {
    componentDidCatch(error, info){
        console.log("error")
    }

    render(){
        aaa
        return(
            <div>
                <div className={css.color}>
                   1111
                </div>
                <img src={lichking} alt="" style={{"width":"300px"}}/>
            </div>
        )
    }
}

ReactDom.render(
    <ErrorBoundary>
        <Test/>
    </ErrorBoundary>
    , document.getElementById("div"));


