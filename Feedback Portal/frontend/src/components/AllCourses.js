import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CourseCard from "./CourseCard";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";

const AllCourses = () => {
  const [allCourses, setAllCourses] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/courseList").then((res) => {
      setAllCourses(res.data);
    });
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row xs={1} md={3} className="g-4">
          {allCourses &&
            allCourses.map((course) => (
              <Col>
                <CourseCard
                  courseImg={course.courseImg}
                  title={course.title}
                  price={course.price}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default AllCourses;
