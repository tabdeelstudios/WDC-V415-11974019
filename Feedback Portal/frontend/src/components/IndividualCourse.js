import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./IndividualCourse.css";

const IndividualCourse = () => {
  const [courseData, setCourseData] = useState("");
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/courseDetails/${id}`)
      .then((res) => setCourseData(res.data));
  }, []);

  return (
    <Container className="mt-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Details</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Submissions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Submit Now</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="courseDetails">
                  <img src={courseData.courseImg} />
                  <div>
                    <h2>{courseData.title}</h2>
                    <h2>{courseData.category}</h2>
                    <h2>{courseData.duration}</h2>
                    <h2>{courseData.price}</h2>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>Course submissions go here</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>Course form goes here</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};
export default IndividualCourse;
