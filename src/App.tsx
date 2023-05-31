import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_page from "./03_pages/Landing_page";

function App() {
  return (
    <div
      className="container-fluid bg-light"
      style={{
        height: "100vw",
        width: "100vw",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" Component={Landing_page}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
