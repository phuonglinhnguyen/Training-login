import React, { useState } from "react";
import MaterialTable from "material-table";

import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import { connect } from "react-redux";
import {
  addUser,
  deleteUser,
  getUsers,
  startLoading,
  updateUser
} from "./../../reduxStore/userReducer";
import { getUser } from "../../services/StorageService";
import { isEmpty } from "lodash";
import { MTableToolbar } from "material-table";
import "./adminUsers.css";

const adminUser = props => {
  const { users, loading } = props;
  const user = getUser();
  console.log(user);
  useState(() => {
    props.getUsers();
  });

  if (user && user.role !== "ADMIN") {
    props.history.push("/");
  }

  if (users === null || loading === true) return <div className="loader" />;

  const columns = [
    { title: "Username", field: "username", editable: "onAdd" },
    { title: "Password", field: "password" },
    { title: "Email", field: "email" }
  ];

  const data = users;

  const tableIcons = {
    Add: AddBox,
    Check: Check,
    Clear: Clear,
    Delete: DeleteOutline,
    DetailPanel: ChevronRight,
    Edit: Edit,
    Export: SaveAlt,
    Filter: FilterList,
    FirstPage: FirstPage,
    LastPage: LastPage,
    NextPage: ChevronRight,
    PreviousPage: ChevronLeft,
    ResetSearch: Clear,
    Search: Search,
    SortArrow: ArrowUpward,
    ThirdStateCheck: Remove,
    ViewColumn: ViewColumn
  };

  const _usernameValidate = username => {
    //check empty username /^[A-Za-z0-9]{6,16}$/
    const MIN_LENGTH = 3;
    const MAX_LENGTH = 25;
    if (isEmpty(username)) {
      return false;
    }
    const usernameLength = username.length;
    if (usernameLength <= MIN_LENGTH || usernameLength >= MAX_LENGTH) {
      return false;
    }
    return true;
  };

  const _passwordValidate = password => {
    const MIN_MAX_LENGTH = 8; // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&])[.\S]{6,}$/
    // const pwd = /^(?=.*[#$^+=!*()@%&])[.\S]{6,}$/;
    if (isEmpty(password)) {
      return false;
    }
    const passwordLength = password.length;
    if (passwordLength !== MIN_MAX_LENGTH) {
      return false;
    }

    return true;
  };

  const _emailValidate = email => {
    // /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkingResult = checkEmail.exec(email);
    if (checkingResult === null) {
      return false;
    }
    return true;
  };

  const _onRowAddHandler = (resolve, newData) => {
    if (
      _usernameValidate(newData.username) &&
      _passwordValidate(newData.password) &&
      _emailValidate(newData.email)
    ) {
      resolve();
      props.startLoading();
      props.addUser(newData);
    } else {
      window.alert("Something wrong!!!");
      resolve();
    }
  };

  const _onRowUpdateHandler = (resolve, newData, oldData) => {
    if (_passwordValidate(newData.password) && _emailValidate(newData.email)) {
      resolve();
      props.startLoading();
      props.updateUser(newData, oldData);
    } else {
      window.alert("Something wrong!!!");
      resolve();
    }
  };

  return (
    <div className="admin">
      <MaterialTable
        title="Manage Users"
        icons={tableIcons}
        columns={columns}
        data={data}
        options={{
          actionsColumnIndex: -1,
          searchFieldStyle: {
            color: "#ffffff"
          },
          headerStyle: {
            backgroundColor: "#231c16",
            color: "#ffffff"
          }
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              _onRowAddHandler(resolve, newData);
            }),

          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              _onRowUpdateHandler(resolve, newData, oldData._id);
            }),

          onRowDelete: oldData =>
            new Promise(resolve => {
              resolve();
              props.startLoading();
              props.deleteUser(oldData._id);
            })
        }}
        components={{
          Toolbar: props => (
            <div style={{ backgroundColor: "#536bc3", color: "white" }}>
              <MTableToolbar {...props} />
            </div>
          )
        }}
      />
    </div>
  );
};

adminUser.defaultProps = {
  users: null
};

const mapStateToProps = state => {
  return {
    users: state.user.users,
    loading: state.user.loading,
    user: state.user.user //user login
  };
};

// const ContactListWithLoadIndicator = withLoader("users")(adminUser);

export default connect(
  mapStateToProps,
  {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    startLoading
  }
)(adminUser);
