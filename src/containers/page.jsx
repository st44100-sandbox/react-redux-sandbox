import React from 'react';

import Block from '../components/block.jsx';

export default class Page extends React.Component {
  render() {
    return(
      <div>
        <h1>Page: #{this.props.params.pageId}</h1>
        <Block val={+this.props.params.pageId + 10} />
      </div>
    );
  }
}
