import Card from "react-bootstrap/Card";
const CourseCard = (props) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.courseImg} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Rs. {props.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default CourseCard;
