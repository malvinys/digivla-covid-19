/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Flag from 'react-world-flags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import './HomePage.scss';

const HomePage = () => (
  <div className="home-page">
    <h1>Title Page</h1>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Country</th>
          <th scope="col">Slug</th>
          <th scope="col">ISO2</th>
          <th scope="col" style={{ textAlign: 'center' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Flag code="AU" height="16" style={{ marginRight: '4px' }} />
            Australia
          </td>
          <td>australia</td>
          <td>AU</td>
          <td style={{ textAlign: 'center' }}>
            <a href="/detail">
              <FontAwesomeIcon icon={faEye} />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Flag code="AU" height="16" style={{ marginRight: '4px' }} />
            Australia
          </td>
          <td>australia</td>
          <td>AU</td>
          <td style={{ textAlign: 'center' }}>
            <a href="/detail">
              <FontAwesomeIcon icon={faEye} />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Flag code="AU" height="16" style={{ marginRight: '4px' }} />
            Australia
          </td>
          <td>australia</td>
          <td>AU</td>
          <td style={{ textAlign: 'center' }}>
            <a href="/detail">
              <FontAwesomeIcon icon={faEye} />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Flag code="AU" height="16" style={{ marginRight: '4px' }} />
            Australia
          </td>
          <td>australia</td>
          <td>AU</td>
          <td style={{ textAlign: 'center' }}>
            <a href="/detail">
              <FontAwesomeIcon icon={faEye} />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Flag code="AU" height="16" style={{ marginRight: '4px' }} />
            Australia
          </td>
          <td>australia</td>
          <td>AU</td>
          <td style={{ textAlign: 'center' }}>
            <a href="/detail">
              <FontAwesomeIcon icon={faEye} />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Flag code="AU" height="16" style={{ marginRight: '4px' }} />
            Australia
          </td>
          <td>australia</td>
          <td>AU</td>
          <td style={{ textAlign: 'center' }}>
            <a href="/detail">
              <FontAwesomeIcon icon={faEye} />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <nav className="pagination-container" aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default HomePage;
