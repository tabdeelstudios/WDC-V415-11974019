// npm install react-router-dom axios
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
  const [allReviews, setAllReviews] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/", { crossdomain: true })
      .then((res) => setAllReviews(res.data));
  }, []);

  return (
    <section>
      <Link to={"/add"}>
        <button>Add Review</button>
      </Link>
      {allReviews &&
        allReviews.map((review) => (
          <div id={review.id}>
            <h3>{review.title}</h3>
            <p>{review.addedBy}</p>
            <p>{review.rating}</p>
            <Link to={`/update/${review.id}`}>
              <button>Update</button>
            </Link>
            <Link to={`/delete/${review.id}`}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  axios.delete(`http://localhost:3001/delete/${review.id}`, {});
                  window.location.reload();
                }}
              >
                Delete
              </button>
            </Link>
          </div>
        ))}
    </section>
  );
};

export default AllReviews;
