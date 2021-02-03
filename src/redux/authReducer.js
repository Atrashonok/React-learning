import { authAPI } from "../api/api";

const SET_USER_DATA = "FOLLOW";

export const onSetAuthUser = (userData) => ({
  type: SET_USER_DATA,
  userData,
});

export const getAuthUserThunkCreator = () => (dispatch) => {
  authAPI.getAuthUser().then((response) => {
    if (response.resultCode === 0) {
      dispatch(onSetAuthUser(response.data));
    }
  });
};

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.userData, isAuth: true };
    }

    default:
      return state;
  }
};

export default authReducer;
