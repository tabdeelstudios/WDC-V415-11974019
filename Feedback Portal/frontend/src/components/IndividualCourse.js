import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./IndividualCourse.css";
import { useSelector } from "react-redux";

const IndividualCourse = () => {
  // const [courseData, setCourseData] = useState("");
  const courseData = useSelector((state) => state);
  const { id } = useParams();

  const individualCourse = courseData.courses.courseData.filter(
    (course) => course._id === id
  );

  const [studentName, setStudentName] = useState("");
  const [courseFeedback, setCourseFeedback] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3001/courseDetails/${id}`)
  //     .then((res) => setCourseData(res.data));
  // }, []);

  return (
    <>
      {individualCourse &&
        individualCourse.map((courseData) => (
          <Container className="mt-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Feedback</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Review Now</Nav.Link>
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
                      <div>
                        {courseData.feedback &&
                          courseData.feedback.map((feedback) => (
                            <p>
                              {feedback.courseFeedback} - {feedback.studentName}
                            </p>
                          ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        <form
                          method="POST"
                          onSubmit={(e) => {
                            e.preventDefault();
                            axios.post(
                              `http://localhost:3001/courseFeedback/${id}`,
                              {
                                studentName,
                                courseFeedback,
                              }
                            );
                            setStudentName("");
                            setCourseFeedback("");
                          }}
                        >
                          <div>
                            <label htmlFor="studentName">Name : </label>
                            <input
                              type="text"
                              value={studentName}
                              id="studentName"
                              onChange={(e) => {
                                setStudentName(e.target.value);
                                console.log(studentName);
                              }}
                            />
                          </div>
                          <br />
                          <div>
                            <label htmlFor="courseFeedback">Feedback : </label>
                            <textarea
                              value={courseFeedback}
                              id="courseFeedback"
                              onChange={(e) => {
                                setCourseFeedback(e.target.value);
                                console.log(courseFeedback);
                              }}
                            ></textarea>
                          </div>
                          <br />
                          <input type="submit" />
                        </form>
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        ))}
    </>
  );
};
export default IndividualCourse;
