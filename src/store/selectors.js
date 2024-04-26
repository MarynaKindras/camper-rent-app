import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.adverts.advert.campers;
export const selectRespLength = state => state.adverts.advert.length;

export const selectAllCampers = state => state.adverts.filters.items;
export const selectFiltered = state => state.adverts.filters.filters;

export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;

export const selectFavorites = state => state.favorites.items;

export const selectFilteredCampers = createSelector([selectAllCampers, selectFiltered], (campers, filters) => {
  return campers.filter(item => {
    if (!item.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    if (filters.transmission.transmission && item.transmission !== 'automatic') {
      return false;
    }

    const details = filters.details;
    if (Object.keys(details).some(key => details[key])) {
      for (const key in details) {
        if (details[key] && !item.details[key]) {
          return false;
        }
      }
    }

    const form = filters.form;
    if (Object.keys(form).some(key => form[key])) {
      return Object.keys(form).some(key => form[key] && item.form === key);
    }

    return true;
  });
});
