import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle, toggleEditing } from "../actions";

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState("");
  const dispatch = useDispatch();
  const { editing, title } = useSelector((state) => state);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {title}{" "}
          <i onClick={() => toggleEditing(dispatch)} className="far fa-edit" />
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
            onClick={() => updateTitle(newTitleText, dispatch)}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;