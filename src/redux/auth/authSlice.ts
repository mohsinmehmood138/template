import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loginUser: null,
    accessToken: null,
    authAccessToken: null,
    userFCMToken: null,
    refreshToken: {},
    isTokenValid: false,
    isWalkthrough: false,
  },
  reducers: {
    setRefreshToken: (state, action) => {
      state.refreshToken = action?.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action?.payload;
    },
    setAuthAccessToken: (state, action) => {
      state.authAccessToken = action?.payload;
    },
    setUserFCMToken: (state, action) => {
      state.userFCMToken = action?.payload;
    },
    setLoginUser: (state, action) => {
      state.loginUser = action?.payload;
    },
    setIsTokenValid: (state, action) => {
      state.isTokenValid = action?.payload;
    },
    setIsWalkthrough: state => {
      state.isWalkthrough = true;
    },
    logOut: state => {
      state.accessToken = null;
      state.loginUser = null;
      state.refreshToken = {};
    },
  },
});

export const {
  setRefreshToken,
  logOut,
  setAccessToken,
  setAuthAccessToken,
  setUserFCMToken,
  setLoginUser,
  setIsTokenValid,
  setIsWalkthrough,
} = authSlice.actions;

export default authSlice.reducer;
