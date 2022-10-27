import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, providerLogin } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
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

  //   Google Sign In method
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
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };
  return (
    <Form className="w-75 mt-3" onSubmit={handleSubmit}>
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

      <Button variant="primary" type="submit">
        Log In
      </Button>
      <p>
        Don't have an account? <Link to="/signIn">Sign UP</Link>
      </p>
      <br />
      <p className="text-danger">{error}</p>
      <div className="mt-3 d-flex">
        <p className="me-3">Log In with</p>
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

export default Login;
