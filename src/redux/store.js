
import { createStore, combineReducers } from 'redux';
import reducer from './reducer/reducer';


//tao reducer
// const reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'SHOW_ALL':
//             return { ...state, filterStatus: 'SHOW_ALL' };
//         case 'MEMORISED':
//             return { ...state, filterStatus: 'MEMORISED' };
//         case 'NEED_PRACTISE':
//             return { ...state, filterStatus: 'NEED_PRACTISE' };
//         case 'MEMORISED_CHANGE':
//             return {
//                 ...state,
//                 arrayWord: state.arrayWord.map(e => {
//                     if (e.id !== action.id) return e;
//                     return { ...e, memorized: !e.memorized }
//                 })
//             }
//             case 'MEANING_CHANGE':
//             return {
//                 ...state,
//                 arrayWord: state.arrayWord.map(e => {
//                     if (e.id !== action.id) return e;
//                     return { ...e, isShow: !e.isShow }
//                 })
//             }


//         case 'TOGGLE_ISADDING':
//             return {
//                 ...state,
//                 isAdding: !state.isAdding
//             }
//         case 'ADD_WORD':
//             return {
//                 ...state,
//                 arrayWord: [{
//                     id: state.arrayWord.length + 1,
//                     en: action.en,
//                     vn: action.vn,
//                     memorized: false,
//                     isShow: false,
//                 }].concat(state.arrayWord)
//             }

//     }
//     return state;
// };

//INDIVIDUAL REDUCER



//tao store
const store = createStore(reducer);

//Tich hop redux vao application

export default store;