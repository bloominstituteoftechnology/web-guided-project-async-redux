import React, { useState } from "react";
import { connect } from "react-redux";
import { updateTitle, toggleEditing } from "../actions/titleActions";

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{" "}
          <i onClick={() => props.toggleEditing()} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              props.updateTitle(newTitleText)
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

// Redux step 3: connect components

const mapStateToProps = (state) => {
  return {
    editing: state.editing,
    title: state.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (title) => dispatch(updateTitle(title)),
    toggleEditing: dispatch(toggleEditing())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);

// connect(mapStateToProps,mapDipatchToProps) returns a decorator function
// We then invoke that decorator on Title
// and magically, Title can now read from and write to the store
