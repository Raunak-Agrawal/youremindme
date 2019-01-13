import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import InputForm from "../common/InputForm";
import "../../App.css";
import { Link } from "react-router-dom";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      isAgreed: true,
      mode: "register"
    };
  }
  onChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  onSubmit = () => {
    console.log(this.state);
  };
  render() {
    return (
      <InputForm mode={this.state.mode}>
        <h2 className="text-center mb-4">Register</h2>
        <div className="auto-form-wrapper">
          <form onSubmit={this.onSubmit}>
            <TextFieldGroup
              type="text"
              classname="form-control"
              placeholder="Username"
              value={this.state.username}
              onChange={this.onChange}
              name="username"
            />

            <TextFieldGroup
              type="password"
              classname="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
              name="password"
            />
            <TextFieldGroup
              type="password"
              classname="form-control"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.onChange}
              name="confirmPassword"
            />
            <div
              className="form-group d-flex justify-content-center"
              style={{ float: "left" }}
            >
              <div
                className="form-check form-check-flat"
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingLeft: "0px"
                }}
              >
                <label
                  className="form-check-label"
                  style={{ marginTop: "-3px" }}
                >
                  I agree to the terms
                </label>
                <TextFieldGroup
                  type="checkbox"
                  value={this.state.isAgreed}
                  onChange={this.onChange}
                  name="isAgreed"
                  hideCheckCircle="true"
                />
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-primary submit-btn btn-block">
                Register
              </button>
            </div>
            <div className="text-block text-center my-3">
              <span className="text-small font-weight-semibold">
                Already have and account ?
              </span>
              <Link to="/" className="text-black text-small">
                Login
              </Link>
            </div>
          </form>
        </div>
      </InputForm>
    );
  }
}
export default Register;
