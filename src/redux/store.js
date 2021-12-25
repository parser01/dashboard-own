import { createStore, combineReducers } from 'redux';
import dashboardReducer from './dashboard-reducer';

const reducers = combineReducers({
   dashboard: dashboardReducer
});

const store = createStore(reducers);
window.store = store;
export default store;
