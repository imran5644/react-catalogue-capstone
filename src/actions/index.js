export const FETCHING_DOGS = 'FETCH_DOGS';
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCESS';
export const FETCH_DOGS_FAILURE = 'FETCH_DOGS_FAILURE';

export const fetchDogs = () => ({ type: FETCHING_DOGS });
export const fetchSuccess = (dogs) => ({ type: FETCH_DOGS_SUCCESS, dogs });
export const fetchFailure = (error) => ({ type: FETCH_DOGS_FAILURE, error });

export const asyncFetchDogs = () => (
  async (dispatch) => {
    dispatch(fetchDogs());
    const searchPage = 'search/photos';
    const criteria = 'query=dogs-human';
    const url = `https://api.unsplash.com/${searchPage}?client_id=fa1XHZ_DJdLDUkHIqwc3kU-EUxhYKx0CVSDmDGm1IXM&${criteria}`;
    console.log(url);
    return fetch(`${url}`)
      .then((result) => result.json())
      .then((data) => dispatch(fetchSuccess(data.results)))
      .catch((error) => dispatch(fetchFailure(error)));
  }
);
