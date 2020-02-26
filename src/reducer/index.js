import { combineReducers } from 'redux';
import contacts from '../components/contact/reducer/contact-reducer';

export default combineReducers({
    contacts: contacts
});