import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Routes from "./routes/routes";

ReactDOM.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>,
    document.getElementById("root")
);
