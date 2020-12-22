import dialogsPageReducer from "./dialogsPageReducer";
import friendsPageReducer from "./friendsPageReducer";
import profilePageReducer from "./profilePageReducer";
import { combineReducers, createStore } from "redux";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
  dialogsPage: dialogsPageReducer,
  friendsPage: friendsPageReducer,
  profilePage: profilePageReducer,
  usersPage: usersPageReducer,
});

let store = createStore(
  reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
