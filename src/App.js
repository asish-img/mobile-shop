import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { BrowserRouter, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Route path="/" exact component={ProductList} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
