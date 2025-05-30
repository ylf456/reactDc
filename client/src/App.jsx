// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";

// import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/*只匹配其中一个*/}
        {/* Protected admin route */}
        <Route
          path="/*"
            // It's acting like a catch-all route,
            //  meaning it will render Home for any unmatched path.
          element={
            <Home />
            // <Layout style={{ minHeight: '100vh' }}>
            //     <Admin />
            // </Layout>
          }
        />
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path='/' element={<Admin/>}></Route>
            <Route path="/" element={<Navigate to="/admin" replace />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
