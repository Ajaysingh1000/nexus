
import React from "react";
import ReactDOM from "react-dom/client";

import Counting from "./Counting";
import { Provider } from "react-redux";
import stores from "./Store";
import { reactslicer } from "./Slicer";
import CustomCounter from "./CustomCounter";


// provider ka use isliye kar raha hai ki wo sabko available karega

function App() {

    // console.log(stores);
    console.log(reactslicer);
    

    
    return (
        <Provider store={stores}>
            <div>
                <Counting />
                <br />
                <br />
                <br />
                <CustomCounter />
            </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);