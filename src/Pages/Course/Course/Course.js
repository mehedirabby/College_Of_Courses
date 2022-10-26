import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Course = () => {
  const course = useLoaderData();
  return (
    <Card className="card-group col-md-9">
      <Card.Img variant="top" src={course.image_url} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Course;
