import { Typography, Divider } from "antd";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

import "./App.css";

const { Title } = Typography;

function App() {
  return (
    <div className="app-container">
      <Title className="app-title">TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
