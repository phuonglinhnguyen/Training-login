import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Login from "../components/loginComponents/login";
import UserDetail from "../components/userDetail/userDetail";
import AdminUser from "../components/adminComponents/adminUser";
import Header from "../components/HeaderComponents/header";
function AppRouter() {
  function Home(){
    return <h1>Hello My Home</h1>
  }
  return (
    <BrowserRouter>
      <div>
        <Header/>

        <Route path="/" exact component={Home} />
        <Route path="/user-details/" component={UserDetail} />
        <Route path="/manage-users/" component={AdminUser} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
