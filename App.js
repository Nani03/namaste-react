const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React!"),
    React.createElement("p", { id: "paragraph" }, "This is a React paragraph"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
root.render(parent);
