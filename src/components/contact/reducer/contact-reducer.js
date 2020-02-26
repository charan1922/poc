import * as actionTypes from '../constants/contact-constant';

export default (state = [], action) => {
    switch (action.type){
      
      case actionTypes.CREATE_NEW_CONTACT:
      return [
        ...state,
        Object.assign({}, action.data)
      ];

      
      case actionTypes.REMOVE_CONTACT:
        return state.filter((data, i) => i !== action.id);
        default:
              return state;
    }
  };

  