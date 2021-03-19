/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Flag from 'react-world-flags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './DetailPage.scss';

const DetailPage = () => (
  <div className="detail-page">
    <div className="container-title">
      <a className="arrow-back" href="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </a>
      <h1>Title Page</h1>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Country Code</th>
          <th scope="col">Date</th>
          <th scope="col">Cases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="10">
            <Flag code="AU" height="42" />
            <br />
            Australia
          </td>
          <td rowSpan="10">Au</td>
          <td>20 April 2021</td>
          <td>10</td>
        </tr>
        <tr>
          <td>20 April 2021</td>
          <td>10</td>
        </tr>
        <tr>
          <td>20 April 2021</td>
          <td>10</td>
        </tr>
        <tr>
          <td>20 April 2021</td>
          <td>10</td>
        </tr>
        <tr>
          <td>20 April 2021</td>
          <td>10</td>
        </tr>
        <tr>
          <td>20 April 2021</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DetailPage;
