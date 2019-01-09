import React, {Component} from 'react'
import reactDom from 'react-dom'
import css from './style.css'
import {con1} from './testModule/twoFunction'
import styles from './style.css'
import Vconsole from 'vconsole'
import Child1 from'./components/child1.jsx'

// 结论：
// 爹WillMount
// 爹render
// 子WillMount
// 子render
// 子DidMount
// 爹DidMount

new Vconsole()


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      a: 0
    }
    this.toggle = this.toggle.bind(this)
  }
  componentWillMount(){
    console.log('爹WillMount')
  }
  componentDidMount () {
    console.log('爹DidMount')
    console.log(this.refs.ha2)
    console.log(reactDom.findDOMNode(this.refs.ha2))
  }
  shouldComponentUpdate () {
    return true
  }
  componentDidUpdate () {
    console.log('父级')
  }
  toggle () {
    this.setState(({a})=>({
      a: a+1
    }))
    this.setState(({a})=>({
      a: a+1
    }))
    this.setState(({a})=>({
      a: a+1
    }))
  }
  render() {
    return (
      <div>
        <div onClick={this.toggle}>哈哈哈{this.state.a}</div>
        <div>哈哈哈2</div>
        <Child1 ref='ha2' sonprops={this.state.a}></Child1>
      </div>
    );
  }
}

reactDom.render( <App zz='1'/>, document.getElementById('dom'))