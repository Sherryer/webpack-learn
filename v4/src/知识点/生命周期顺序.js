import React, {Component} from 'react'
import reactDom from 'react-dom'


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


    static getDerivedStateFromProps () {
        console.log('getDerivedStateFromProps')
        return null
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