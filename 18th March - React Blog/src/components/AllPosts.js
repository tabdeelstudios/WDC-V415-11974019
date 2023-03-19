import axios from "axios";
import { useEffect, useState } from "react";
import "./AllPosts.css";

function AllPosts() {
  const [allPosts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/d239a64cc7684eeda0ced4d4bf06c642/posts")
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  return (
    <div id="blogs">
      {allPosts.map((post) => (
        <div className="blog">
          <p>{post.title}</p>
          <p>{post.author}</p>
          <p>{post.datetime}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default AllPosts;
