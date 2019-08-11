import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BlogList from './components/blogList';
import BlogPost from './components/blogPost';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={BlogList}/>
        <Route path="/post/:post_id?" component={BlogPost}/>
      </Router>
      
    </div>
  );
}

export default App;