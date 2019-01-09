import React, {Component, PureComponent} from 'react'
import reactDom from 'react-dom'

function range (number) {
  return [...Array(number)]
}

import {pure} from 'recompose';

const Item = ({size}) => (
  <div style={{display: 'flex', width: size, height: size}}>
    {range(20000).map(i => <div key={i} />)}
  </div>
);

const PureItem = pure(Item);

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
        {/*<Item size={400} />*/}
        <PureItem size={400} />
      </div>
    );
  }
}


reactDom.render( <App />, document.getElementById('dom'))