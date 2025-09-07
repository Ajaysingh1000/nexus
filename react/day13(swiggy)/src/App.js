import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Restaurant from "./components/Restaurant";
import RestaurantMenu from "./components/RestaurantMenu";
import SecondaryHome from "./components/SecondaryHome";
import { store } from "./Stored/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<SecondaryHome />}>
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/city/jaipur/:id" element={<RestaurantMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

