import React from "react";
import PropTypes from "prop-types";

function Timebox({ title, totalTimeInMinutes, onDelete, onEdit }) {
  if (totalTimeInMinutes <= 0) {
    throw new Error("czas musi być większy niż zero");
  }
  return (
    <div className="Timebox">
      <h3>
        {title} - {totalTimeInMinutes}
      </h3>
      <button onClick={onDelete}>Usuń</button>
      <button onClick={onEdit}>Zmień</button>
      <input type="text" />
    </div>
  );
}
const functionType = PropTypes.func;

Timebox.defaultProps = {
  onDelete: () => console.log("Domyślna funkcja obsługi usuwania"),
  onEdit: () => console.log("Domyślna funkcja obsługi edycji"),
};
Timebox.propTypes = {
  title: PropTypes.string.isRequired,
  totalTimeInMinutes: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  onDelete: functionType.isRequired,
  onEdit: functionType.isRequired,
};

export default Timebox;
