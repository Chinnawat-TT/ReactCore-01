// #1 Write Your Function Component
function  ContactUS(){
   return <from>
        <input placeholder="email"></input>
        <input type="submit"></input>

    </from>
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<ContactUS/>);