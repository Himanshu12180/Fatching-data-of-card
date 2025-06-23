import './App.css'
import React, { useEffect, useState } from "react";
import Card from "./Compointents/Card";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div className="container">
  
        <h1 className="text-4xl">More Aboute of over places</h1>
        <div className="card-container">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.body}
              image={`https://picsum.photos/300/200?random=${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
