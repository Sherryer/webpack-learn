import React, {Component} from 'react';

export default class Test1 extends Component{
    constructor () {
        super()
        this.state = {a: 1}
    }
    componentWillMount(){
        console.log('子WillMount')
    }
    componentDidMount () {
        console.log('子DidMount')
    }
    componentDidUpdate () {
        console.log('子DidUpdate')
    }
    // shouldComponentUpdate () {
    //     return false
    // }
    click () {
        this.setState({a: ++this.state.a})
    }
    render () {
      console.log('子render')
        return (
          <div>
            <div onClick={this.click.bind(this)}>test{this.state.a}</div>
            <div >props:{this.props.sonprops}</div>
          </div>
        )
    }
}