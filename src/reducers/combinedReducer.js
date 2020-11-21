import newsCategoryReducer from './newsCategoryReducer';
import { combineReducers} from 'redux';

const allReducers = combineReducers({
    newsCategory: newsCategoryReducer
});

export default allReducers;