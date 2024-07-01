import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "childA" }, [
    React.createElement("h1", { id: "child11" }, "i am child no 1"),
    React.createElement("h2", { id: "child21" }, "i am child no 2"),
  ]),
  React.createElement("div", { id: "childB" }, [
    React.createElement("h1", { id: "child12" }, "i am child no 1"),
    React.createElement("h2", { id: "child22" }, "i am child no 2"),
  ]),
]);

// const header = React.createElement("h1", {}, "hello world!!! ");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
