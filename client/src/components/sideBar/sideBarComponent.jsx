export default function SideBarComponent({ links }) {
    return (
      <nav className="sideBar">
        <div className="">
              {links.map((link) => link)}
        </div>
      </nav>
    );
  }