/* <li class="nav_menu_item">
    <a href="#" class="nav_menu_link">account</a>
</li> */


// #1 React : CreateElement
const textA=React.createElement("a",{href:"#",class:"nav_menu_link"},"account");
const textLi=React.createElement("li",{className:"nav_menu_item"},textA);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(textLi);
