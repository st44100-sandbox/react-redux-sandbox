import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <h1>App Container</h1>
        <div>
          {
            Array.from(Array(5).keys()).map((index) => {
              return (
                <Link to={`page/${index}`} >Page {index}</Link>
              );
            })
          }
        </div>
        { this.props.children }
      </div>
    )
  }
}
