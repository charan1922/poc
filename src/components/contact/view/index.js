
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contact-action';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      age: ''
    }
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name: this.state.name,
      age: this.state.age
    }
    this.setState({
      name: '',
      age: ''
    });

    if (contact.name === '' || contact.age === '') {
      alert('enter name and age')

    } else if (isNaN(contact.age)) {
      alert('age should be number')
    }

    else {
      this.props.createContact(contact);
    }
  }

  listView(data, index) {
    return (
      <table border='1px' key={index} style={{ borderCollapse: "collapse" }}>
        <thead><tr><td>{index + 1}</td><td>{data.name}</td><td>{data.age}</td>
        <td> <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
          Remove
          </button>
        </td>
      </tr></thead></table>
    )
  }

  deleteContact(e, index) {
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Name:<input type="text" onChange={this.handleChange} name='name' value={this.state.name} /></label><br />
          <label style={{ padding: '12px' }}>Age:<input type="text" onChange={this.handleChange} name='age' value={this.state.age} /></label>          <input type="submit" className="btn btn-success" value="ADD" />
<br />
        </form>

        {this.props.contacts.map((contact, i) => this.listView(contact, i))}
      </>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index => dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
