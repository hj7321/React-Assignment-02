import "./reset.css";
import "./index.css";
import TodoContainer from "./components/TodoContainer.jsx";

const App = ({ children }) => {
  return <TodoContainer>{children}</TodoContainer>;
};

export default App;
