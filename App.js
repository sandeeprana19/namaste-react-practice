import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "e" }, [
    React.createElement("h1", { key: "a" }, "This is Namaste React 🚀"),
    React.createElement("h2", { key: "b" }, "I'm a h2 tag."),
  ]),
  React.createElement("div", { id: "child2", key: "f" }, [
    React.createElement("h1", { key: "c" }, "I'm a h1 tag."),
    React.createElement("h2", { key: "d" }, "I'm a h2 tag."),
  ]),
]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
