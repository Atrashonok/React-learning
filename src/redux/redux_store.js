import dialogsPageReducer from "./dialogsPageReducer";
import friendsPageReducer from "./friendsPageReducer";
import profilePageReducer from "./profilePageReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  dialogsPage: dialogsPageReducer,
  friendsPage: friendsPageReducer,
  profilePage: profilePageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

let store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware));
//   ,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

window.store = store;

export default store;
