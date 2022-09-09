import{legacy_createStore as createStore, combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import{todos} from './todos/reducers';
const reducers = {
    todos,
};
const persistConfig={
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2 // tells redux persist how to reconcile the initial and stored state of our application
}
const rootReducer = combineReducers(reducers) ;//it will put our reducers into the form that we can pass to the create store function that we importedSource
const persistedReducer = persistReducer(persistConfig, rootReducer); // tells reduxx where and how to store data
export const configureStore = () =>
createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),);