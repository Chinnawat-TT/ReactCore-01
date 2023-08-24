// #1 Write Your Function Component
function Pagination (props){
    return  <a href="#"className="a-text" >{props.text}</a>   
}
function App(){
 return    (   
        <div className ="text-1">
            <Pagination text="1"/>
            <Pagination text="2"/>
            <Pagination text="3"/>
            <Pagination text="Next"/>
        </div>
 )
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App/>);
