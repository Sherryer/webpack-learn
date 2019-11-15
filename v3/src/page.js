import React, { Component } from 'react';
import reactDOM from 'react-dom'
import aa from './css/test.css'
import lickking from './image/background.jpg'
import {cons1} from './aaatestModule'
import vconsole from 'vconsole'
new vconsole()

class Test extends Component {
  haha () {
    alert(123)
  }
  reload () {
    location.reload()
  }

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
        <div style={{fontSize: '48px'}} onClick={this.haha}>click</div>
        <div style={{fontSize: '48px'}} onClick={this.reload}>reload</div>
      </div>
    )
  }
}


// usage
reactDOM.render(
  <Test/>,
  document.querySelector("#div")
);