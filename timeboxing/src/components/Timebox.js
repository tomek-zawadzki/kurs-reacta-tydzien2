import React from "react";

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

export default Timebox;
