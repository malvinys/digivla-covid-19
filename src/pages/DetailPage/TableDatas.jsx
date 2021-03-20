import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-world-flags';

import './TableDatas.scss';

const TableDatas = ({ data }) => (
  <>
    <table className="DetailPage-table table bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Country Code</th>
          <th scope="col">Date</th>
          <th scope="col">Cases</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 && (
          <tr>
            <td colSpan="4">Data is empty.</td>
          </tr>
        )}
        {data.length > 0 && data.map((item, i) => {
          const key = `${i} - ${item.iso2}`;

          if (i === 0) {
            return (
              <tr key={key}>
                <td rowSpan="10">
                  <Flag code={item.iso2} height="42" />
                  <br />
                  {item.country}
                </td>
                <td rowSpan="10">{item.iso2}</td>
                <td>{item.date}</td>
                <td>{item.case}</td>
              </tr>
            );
          }
          return (
            <tr key={key}>
              <td>{item.date}</td>
              <td>{item.case}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
);

TableDatas.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

TableDatas.defaultProps = {
  data: [{}],
};

export default TableDatas;
