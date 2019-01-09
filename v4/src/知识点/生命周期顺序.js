import React, {Component} from 'react'
import reactDom from 'react-dom'

// 结论：
// 首次渲染： getDerivedStateFromProps - render - componentDidMount
// update： getDerivedStateFromProps - shouldComponentUpdate - render - getSnapshotBeforeUpdate - componentDidUpdate

class App2 extends Component {
    constructor(){
        super()
        this.state = {a: 111}
    }

    shouldComponentUpdate () {
        console.log('shouldComponentUpdate')
        return true
    }

    // componentWillUpdate () {
    //     // 可能被调用多次
    //     console.log('componentWillUpdate')
    // }
    //
    // componentWillReceiveProps () {
    //     // 可能被调用多次
    //     console.log('componentWillReceiveProps')
    // }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        console.log(snapshot)
    }

    // componentWillMount () {
    //     console.log('componentWillMount')
    // }

    componentDidMount () {
        console.log('componentDidMount')
    }

    static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps')
    if ( props.name !== state.name ) {
      return {
        name: props.name,
        list: null
      };
    }
    return null;
    }

    getSnapshotBeforeUpdate () {
        console.log('getSnapshotBeforeUpdate')
        let z = this.state.a
        return this.refs.aa
    }

    click () {
        this.setState({a: ++this.state.a})
    }

    render () {
        console.log('render')
        return (
            <div ref='aa' onClick={this.click.bind(this)}>{this.state.a}</div>
        )
    }
}


reactDom.render( <App2/>, document.getElementById('dom'))