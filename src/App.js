import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
