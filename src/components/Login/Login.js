import React, { Component } from "react";
import styled from "styled-components";
const Form = styled.div`
  background: gray;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
  justify-content: flex-start;
  > div {
    padding: 10px;
  }
`;

class Login extends Component {
  render() {
    return (
      <Form>
        <h1>Sign-in</h1>
        <div>
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
        </div>
        <div>
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>
        <button type="submit">Sign-in</button>
        <button type="submit">Sign-up</button>
      </Form>
    );
  }
}

export default Login;
