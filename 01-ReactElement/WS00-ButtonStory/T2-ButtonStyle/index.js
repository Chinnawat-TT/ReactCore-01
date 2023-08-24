// #1 React : CreateElement
/* <button class="btn">Button</button> */

const btn = React.createElement("button",{className : "btn"},"Button");
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task

root.render(btn);