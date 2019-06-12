import React, {useState} from "react";
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

import {connect} from "react-redux";
import {addUser, deleteUser, getUsers, startLoading, updateUser} from "./../../reduxStore/userReducer";
// import withLoader from "../LoaderComponent/LoaderHOC.jsx";
import {getUser} from '../../services/StorageService';

const adminUser = props => {
  const {users, loading} = props;
  const user = getUser();
  console.log(user);
  useState(() => {
    props.getUsers();
  });

  if (user && user.role !== "ADMIN") {
    props.history.push("/")
  }

  if (users === null || loading === true) return <div className="loader"/>;

  const columns = [
    {title: "Username", field: "username"},
    {title: "Password", field: "password"},
    {title: "Email", field: "email"}
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

  return (
    <div className="admin">
      <MaterialTable
        title="Manage Users"
        icons={tableIcons}
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              resolve()
              props.startLoading();
              props.addUser(newData);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              resolve()
              props.startLoading();
              props.updateUser(newData, oldData._id);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              resolve()
              props.startLoading();
              props.deleteUser(oldData._id);
            })
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
