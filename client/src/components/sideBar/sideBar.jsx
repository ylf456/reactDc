import { Link } from "react-router-dom"; // Link is method that takes the page to the route without fully reload the page
import SideComponent from "sideBarComponent.jsx";
import { useState } from "react";
import "sideBar.css";


export default function NavBar() {
  const [currentPage, setCurrentPage] = useState(`${window.location.pathname}`);
  
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <SideComponent
      links={[
        <Link key={1} onClick={()=> setCurrentPage('/')} className={currentPage === `/` ? 'nav-link text-light selected' : ''} to="/">
          About Me
        </Link>,
        <Link key={2} onClick={()=> setCurrentPage('/section1')} className={currentPage === `/section1` ? 'selected' : ''}  to="/section1">
          Profolio
        </Link>,
        <Link key={3} onClick={()=> setCurrentPage('/section2')} className={currentPage === `/section2` ? 'selected' : ''}  to="/section2">
          Contact Me
        </Link>,
        <Link key={4} onClick={()=> setCurrentPage('/section3')} className={currentPage === `/section3` ? 'selected' : ''}  to="/section3">
          Resume
        </Link>,
      ]}
    />
  );
}