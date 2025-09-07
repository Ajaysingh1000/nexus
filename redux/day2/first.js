
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import Create from "./app";
function App() {
    return (
        <Provider stores={store}>
            <h1>hello</h1>
        </Provider>
    );
}

root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);