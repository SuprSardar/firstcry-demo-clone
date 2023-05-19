import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import { $ } from "./utilities/index.js";
import { store } from "./store/index.js";
// import { persistor, store } from "./store/index.js";

import App from "./App.jsx";
import ErrorBoundary from "./components/errorBoundary/index.jsx";

createRoot($("#root")).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
