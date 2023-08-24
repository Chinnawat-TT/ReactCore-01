// #1 Write Your Function Component
function Navbar (){
    return (
    <div className="nav_menu">
        <ul className = "menu_lists">
        <li className = "nav_menu_item">
            <a href="#" className="nav_menu_link">Home</a>
        </li>
        <li className = "nav_menu_item">
            <a href="#" className="nav_menu_link">Shop</a>
        </li>
        <li className = "nav_menu_item">
            <a href="#" className="nav_menu_link">About</a>
        </li>
        <li className = "nav_menu_item">
            <a href="#" className="nav_menu_link">Contact</a>
        </li>
        </ul>
    </div>
    )
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<Navbar/>);
