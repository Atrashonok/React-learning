import dialogsPageReducer from "./dialogsPageReducer";
import friendsPageReducer from "./friendsPageReducer";
import profilePageReducer from "./profilePageReducer";
import {combineReducers, createStore} from 'redux'



let reducers = combineReducers({
  dialogsPage: dialogsPageReducer,
  friendsPage: friendsPageReducer,
  profilePage: profilePageReducer,
});

let store = createStore(reducers);

export default store;