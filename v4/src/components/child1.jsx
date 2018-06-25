import React, {Component} from 'react';

export default class Test1 extends Component{
    componentWillMount(){
        console.log('222WillMount')
    }
    componentDidMount () {
        console.log('222DidMount')
    }
    render () {
        return (
            <div>test</div>
        )
    }
}