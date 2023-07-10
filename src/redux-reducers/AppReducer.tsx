import { 
  GET_CONFIG_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_TRL_SUCCESS,
  PUT_PRODUCT_BY_ID_SUCCESS,
  ERROR,
} from "../constants/actions";


const INITIAL_STATE: IAppState = {
  allProducts: [],
  product: null,
  putProduct: { value: {} },
  trl: null,
  config: null,
};

const AppReducer = (state = INITIAL_STATE, action: { payload: any, type: string }) : IAppState => {
  const { payload, type } = action;
  switch(type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProducts: payload
      }
    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        product: payload,
        allProducts: [payload],
      }
    case PUT_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        putProduct: {
          value: payload,
          success: true,
        }
      }
    case GET_TRL_SUCCESS:
      return {
        ...state,
        trl: payload
      }
    case GET_CONFIG_SUCCESS:
      return {
        ...state,
        config: payload
      }
    case ERROR: {
      return {
        ...state,
        error: payload,
      }
    }
    default:
      return state 
  }
}

export default AppReducer;