import React, {Component} from 'react'
import reactDom from 'react-dom'
import css from './style.css'
import {con1} from './testModule/twoFunction'
import styles from './style.css'
import Vconsole from 'vconsole'
import Child1 from'./components/child1.jsx'

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
        console.log('111WillMount')
    }
    componentDidMount () {
        console.log('111DidMount')
        console.log(this.refs.ha2)
        console.log(reactDom.findDOMNode(this.refs.ha2))
    }
    toggle () {
        // this.setState((z, y)=>{
        //     console.log(z)
        //     console.log(y)
        // })
        // this.setState({a: this.state.a +1 })
        // this.setState({a: this.state.a +1 })
        // this.setState({a: this.state.a +1 })
        // this.setState({a: this.state.a +1 })

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
                <Child1 ref='ha2'></Child1>
            </div>
        );
    }
}


reactDom.render( <App zz='1'/>, document.getElementById('dom'))