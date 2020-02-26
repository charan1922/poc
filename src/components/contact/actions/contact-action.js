import * as actionTypes from '../constants/contact-constant';

export const createContact = (data) => {
    return {
      type: actionTypes.CREATE_NEW_CONTACT,
      data
    }
  };
  export const deleteContact = (id) => {
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
}