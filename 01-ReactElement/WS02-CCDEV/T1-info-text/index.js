/* <p class="info-text">
    Build a beautiful, modern website with flexible components built from scratch.
</p> */


const textP="Build a beautiful, modern website with flexible components built from scratch.";
// #1 React : CreateElement
const infoText =React.createElement("p",{className:"info-text"},textP);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(infoText);