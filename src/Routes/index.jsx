import { Switch, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import { useState, useEffect } from "react";

export function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");

    if (token) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path={"/"}>
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path={"/register"}>
        <Register authenticated={authenticated} />
      </Route>
      <Route path={"/home"}>
        <Home
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
}
