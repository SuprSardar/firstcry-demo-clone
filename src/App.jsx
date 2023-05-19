import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Pages from "./pages";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
