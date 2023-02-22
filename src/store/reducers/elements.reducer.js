import { PRODUCTS } from '../../constants/data/index';
import { elementTypes } from '../types';

const { SELEECT_ELEMENT } = elementTypes;

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const elementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELEECT_ELEMENT: {
      return {
        ...state,
        selected: state.elements.find((element) => element.id === action.elementId),
      };
    }
    default:
      return state;
  }
};

export default elementReducer;
