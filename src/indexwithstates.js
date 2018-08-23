import React, { Component } from 'react';
import Button from './components/Button';
import Display from './components/Display';

class WithStates extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // componentDidMount() {
  //   window.addEventListener('keydown', (e) => {
  //     if (e.keyCode === 38) {
  //       this.handle(+1)();
  //     } else if (e.keyCode === 40) {
  //       this.handle(-1)();
  //     }
  //   });
  // }

  handle(param) {
    return () => {
      const { count } = this.state;
      if (param === 1) {
        this.setState(prevState => ({ count: prevState.count + param }));
      } else if (param === -1 && count > 0) {
        this.setState(prevState => ({ count: prevState.count + param }));
      }
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Button id="up" value="Buy One" callback={this.handle(+1)} />
        <Display count={count} />
        <Button id="down" value="Eat One" callback={this.handle(-1)} />
      </div>
    );
  }
}

export default WithStates;
