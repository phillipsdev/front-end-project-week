import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNote } from "../actions";
import DeleteModal from "./deleteModal";

class SingleNote extends Component {
  state = {
    deleting: false
  };

  render() {
    const id = this.props.match.params.id - 1;
    return (
      <div>
        <h3 className="heading">{this.props.notes[id].title}</h3>
        <p className="notetext">{this.props.notes[id].text}</p>
        <div>edit</div>
        <div onClick={this.toggleDelete}>
          {this.state.deleting ? (
            <DeleteModal
              deleteNote={this.deleteNote}
              cancelDelete={this.cancelDelete}
              id={this.props.notes[id]}
            />
          ) : (
            "delete"
          )}
        </div>
      </div>
    );
  }

  deleteNote = () => {
    const id = this.props.match.params.id - 1;
    this.props.deleteNote(this.props.notes[id].id);
    this.props.history.push("/notelist");
  };

  cancelDelete = () => {
    this.toggleDelete();
  };

  toggleDelete = () => {
    this.setState({ deleting: !this.state.deleting });
  };
}

const mapStateToProps = state => {
  return {
    current: state.current,
    notes: state.notes,
    deleting: state.deleting
  };
};
export default connect(mapStateToProps, { deleteNote })(SingleNote);
