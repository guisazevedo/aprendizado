import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles.css";
import Landing_page from "./03_pages/Landing_page";
import Register_page from "./03_pages/Register_page";

function App() {
  return (
    <div
      className="container-fluid bg-light"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" Component={Landing_page}></Route>
          <Route path="/register" Component={Register_page}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
