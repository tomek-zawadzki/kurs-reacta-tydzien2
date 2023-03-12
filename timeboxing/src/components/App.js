import EditableTimebox from "./EditableTimebox";
import TimeboxList from "./TimeboxList";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <Error message="coś nie działa w aplikacji">
        <TimeboxList />
        <EditableTimebox />
      </Error>
    </div>
  );
}

export default App;
