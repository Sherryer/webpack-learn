import * as React from 'react'
import { render } from 'react-dom'
import {Component} from "react";
import style from './style.css'

console.log(333, style)


class Layout extends React.Component {
    render () {
        return (
            <div>
                <div className={style.title}>title</div>
                <div className={style.content}>
                    <div className={style.leftParg}>11</div>
                    <div id='dom'>22</div>
                </div>
            </div>
        )
    }
}

render(<Layout/>, document.getElementById('layout'))
