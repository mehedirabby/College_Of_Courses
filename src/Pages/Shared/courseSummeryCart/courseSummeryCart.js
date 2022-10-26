import React from "react";
import { Link } from "react-router-dom";
import Course from "../../Course/Course/Course";
import { FaStar, FaUser } from "react-icons/fa";

const CourseSummeryCart = ({ course }) => {
  return (
    <div className="card-group col-md-9 ">
      <div className="card mt-5 ">
        <img src={course.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">
            {course.details.slice(0, 100) + "..."}
            <Link to={`/course/${course._id}`}>Learn About</Link>
          </p>
          <p className="card-text">
            <div className="mb-2">
              <FaStar className="me-2 text-warning"></FaStar>
              {course.rating}
            </div>
            <div>
              <FaUser className="me-2 text-danger "></FaUser>
              {course.access}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseSummeryCart;
