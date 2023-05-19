import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import appSlice from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);
