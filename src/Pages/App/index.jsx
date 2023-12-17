import { AppProvider } from "../../Context";
import Home from "../Home";
import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};
export default App;
