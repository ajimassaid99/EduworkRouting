import React, { Component } from "react";
import { Link } from "react-router-dom"; // import Link dari react-router-dom
import "../css/Navbar.css";
import PropTypes from "prop-types";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { logo, menuItems, paths } = this.props; // tambahkan properti paths
    const { isOpen } = this.state;

    return (
      <nav className="navbar">
        <div className="containerNav">
          <Link to="/" className="logo"> {/* Gunakan Link daripada a untuk routing */}
            {logo}
          </Link>
          <div className="menu-toggle" onClick={this.toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
          <div className={`menu ${isOpen ? "open" : ""}`}>
            {menuItems.map((item, index) => (
              <Link to={paths[index]} key={index}> {/* Gunakan Link dengan jalur sesuai dengan index */}
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  paths: PropTypes.array.isRequired // tambahkan properti paths ke PropTypes
};

Navbar.defaultProps = {
  logo: "React Class News",
  menuItems: ["Home"],
  paths: ["/"] // atur jalur default
};

export default Navbar;
