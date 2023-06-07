import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles.css";
import Landing_page from "./03_pages/Landing_page";
import Login_page from "./03_pages/Login_page";
import Register_page from "./03_pages/Register_page";
import Content_page from "./03_pages/Content_page";
import About_page from "./03_pages/About_page";
import Lesson_page from "./03_pages/Lesson_page";

function App() {
  return (
    <div
      className="container-fluid bg-light"
      style={{
        width: "100vw",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" Component={Landing_page}></Route>
          <Route path="/login" Component={Login_page}></Route>
          <Route path="/register" Component={Register_page}></Route>
          <Route path="/content" Component={Content_page}></Route>
          <Route path="/about" Component={About_page}></Route>
          <Route path="/lesson_1" Component={Lesson_page}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

// TODO => fazer link PAGE NOT FOUND
// TODO => review files => include comments explaining what is in each file
