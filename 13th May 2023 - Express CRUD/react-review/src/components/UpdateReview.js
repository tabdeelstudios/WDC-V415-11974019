import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateReview = () => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewAddedBy, setReviewAddedBy] = useState("");
  const [reviewRating, setRating] = useState("");
  const { updateID } = useParams();
  return (
    <form
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3001/update/${updateID}`, {
          title: reviewTitle,
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
      <input type="submit" value="Update Review" />
    </form>
  );
};

export default UpdateReview;
