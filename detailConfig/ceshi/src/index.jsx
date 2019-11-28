import * as React from 'react'
import { render } from 'react-dom'
import {Component} from "react";
import './style.css'

var content = {
    display: 'flex',
    height: '100%'
}

var left = {
    height: '100%'
}

class Layout extends React.Component {
    render () {
        return (
            <div>
                <h1>title</h1>
                <div style={content}>
                    <div style={left}>11</div>
                    <div id='dom'>22</div>
                </div>
            </div>
        )
    }
}

render(<Layout/>, document.getElementById('layout'))
