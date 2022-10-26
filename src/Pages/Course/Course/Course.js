import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Course = () => {
  const course = useLoaderData();
  return (
    <Card className="card-group col-md-9">
      <Card.Img variant="top" src={course.image_url} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.details}</Card.Text>
        <Link to={`/category/${course.category_id}`}>
          <Button variant="primary">Go Back</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Course;
