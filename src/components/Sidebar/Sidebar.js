import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-title">
              Menu
            </li>
			      <li className="nav-item">
              <Link to={'/endpoints'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Endpoints</Link>
            </li>
            <li className="nav-item">
              <Link to={'/run'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i> Run Endpoint <span className="badge badge-info">SOON</span></Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;