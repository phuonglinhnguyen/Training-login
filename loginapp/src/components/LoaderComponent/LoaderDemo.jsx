import React, { Component } from "react";
import withLoader from "./LoaderHOC.jsx";
import "./ConstactsApp.css";

class LoaderDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchResults: [],
      contactList: []
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(inputText) {
    this.setState(
      {
        searchText: inputText
      },
      () => console.log(this.state)
    );
  }

  componentWillMount() {
    let init = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default"
    };

    fetch("https://demo1443058.mockable.io/users/", init)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(prevState => ({
          contactList: [...data.contacts]
        }));
      });
  }

  render() {
    return (
      <div className="contactApp">
      {/* Truyen du lieu xuong HOC  */}
        <ContactListWithLoadIndicator contacts={this.state.contactList} />
      </div>
    );
  }
}

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.email}>
            <img
              src={contact.photo}
              width="100px"
              height="100px"
              alt="presentation"
            />
            <div className="contactData">
              <h4>{contact.name}</h4>
              <small>{contact.email}</small> <br />
              <small> {contact.phone}</small>
            </div>
            {console.log(contact)}
          </li>
        ))}
      </ul>
    </div>
  );
};

/* Static props can be passed down as function arguments */
const ContactListWithLoadIndicator = withLoader("contacts")(ContactList);

export default LoaderDemo;
