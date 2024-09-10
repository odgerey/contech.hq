import logo from './logo.svg';
import './App.css';

// src/App.js
import React, { useEffect, useState } from 'react';
import { getPosts } from './services/api';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>ContechHQ</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// src/App.js



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;


