import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../src/styles.css";
import { Provider } from "react-redux";
import { Store } from "./Context/Store.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
