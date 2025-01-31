import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
