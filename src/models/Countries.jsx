/* eslint-disable no-param-reassign */
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import Flag from 'react-world-flags';

export const Countries = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    countryDetails: [],
  },
  reducers: {
    setCountries: (state, action) => {
      const arrayCountries = [];

      for (let index = 0; index < action.payload.length; index++) {
        const item = action.payload[index];

        arrayCountries.push({
          index: index + 1,
          country: item.Country,
          slug: item.Slug,
          iso2: item.ISO2,
          flagComponent: (
            <Flag code={item.ISO2} height="16" />
          ),
          countryWithFlagComponent: (
            <a href={`/${item.Slug}`}>
              <Flag code={item.ISO2} height="16" />
              {' '}
              {item.Country}
            </a>
          ),
        });
      }

      state.countries = arrayCountries;
    },
    setCountryDetails: (state, action) => {
      const arrayCountrieDetails = [];

      const countryDetailsDesc = action.payload.reverse();
      countryDetailsDesc.slice([0], [10]).map((item) => {
        const dateFormatted = new Date(item.Date).toString().slice(0, 10);

        arrayCountrieDetails.push({
          country: item.Country,
          iso2: item.CountryCode,
          date: dateFormatted,
          case: item.Cases,
        });

        return true;
      });

      state.countryDetails = arrayCountrieDetails;
    },
  },
});

export const { setCountries, setCountryDetails } = Countries.actions;
