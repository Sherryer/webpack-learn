import React, {Component, PureComponent} from 'react'
import reactDom from 'react-dom'

function range (number) {
  return [...Array(number)]
}
//=====
// 每次生成新对象
const sizeToStyle = size => ({width: size, height: size});

// 只生成一次，剩下九遍
const SIZE_CACHE = [];
// const sizeToStyle = size => (SIZE_CACHE[size] || (SIZE_CACHE[size] = {width: size, height: size}));
//=====

const Item = ({size}) => (
  <div style={sizeToStyle(size)} />
);

class App extends PureComponent {

  constructor (p) {
    super(p)
    this.state = {
      value: 0
    }
    this.update = this.update.bind(this)
  }

  update () {
    const {value} = this.state;
    this.setState(({value}) => ({value: value + 1}));
    console.time(`update ${value + 1}`);
  };

  componentDidUpdate() {
    const {value} = this.state;
    console.timeEnd(`update ${value}`);
    if (value < 10) {
      this.update();
    }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.update}>Click ME</button>
        {range(20000).map(i => <Item key={i} size={i} />)}
      </div>
    );
  }
}


reactDom.render( <App />, document.getElementById('dom'))