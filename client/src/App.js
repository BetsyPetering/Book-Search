import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './pages/Search';
import WishList from './pages/WishList';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Search} />
          <Route path='/wishList' component={WishList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
