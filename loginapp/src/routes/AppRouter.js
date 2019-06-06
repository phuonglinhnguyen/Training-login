import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../components/loginComponents/login";
import UserDetail from "../components/userDetail/userDetail";
import AdminUsers from "../components/adminComponents/adminUsers";

function Index() {
  return (
    <div>
      <Login />
    </div>
  );
}

function Detail() {
  return (
    <div>
      <UserDetail />
    </div>
  );
}

function Users() {
  return (
    <div>
      <AdminUsers />
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
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

        <Route path="/" exact component={Index} />
        <Route path="/user-details/" component={Detail} />
        <Route path="/admin-users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;
