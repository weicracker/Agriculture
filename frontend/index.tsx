import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./Hello";

ReactDOM.render(
    <Hello compiler="typescript" framework="React" />,
    document.getElementById("root")
);