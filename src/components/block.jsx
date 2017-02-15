import React from 'react';

export default class Block extends React.Component {
  componentWillMount() {
    debugger
  }

  componentWillUnmount() {
    debugger
  }

  componentWillUpdate() {
    debugger
  }

  render() {
    return (

      <section>
        <h2> Block </h2>
        <div>Value: {this.props.val} </div>
      </section>
    );
  }
}
