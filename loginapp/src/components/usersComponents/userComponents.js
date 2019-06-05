import React, { Component } from "react";
import SimpleTable from "../tableComponents/tableUsers";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {
    fetch("examples/example.json")
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Read the response as json.
        return response.json();
      })
      .then(function(responseAsJson) {
        // Do stuff with the JSON
        console.log(responseAsJson);
      })
      .catch(function(error) {
        console.log("Looks like there was a problem: \n", error);
      });
  }
  render() {
    return (
      <div className="Users">
        <SimpleTable />
      </div>
    );
  }
}

export default Users;
