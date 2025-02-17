import { configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { api } from "./services/requestsAPI";
import { authSlice } from "./components/Form/AuthSlice";
import { profileSlice } from "./pages/Profil/profilSlice";

export let state = {
    auth: {},
    profilData: {},
}

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        [api.reducerPath]: api.reducer,
        auth: authSlice.reducer,
        profilData: profileSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
})