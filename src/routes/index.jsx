import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import Home from "../pages/home";
import Login from "../pages/login";
import Registry from "../pages/registry";
import SignUp from "../pages/singUp";
import User from "../pages/user";

export default function Routes() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub.token");

    if (token) return setAuthenticated(true);
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route path="/signup">
        <SignUp authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login
          setCurrentUser={setCurrentUser}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/registry">
        <Registry
          authenticated={authenticated}
          allUsers={allUsers}
          setAllUsers={setAllUsers}
        />
      </Route>
      <Route path="/user">
        <User
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
}
