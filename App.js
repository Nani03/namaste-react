import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React! 🚀"
);

const Title = () => {
  return <h1>This is the title</h1>
}

const random = Math.random() * 100
const Heading = () => {
  return (
    <div> 
      <Title />
      {Title()}
      {random}
      <h1 id="heading">Hello World from React! JSX 🚀</h1>
    </div>
  );
};
const jsxHeading = <h1 id="heading">Hello World from React! JSX 🚀</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
