import React, { Component } from "react";
import { editNote } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class EditForm extends Component {
  state = {
    title: "",
    text: "",
    redirect: false
  };

  render() {
    return (
      <div>
        <h3 className="heading">Update Note:</h3>
        <form onSubmit={this.createNote}>
          <input
            className="formtitle"
            type="text"
            placeholder="Note Title"
            onChange={this.updateNote}
            name="title"
            value={this.state.title}
          />
          <textarea
            className="formtext"
            type="text"
            placeholder="Note Content"
            onChange={this.updateNote}
            name="text"
            value={this.state.text}
          />
          <button className="button button--teal" type="submit">
            Save
          </button>
        </form>
        {this.state.redirect ? <Redirect to="/notelist" /> : null}
      </div>
    );
  }

  updateNote = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  createNote = event => {
    event.preventDefault();
    this.props.editNote(this.state);
    this.setState({ redirect: true });
  };
}

export default connect(null, { editNote })(EditForm);
