import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Api from '../../configs/Api';
import Request from '../../helpers/Request';
import { setCountryDetails } from '../../models/Countries';

import './DetailPage.scss';
import TableDatas from './TableDatas';

const DetailPage = () => {
  const urlParams = useParams();
  const selectCountries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const fetchCountrieDetail = async (countryId) => {
    const urlCountryDetail = Api.getCountrieDetails.replace(':slug', countryId);
    const resCountryDetail = await Request.backend('GET', urlCountryDetail);
    dispatch(setCountryDetails(resCountryDetail));
  };

  useEffect(() => {
    const countryId = urlParams.id;
    fetchCountrieDetail(countryId);
  }, []);

  return (
    <div className="detail-page">
      <div className="container-title">
        <a className="arrow-back" href="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <h1>Covid-19</h1>
      </div>
      <TableDatas data={selectCountries.countryDetails} />
    </div>
  );
};

export default DetailPage;
