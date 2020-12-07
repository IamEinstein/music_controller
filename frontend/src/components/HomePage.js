import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          {/* Have to add `exact` so that it matches only exactly */}
          {/* Otherwise it will render the same content, if the page has that route */}
          <Route exact path="/">
            <p>This is the Home page</p>
          </Route>
          <Route path="/join" component={RoomJoinPage} />
          <Route path="/create" component={CreateRoomPage} />
        </Switch>
      </Router>
    );
  }
}
