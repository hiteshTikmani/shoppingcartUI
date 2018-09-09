import { combineReducers } from 'redux';
import RemoveReducer from './reducer_remove';
import PopupReducer from './popup_reducer';

const rootReducer = combineReducers ({
    remove : RemoveReducer,
    popup : PopupReducer
});

export default rootReducer;