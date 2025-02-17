import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        connected: false,
    },
    reducers: {
      connect: (currentstate, action) => {
        currentstate.token = action.payload
        currentstate.connected = true
      },
      disconnect: (currentstate) => {
        currentstate.token = null
        currentstate.connected = false
      }
    },
  });

export const {connect, disconnect} = authSlice.actions;