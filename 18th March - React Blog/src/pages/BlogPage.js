import React, { useState } from "react";
import Footer from "./../components/Footer";
import Navbar from "../components/Navbar";
import "./BlogPage.css";
import AllPosts from "../components/AllPosts";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser,
      lastLoggedIn: "",
      likes: 0,
    };
  }

  componentDidMount() {
    console.log("Component Mounted.");
  }

  likePost = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  unlikePost = () => {
    this.setState({ likes: this.state.likes - 1 });
  };

  render() {
    return (
      <>
        <Navbar />
        <h1>Welcome back {this.state.username}! This is the blog page</h1>
        {this.state.likes == 0 ? (
          <button className="notLiked" onClick={this.likePost}>
            Like {this.state.likes}
          </button>
        ) : (
          <button className="liked" onClick={this.unlikePost}>
            Liked {this.state.likes}
          </button>
        )}
        <AllPosts />
        <Footer />
      </>
    );
  }
}

export default BlogPage;
