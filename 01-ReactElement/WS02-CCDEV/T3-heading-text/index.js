/* <h1 class="main-heading">
    Welcome to <span>Codecamp.</span>
    <br />
    Develop anything.
</h1> */
// #1 React : CreateElement
const textDev="Develop anything.";
const textWelcome="Welcome to";
const br=React.createElement("br","null");
const span=React.createElement("span",null,"Codecamp");
const textH1=React.createElement("h1",{className:"main-heading"},textWelcome,span,br,textDev);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(textH1);