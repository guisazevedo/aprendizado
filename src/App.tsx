import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles.css";
import Landing_page from "./03_pages/Landing_page";
import Login_page from "./03_pages/Login_page";
import Register_page from "./03_pages/Register_page";
import Content_page from "./03_pages/Content_page";
import Contato_page from "./03_pages/Contato_page";
import About_page from "./03_pages/About_page";
import Lesson_page from "./03_pages/Lesson_page";
import Download from "./01_components/Download";

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
          <Route path="/login" Component={Login_page}></Route>
          <Route path="/register" Component={Register_page}></Route>
          <Route path="/content" Component={Content_page}></Route>
          <Route path="/contact" Component={Contato_page}></Route>
          <Route path="/about" Component={About_page}></Route>
          <Route path="/lesson" Component={Lesson_page}></Route>
          <Route path="/download" Component={Download}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

// TODO => fazer link PAGE NOT FOUND
// TODO => review files => include comments explaining what is in each file
