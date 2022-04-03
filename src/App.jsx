import React from "react";
import { render } from "react-dom";
import "./index.css";

import Layout from "./layout/Layout";

const App = () => <Layout />;

render(<App />, document.getElementById("app"));
