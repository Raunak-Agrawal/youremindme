import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import Footer from "../layouts/Footer";
import InputForm from "../common/InputForm";
import "../../App.css";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      keepSignedIn: true,
      mode: "auth"
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
        <h2 className="text-center mb-4">Login</h2>
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
              placeholder="*******"
              value={this.state.password}
              onChange={this.onChange}
              name="password"
            />
            <div className="form-group">
              <button className="btn btn-primary submit-btn btn-block">
                Login
              </button>
            </div>
            <div className="form-group d-flex justify-content-between">
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
                  Keep me signed in
                </label>
                <TextFieldGroup
                  type="checkbox"
                  value={this.state.keepSignedIn}
                  onChange={this.onChange}
                  name="keepSignedIn"
                  hideCheckCircle="true"
                />
              </div>
              <Link to="/" className="text-small forgot-password text-black">
                Forgot Password
              </Link>
            </div>
            <div className="form-group">
              <button className="btn btn-block g-login">
                <i className="fab fa-google" />
                Log in with Google
              </button>
            </div>
            <div className="text-block text-center my-3">
              <span className="text-small font-weight-semibold">
                Not a member ?
              </span>
              <Link to="/register" className="text-black text-small">
                Create new account
              </Link>
            </div>
          </form>
        </div>
        <Footer />
      </InputForm>
    );
  }
}
export default Login;
