import { configureStore } from "@reduxjs/toolkit";
import { advertReducer } from "./advert/advertSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: [""] /** template */,
};

const persistedReducer = persistReducer(persistConfig, advertReducer); /** template */

export const store = configureStore({
  reducer: {
    // advert: advertReducer,
    advert: persistedReducer /** template */,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
