import React from 'react';
// import ReactDOM from 'react-dom';
// import ArrowKeysReact from 'arrow-keys-react';

class States extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);

    // ArrowKeysReact.config({
    //   left: () => {
    //   },
    //   right: () => {
    //   },
    //   up: () => {
    //     const { count } = this.state;
    //     this.setState({ count: count + 1 });
    //   },
    //   down: () => {
    //     const { count } = this.state;
    //     if (count > 0) {
    //       this.setState({ count: count - 1 });
    //     }
    //   },
    // });
  }

  handleIncrement() {
    this.setState(e => ({ count: e.count + 1 }));
  }

  handleDecrement() {
    const { count } = this.state;
    if (count > 0) {
      this.setState(e => ({ count: e.count - 1 }));
    }
  }

  render() {
    const { count } = this.state;
    return (
      // <div {...ArrowKeysReact.events} tabIndex="1">
      <div>
        <h1>Hello, Green Fox Academy!</h1>
        <button id="up" type="button" onClick={this.handleIncrement}>Buy one</button>
        <div>{count}</div>
        <button id="down" type="button" onClick={this.handleDecrement}>Eat one</button>
      </div>
    );
  }
}

// ReactDOM.render(
//   <States />,
//   document.getElementById('root'),
// );

export default States;
