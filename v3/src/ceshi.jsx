import React, { Component } from 'react';
import reactDOM from 'react-dom'
import aa from './css/test.css'
import lickking from './image/background.jpg'
import {cons1} from './aaatestModule'

class Test extends Component {
    render (){
        cons1()
        return(
            <div className={aa.transform}>
                <img src={lickking} alt=""/>
                <ul>
                    <li className={aa.color} key='1'>221</li>
                    <li key='3'>3</li>
                    <li key='4'>4</li>
                </ul>
            </div>
        )
    }
}


// usage
reactDOM.render(
    <Test/>,
    document.querySelector("#div")
);