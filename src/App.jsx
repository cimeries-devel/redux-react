import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import { Menu } from './components/Menu';

import PageHome from './pages/PageHome';
import PagePosts from './pages/PagePosts';
import PagePost from './pages/PagePost';

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/posts" component={PagePosts} />
        <Route exact path="/posts/:postId" component={PagePost} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;
