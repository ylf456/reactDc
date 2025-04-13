// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/navBar';
import sideBar from "./components/sideBar";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <sideBAr />
      <Outlet />
    </>
  );
}

export default App;