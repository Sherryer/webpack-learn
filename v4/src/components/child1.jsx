import React, {Component} from 'react';

export default class Test1 extends Component{
    constructor () {
        super()
        this.state = {a: 1}
    }
    componentWillMount(){
        console.log('222WillMount')
    }
    componentDidMount () {
        console.log('222DidMount')
    }
    componentDidUpdate () {
        console.log('子级')
    }
    // shouldComponentUpdate () {
    //     return false
    // }
    click () {
        this.setState({a: ++this.state.a})
    }
    render () {
        return (
            <div onClick={this.click.bind(this)}>test{this.state.a}</div>
        )
    }
}