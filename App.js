/*
<div id="parent">
  <div id="child1">
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>
*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", {key: "child1-h1"}, "I'm h1 tag."),
    React.createElement("h2", {key: "child1-h2"}, "I'm h2 tag."),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", {key: "child2-h1"}, "I'm h1 tag."),
    React.createElement("h2", {key: "child2-h2"}, "I'm h2 tag."),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
