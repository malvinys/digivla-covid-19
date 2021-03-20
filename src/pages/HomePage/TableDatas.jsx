import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import './TableData.scss';

const TableDatas = ({ data }) => {
  const columnTables = [
    {
      dataField: 'countryWithFlagComponent',
      text: 'Country',
    },
    {
      dataField: 'slug',
      text: 'Slug',
    },
    {
      dataField: 'iso2',
      text: 'ISO2',
    },
  ];

  return (
    <BootstrapTable keyField="slug" data={data} columns={columnTables} pagination={paginationFactory()} />
  );
};

TableDatas.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

TableDatas.defaultProps = {
  data: [{}],
};

export default TableDatas;
