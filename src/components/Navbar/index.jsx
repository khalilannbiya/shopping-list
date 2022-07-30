const Navbar = ({ icon }) => {
   return (
      <nav className="nav">
         <img className="nav-icon" src={icon} alt="Shopping Icon" />
         <h1 className="nav-title">Shopping List</h1>
      </nav>
   );
};

export default Navbar;
