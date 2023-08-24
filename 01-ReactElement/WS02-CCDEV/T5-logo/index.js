/* <div class="logo">
    <h2>CodeCamp</h2>
</div> */

// #1 React : CreateElement
const textH2=React.createElement("h2",null,"Codecamp");
const myDiv3= React.createElement("div",{className:"logo"},textH2);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(myDiv3);