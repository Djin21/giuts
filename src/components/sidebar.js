import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../css/style.css';
import '../bootstrap/icons/font/bootstrap-icons.css';

const SideBar = () => {
    return (
        <div className='sidebar'>
          <div className='buttonn px-3 py-3'>
            <ul className='liste m-0 p-0'>
              <li className='btn-add'>
                <button className="rect mb-3 rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <i className="bi bi-pencil-square sidebar-icon"></i>
                </button>
              </li>
              <li className='btn-add'>
                <Link to="/main" className="p-0 m-0">
                  <div className='rect mb-3 rounded-pill d-flex align-items-center justify-content-center'>
                    <i className="bi bi-journal-text sidebar-icon"></i>
                  </div>
                </Link>
              </li>
              <li className='btn-add'>
                <Link to="/salles" className="p-0 m-0">
                  <div className='rect mb-3 rounded-pill d-flex align-items-center justify-content-center'>
                  <i className="bi bi-grid-1x2 sidebar-icon"></i>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    );
}

export default SideBar;