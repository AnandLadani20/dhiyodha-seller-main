import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import user from "./User";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["user"]
};

const combined = combineReducers({ reducer, user });

const persistedReducer = persistReducer(persistConfig, combined);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

const persistor = persistStore(store);

export { store, persistor };
