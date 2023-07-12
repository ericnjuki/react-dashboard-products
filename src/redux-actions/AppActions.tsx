import { Dispatch } from 'redux';
import { 
  ERROR,
  GET_CONFIG_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_TRL_SUCCESS,
  PUT_PRODUCT_BY_ID_SUCCESS
} from "../constants/actions";
import axios, { AxiosHeaders } from 'axios';
import { API } from '../constants/api';

const axiosError = (payload: any) => ({
  type: ERROR,
  payload,
});

const getProductByIdSuccess = (payload: any) => ({
  type: GET_PRODUCT_BY_ID_SUCCESS,
  payload,
});
const getProductById = (id: number) => (
  (dispatch: Dispatch) => {
    try {
      axios.get(`${API.getProduct}/${id}/`)
      .then((result) => {
        dispatch(getProductByIdSuccess(result.data));
      }).catch(e => console.log('UH OH', e));
    } catch (error) {
      // error handler
      dispatch(axiosError(error));
      console.log("axios error", error);
    }
  }
);

// exists for my custom product list page
const getProductsSuccess = (payload: any) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});
const getProducts = () => (
  (dispatch: Dispatch) => {
    try {
      // requesting products one by one since we don't have a /products API
      const promises: any[] = [];
      const productKeys = [6781]
      productKeys?.map((id) => promises.push(
        axios.get(`${API.getProduct}/${id}/`, { headers: { mode: 'no-cors' } })
      ));
      Promise.all(promises).then((results) => {
        const data = results.map((result) => result.data);
        dispatch(getProductsSuccess(data));
      });
    } catch (error) {
      // error handler
      dispatch(axiosError(error));
      console.log("axios error", error);
    }
  }
);

const putProductByIdSuccess = (payload: any) => ({
  type: PUT_PRODUCT_BY_ID_SUCCESS,
  payload,
});
const putProductById = (id: number) => (
  (dispatch: Dispatch) => {
    try {
      axios.get(`${API.putProduct}/${id}`)
      .then((result) => {
        dispatch(putProductByIdSuccess(result.data));
      });
    } catch (error) {
      // error handler
      dispatch(axiosError(error));
      console.log("axios error", error);
    }
  }
);

const getTRLSuccess = (payload: any) => ({
  type: GET_TRL_SUCCESS,
  payload,
});
const getTRL = (id: number) => (
  (dispatch: Dispatch) => {
    try {
      axios.get(`${API.getTRL}/${id}`)
      .then((result) => {
        dispatch(getTRLSuccess(result.data));
      });
    } catch (error) {
      // error handler
      dispatch(axiosError(error));
      console.log("axios error", error);
    }
  }
);

const getConfigSuccess = (payload: any) => ({
  type: GET_CONFIG_SUCCESS,
  payload,
});
const getConfig = (id: number) => (
  (dispatch: Dispatch) => {
    try {
      axios.get(`${API.getConfig}/${id}`)
      .then((result) => {
        dispatch(getConfigSuccess(result.data));
      });
    } catch (error) {
      // error handler
      dispatch(axiosError(error));
      console.log("axios error", error);
    }
  }
);

export {
  getProducts,
  getProductById,
  getProductByIdSuccess,
  putProductById,
  getTRL,
  getTRLSuccess,
  getConfig,
  getConfigSuccess,
}