import React, { useState } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { connect } from 'react-redux'
import { getUsers, addUser, updateUser, deleteUser } from './../../reduxStore/userReducer'

const adminUser = (props) => {
  const { users } = props
  console.log(users);

  useState(() => {
    props.getUsers()
  })

  if (users === null) return <div>Loading...</div>

  // const [stateTable, setStateTable] = useState({
  // });

  const columns = [
    { title: 'Username', field: 'username' },
    { title: 'Password', field: 'password' },
    { title: 'Email', field: 'email' },
  ]

  const data = users


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
    <MaterialTable
      title="Manage Users"
      icons={tableIcons}
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData => (
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              console.log(newData);
              props.addUser(newData);
              // const data = [...stateTable.data];
              // data.push(newData);
              // setStateTable({ ...stateTable, data });
            }, 600);
          })
        ),
        onRowUpdate: (newData, oldData) => (
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              props.updateUser(newData);
            }, 600);
          })
        ),
        onRowDelete: oldData => (
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              props.deleteUser(oldData._id)
            }, 600);
          })
        ),
      }}
    />
  );
}

adminUser.defaultProps = {
  users: null
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users
  }
}

export default connect(
  mapStateToProps,
  {
    getUsers,
    addUser,
    updateUser,
    deleteUser
  }
)(adminUser)