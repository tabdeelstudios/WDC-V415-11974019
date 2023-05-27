import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const CourseCard = (props) => {
  return (
    <>
      <Link to={`/course/${props.id}`}>
        <Card>
          <Card.Img variant="top" src={props.courseImg} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>Rs. {props.price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};
export default CourseCard;
