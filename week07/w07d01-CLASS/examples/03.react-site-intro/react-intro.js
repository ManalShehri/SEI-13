// Here we find the elemnt in the EXISTING DOM where we want to root our application
const rootElement = document.getElementById("root");

// Here we create a fresh React Element
const element = React.createElement(
  "div",
  { className: "container" },
  "I am a basic React element"
);

// Here we attache the whole App to the EXISTING DOM
ReactDOM.render(element, rootElement);
