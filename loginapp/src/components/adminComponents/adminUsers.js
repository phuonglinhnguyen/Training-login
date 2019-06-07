import React, { Component } from "react";

class AdminUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'add',
      selectedUser: {},
      users: [{
        username: 'hung',
        email: 'abc@gmail.com',
        address: 'asdassfff'
      }, {
        username: 'linh',
        email: 'abddc@gmail.com',
        address: 'dfdfdf'
      }
        ,
      {
        username: 'linh11',
        email: 'abddsdc@gmail.com',
        address: 'dfdfdf'
      }]
    };
  }

  _onChangeSelectedUser = (e) => {
    const { selectedUser } = this.state
    this.setState({
      selectedUser: {
        ...selectedUser,
        [e.target.name]: e.target.value
      }
    })
  }

  _onSave = () => {
    const { mode, users, selectedUser } = this.state

    if (mode === 'add') {
      const newUsers = [...users, selectedUser];
      this.setState({
        users: newUsers,
        selectedUser: {
          username: '',
          address: ''
        },
      })
    } else if (mode === 'update') {
      const newUsers = users.map(user => {
        if (user.username === selectedUser.username) {
          user = {...selectedUser} //
        }
        return user
      })

      this.setState({
        users: newUsers,
        mode: 'add',
        selectedUser: {
          username: '',
          address: ''
        },
      })
    }
  }

  _onUpdate = (user) => {
    this.setState({
      mode: 'update',
      selectedUser: user
    })
  }

  _onDelete = (user) => {
    // dung filter
  }

  render() {
    const { selectedUser, users, mode } = this.state
    return (
      <div className="manage-users">
        <div className='mb-2'>
          <div>
            <label>username: </label>
            <input
              name='username'
              value={selectedUser.username}
              onChange={this._onChangeSelectedUser}
              disabled={mode !== 'add'}
            />
          </div>
          <div>
            <label>address: </label>
            <input
              name='address'
              value={selectedUser.address}
              onChange={this._onChangeSelectedUser}
            />
          </div>
          <button
            className="btn btn-success"
            onClick={this._onSave}
          >{this.state.mode === 'add' ? 'Save' : 'Update'}</button>
        </div>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Adress</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>
                      <button
                        onClick={() => this._onUpdate(user)}
                      >Sua</button>

                      <button
                        onClick={() => this._onDelete(user)}
                      >Xoa</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>



      </div>
    );
  }
}

export default AdminUsers;
