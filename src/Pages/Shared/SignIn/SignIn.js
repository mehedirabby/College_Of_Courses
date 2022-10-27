import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const SignIn = () => {
  const [error, setError] = useState("");
  const { providerLogin, createUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //   Github Sign In method
  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .error((error) => {
        console.error(error);
      });
  };
  //Google sign In Method
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .error((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("grom sign in", name, email);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <Form className="w-75 mt-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-info">Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Your Name" />
        <Form.Text className="text-muted text-danger">
          We'll never share your Identification To Others.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-info"> Photo URL</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter Your Image URL"
        />
        <Form.Text className="text-muted text-danger">
          Your Photo will secure with us
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-info">Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-info">Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <p>
        Already Have an Account? <Link to="/login">Log In</Link>
      </p>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <p className="text-danger">{error}</p>
      <div className="mt-3 d-flex">
        <p className="me-3">Sign up with</p>
        <div>
          <Button onClick={handleGoogleSignIn} variant="dark" className="me-2">
            <FaGoogle></FaGoogle>
          </Button>
          <Button onClick={handleGithubSignIn} variant="danger">
            <FaGithub></FaGithub>
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default SignIn;
