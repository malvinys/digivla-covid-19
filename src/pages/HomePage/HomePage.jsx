import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Api from '../../configs/Api';
import Request from '../../helpers/Request';
import { setCountries } from '../../models/Countries';

import './HomePage.scss';
import TableDatas from './TableDatas';

const HomePage = () => {
  const selectCountries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const fetchCountries = async () => {
    const resCountries = await Request.backend('GET', Api.getCountries);
    dispatch(setCountries(resCountries));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="home-page">
      <h1>Covid - 19</h1>
      <TableDatas data={selectCountries.countries} />
    </div>
  );
};

export default HomePage;
