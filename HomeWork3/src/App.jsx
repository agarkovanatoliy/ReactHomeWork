import "./App.css";
import TemperatureConverter from "./Components/TemperatureConverter/TemperatureConverter";
import TodoList from "./Components/TodoList/TodoList";


function App() {
  return (
    <div className="Tasks">
      <div className="FirstTask">
        <TemperatureConverter />
      </div>
      <div className="SecondTask">
        <TodoList />
      </div>
    </div>
  );
}

export default App;