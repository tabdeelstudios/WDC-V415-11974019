import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CourseCard from "./CourseCard";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/courseSlice";

const AllCourses = () => {
  const allCourses = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(allCourses.courses.courseData);

  useEffect(() => {
    axios.get("http://localhost:3001/courseList").then((res) => {
      dispatch(fetchCourses(res.data));
    });
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row xs={1} md={3} className="g-4">
          {allCourses.courses.courseData &&
            allCourses.courses.courseData.map((course) => (
              <Col>
                <CourseCard
                  key={course._id}
                  id={course._id}
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
