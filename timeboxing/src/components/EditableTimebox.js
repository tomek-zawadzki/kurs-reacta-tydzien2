import React from "react";
import TimeboxEditor from "./TimeboxEditor";
import CurrentTimebox from "./CurrentTimebox";

class EditableTimebox extends React.Component {
  state = {
    title: "Uczę się skrótów klawiszowych",
    totalTimeInMinutes: 15,
    isEditable: true,
  };
  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleTotalTimeInMinutesChange = (event) => {
    this.setState({ totalTimeInMinutes: event.target.value });
  };
  handleConfirm = () => {
    this.setState({ isEditable: false });
  };
  handleEdit = () => {
    this.setState({ isEditable: true });
  };
  render() {
    const { title, totalTimeInMinutes, isEditable } = this.state;

    return (
      <>
        <React.StrictMode>
          {isEditable ? (
            <TimeboxEditor
              title={title}
              totalTimeInMinutes={totalTimeInMinutes}
              isEditable={isEditable}
              onConfirm={this.handleConfirm}
              onTitleChange={this.handleTitleChange}
              onTotalTimeInMinutesChange={this.handleTotalTimeInMinutesChange}
            />
          ) : (
            <CurrentTimebox
              isEditable={isEditable}
              title={title}
              totalTimeInMinutes={totalTimeInMinutes}
              onEdit={this.handleEdit}
            />
          )}
        </React.StrictMode>
      </>
    );
  }
}

export default EditableTimebox;
