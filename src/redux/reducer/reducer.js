import {combineReducers} from 'redux';
import arrayWordReducer from './arrayWordReducer';
import filterStatusReducer from './filterStatusReducer';
import isAddingProducer from './isAddingProducer';

const reducer = combineReducers({
    arrayWord: arrayWordReducer,
    isAdding: isAddingProducer,
    filterStatus: filterStatusReducer
})

export default reducer;