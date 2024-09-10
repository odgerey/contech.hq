// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h2>{post.title.rendered}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const fetchSoftware = async () => {
    const response = await fetch('http://localhost:8888/wordpress/wp-json/wp/v2/software', {
      headers: {
        Authorization: `Bearer YOUR_JWT_TOKEN`,
      },
    });
    const data = await response.json();
    setSoftwareList(data);
  };

export default Home;
