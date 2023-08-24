/* <ul class="nav_menu_list">
    // -------------------------------
    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">account</a>
    </li>
    // -------------------------------
    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">about</a>
    </li>

    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">service</a>
    </li>

    <li class="nav_menu_item">
        <a href="#" class="nav_menu_link">contact</a>
    </li>

</ul> */

//Dry : Dont Repeat yourself
// FN : (text) => ReactElement

// #1 React : CreateElement
// const textA4=React.createElement("a",{href:"#",class:"nav_menu_link"},"contact");
// const Li4=React.createElement("li",{className:"nav_menu_item"},textA4);
// const textA3=React.createElement("a",{href:"#",class:"nav_menu_link"},"service");
// const Li3=React.createElement("li",{className:"nav_menu_item"},textA3);
// const textA2=React.createElement("a",{href:"#",class:"nav_menu_link"},"about");
// const Li2=React.createElement("li",{className:"nav_menu_item"},textA2);
// const textA1=React.createElement("a",{href:"#",class:"nav_menu_link"},"account");
// const Li1=React.createElement("li",{className:"nav_menu_item"},textA1);
// const ul=React.createElement("ul",{className:"nav_menu_list"},Li1,Li2,Li3,Li4);

function createNavElement(text) {
    const anchorTag = React.createElement('a', { href: '#', className: 'nav_menu_link' }, text);
    // const navItemElement = React.createElement('li', { className: 'nav_menu_item' }, anchorTag);
    // return navItemElement
    return React.createElement('li', { className: 'nav_menu_item' }, anchorTag);
}

const navItemElement_1 = createNavElement('account');
const navItemElement_2 = createNavElement('about');
const navItemElement_3 = createNavElement('service');
const navItemElement_4 = createNavElement('contact');
const lists = [navItemElement_1, navItemElement_2, navItemElement_3, navItemElement_4];

const navListElement = React.createElement('ul', { className: 'nav_menu_list' }, ...lists);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(navListElement);