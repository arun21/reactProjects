import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
<BrowserRouter> 
 <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a className="brand-link">
    <img src={"/assets/dist/img/RE.jpg"} className="brand-image img-circle elevation-3" style={{opacity: '1.8'}} />
    <span className="brand-text font-weight-light">React Examples</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src={"/assets/dist/img/arunp.jpeg"} className="img-circle elevation-2" />
      </div>
      <div className="info">
        <a className="d-block">Arun Prabhu</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/" className="nav-link">
              <i className="nav-icon fab fa-autoprefixer"/>
              <p>&nbsp;About</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/todo" className="nav-link">
              <i className="nav-icon fas fa-tasks" />
              <p>&nbsp;Todo App</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/pokemon" className="nav-link">
              <i className="nav-icon fas fa-bowling-ball" />
              <p>&nbsp;Pokemon App</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/titato" className="nav-link">
              <i className="nav-icon fas fa-gamepad" />
              <p>&nbsp;TickTacToe App</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/weather" className="nav-link">
              <i className="nav-icon fas fa-cloud-sun" />
              <p>&nbsp;Weather App</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/movie" className="nav-link">
              <i className="nav-icon fas fa-film" />
              <p>&nbsp;Movie App</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/quiz" className="nav-link">
              <i className="nav-icon fas fa-graduation-cap" />
              <p>&nbsp;Quiz App</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/recipe" className="nav-link">
              <i className="nav-icon fas fa-cheese" />
              <p>&nbsp;Recipe App</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/gallery" className="nav-link">
              <i className="nav-icon fas fa-camera-retro" />
              <p>&nbsp;SnapShot App</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/stocks" className="nav-link">
              <i className="nav-icon fas fa-hand-holding-usd" />
              <p>&nbsp;StockMarket Tracker</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/covid" className="nav-link">
              <i className="nav-icon fas fa-viruses" />
              <p>&nbsp;COVID-19 Tracker</p>
            </NavLink>
          </li>
         {/* <li className="nav-item">
            <NavLink exact activeStyle={ {color:'blue', backgroundColor: 'lightyellow'} } to="/chat" className="nav-link">
              <i className="nav-icon fas fa-comment-dots" />
              <p>&nbsp;Chat App</p>
            </NavLink>
          </li> */}
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
<MenuItem/>
</BrowserRouter>
    );
}

export default Menu;
