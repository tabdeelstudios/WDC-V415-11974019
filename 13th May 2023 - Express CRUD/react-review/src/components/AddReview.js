import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddReview = () => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewAddedBy, setReviewAddedBy] = useState("");
  const [reviewRating, setRating] = useState("");

  return (
    <div>
      <Link to={"/"}>
        <button>All Reviews</button>
      </Link>
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          axios.post("http://localhost:3001/add", {
            id: Math.floor(Math.random() * 1000),
            title: reviewTitle,
            rating: reviewRating,
            addedBy: reviewAddedBy,
          });
        }}
      >
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setReviewTitle(e.target.value)}
          value={reviewTitle}
        />
        <input
          type="text"
          placeholder="Added By"
          onChange={(e) => setReviewAddedBy(e.target.value)}
          value={reviewAddedBy}
        />
        <input
          type="text"
          placeholder="Rating"
          onChange={(e) => setRating(e.target.value)}
          value={reviewRating}
        />
        <input type="submit" value="Add Review" />
      </form>
    </div>
  );
};

export default AddReview;
