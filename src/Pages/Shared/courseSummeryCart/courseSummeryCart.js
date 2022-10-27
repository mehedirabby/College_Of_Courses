import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaUser } from "react-icons/fa";

const CourseSummeryCart = ({ course }) => {
  return (
    <div className="card-group col-md-9 ">
      <div className="card mt-3 ">
        <img src={course.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">
            {course.details.slice(0, 100) + "..."}
            <Link className="text-danger" to={`/course/${course._id}`}>
              Get Premium
            </Link>
          </p>
          <br />
          <h3>Price: {course.price}$</h3>

          <div className="card-text d-flex">
            <div className="mb-2">
              <FaStar className="me-2 text-warning"></FaStar>
              {course.rating}
            </div>
            <div>
              <FaUser className="ms-4  text-danger "></FaUser>
              {course.access}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSummeryCart;
