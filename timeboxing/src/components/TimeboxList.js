import React from "react";
import TimeboxCreator from "./TimeboxCreator";
import Timebox from "./Timebox";
import Error from "./Error";

class TimeboxList extends React.Component {
  state = {
    timeboxes: [
      { id: "a", title: "uczę się list", totalTimeInMinutes: "25" },
      { id: "b", title: "uczę się formularzy", totalTimeInMinutes: "15" },
      {
        id: "c",
        title: "uczę się komponentów niekontrolowanych",
        totalTimeInMinutes: "5",
      },
    ],
  };

  addTimebox = (timebox) => {
    this.setState((prevState) => {
      const timeboxes = [...prevState.timeboxes, timebox];
      return { timeboxes };
    });
  };

  removeTimebox = (indexToRemove) => {
    this.setState((prevState) => {
      const timeboxes = prevState.timeboxes.filter(
        (timebox, index) => index !== indexToRemove
      );
      return { timeboxes };
    });
  };

  updateTimebox = (indexToUpdate, updatedTimebox) => {
    this.setState((prevState) => {
      const timeboxes = prevState.timeboxes.map((timebox, index) =>
        index === indexToUpdate ? updatedTimebox : timebox
      );
      return { timeboxes };
    });
  };

  handleCreate = (createdTimebox) => {
    this.addTimebox(createdTimebox);
  };
  render() {
    return (
      <>
        <TimeboxCreator onCreate={this.handleCreate} />
        <Error message="coś tu jest nie tak">
          {this.state.timeboxes.map((timebox, index) => (
            <Timebox
              key={timebox.id}
              title={timebox.title}
              totalTimeInMinutes={timebox.totalTimeInMinutes}
              onDelete={() => this.removeTimebox(index)}
              onEdit={() =>
                this.updateTimebox(index, {
                  ...timebox,
                  title: "updated timebox",
                })
              }
            />
          ))}
        </Error>
      </>
    );
  }
}

export default TimeboxList;
