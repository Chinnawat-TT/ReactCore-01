/* <header class="container header">
    <!-- ==== NAVBAR ==== -->
    <nav class="nav">
        <div class="logo">
            <h2>Devkit.</h2>
        </div>

        <div class="nav_menu" id="nav_menu">
            <ul class="nav_menu_list">
                <li class="nav_menu_item">
                    <a href="#" class="nav_menu_link">account</a>
                </li>
                <li class="nav_menu_item">
                    <a href="#" class="nav_menu_link">about</a>
                </li>
                <li class="nav_menu_item">
                    <a href="#" class="nav_menu_link">service</a>
                </li>
                <li class="nav_menu_item">
                    <a href="#" class="nav_menu_link">contact</a>
                </li>
            </ul>
        </div>
    </nav>
</header> */
// #1 React : CreateElement
const textA4=React.createElement("a",{href:"#",class:"nav_menu_link"},"contact");
const Li4=React.createElement("li",{className:"nav_menu_item"},textA4);
const textA3=React.createElement("a",{href:"#",class:"nav_menu_link"},"service");
const Li3=React.createElement("li",{className:"nav_menu_item"},textA3);
const textA2=React.createElement("a",{href:"#",class:"nav_menu_link"},"about");
const Li2=React.createElement("li",{className:"nav_menu_item"},textA2);
const textA1=React.createElement("a",{href:"#",class:"nav_menu_link"},"account");
const Li1=React.createElement("li",{className:"nav_menu_item"},textA1);
const ul=React.createElement("ul",{className:"nav_menu_list"},Li1,Li2,Li3,Li4);
const div2=React.createElement("div",{class:"nav_menu" ,id:"nav_menu"},ul);

const h2=React.createElement("h2",null,"Devkit.");
const div1=React.createElement("div",{className:"logo"},h2);
const nav=React.createElement("nav",{className:"nav"},div1,div2);
const header=React.createElement("header",{className:"container header"},nav);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(header);
