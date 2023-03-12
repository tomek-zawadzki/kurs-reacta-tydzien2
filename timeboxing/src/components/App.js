import EditableTimebox from "./EditableTimebox";
import TimeboxList from "./TimeboxList";
import ErrorBoundry from "./ErrorBoundry";

function App() {
  return (
    <div className="App">
      <ErrorBoundry message="coś nie działa w aplikacji">
        <TimeboxList />
        <EditableTimebox />
      </ErrorBoundry>
    </div>
  );
}

export default App;
