import React, { Component, useState } from 'react'
import ReactDom from 'react-dom'

class Test extends Component {
    render () {
        return (
            <div>
                <h2>drag</h2>
            </div>
        )
    }
}

ReactDom.render(<Test/>, document.getElementById('dom'))
