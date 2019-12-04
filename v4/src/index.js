import React, { Component, useState } from 'react'
import ReactDom from 'react-dom'

// var Aa = (props) => {
//   const [number, setNumber] = useState(0)
//   return (
//     <h1 key="header1" name="我">
//       <span onClick={() => {setNumber(1 + number)}}>哈哈！ {{number}}</span>
//       我是header.{props.kk}
//     </h1>
//   )
// }

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Test/>
    </div>
  );
}

class Parent extends Component {
    constructor(p){
        super(p)
        this.state = {
            count: 1
        }
    }

    render() {
        let count = this.state.count
        return (
            <div>
                <p>You22222 clicked {count} times</p>
                <button onClick={() => this.setState({count: count + 1})}>
                    Click me
                </button>
                <Test/>
            </div>
        );
    }
}

class Test extends Component {
    componentDidMount() {
        console.log('子 mount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('子 update')
    }

    render () {
        return (
            <div>
                123
            </div>
        )
    }
}

ReactDom.render(<Parent/>, document.getElementById('dom'))
