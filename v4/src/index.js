import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Son from './components/son.jsx'
// import "@babel/polyfill";

var Aa = (props) => (
  <h1 key="header1" name="我"><span>哈哈！</span>我是header.{props.kk}</h1>
)

class Test extends Component {
  render () {
    console.log(Object.values)
    var dom = <Aa kk={'hehe1'}/>
    return <div>{dom}<Son/></div>
  }
}

ReactDom.render(<Test/>, document.getElementById('dom'))