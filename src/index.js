import React from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './containers/app.jsx';
import NoMatch from './containers/nomatch.jsx';
import Page from './containers/page.jsx';

const rootElement = document.getElementById('root');
console.log('Root Elements', rootElement);
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="page/:pageId" component={Page}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'));
