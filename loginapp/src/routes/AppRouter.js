import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "../components/loginComponents/login";
import UserDetail from "../components/userDetail/userDetail";
import AdminUsers from "../components/adminComponents/adminUsers";

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/user-details/">Users Details</Link>
            </li>
            <li>
              <Link to="/admin-users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Login} />
        <Route path="/user-details/" component={UserDetail} />
        <Route path="/admin-users/" component={AdminUsers} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
