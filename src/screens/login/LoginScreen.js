import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../../redux/actions/auth.action";

import "./loginscreen.scss";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const admin = useSelector((state) => state.auth.admin);

  const handlelogin = () => {
    dispatch(login(email, password));
  };

  const history = useHistory();

  useEffect(() => {
    console.log("Changed state");
    if (admin) {
      history.push("/");
    }
  }, [admin, history]);

  return (
    <div className="login">
      <div className="login__form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" size="sm" onClick={handlelogin}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginScreen;
