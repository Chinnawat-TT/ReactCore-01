// #1 Write Your Function Component
function SearchBar(){
return (
    <div className ="search_bar">
        <input type="text" placeholder="Search.."/>
        <img src="https://i.ibb.co/8Bych3q/icons8-search-120.png"></img>

    </div>
)

}

// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<SearchBar/>);
