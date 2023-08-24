function Subject(props){
 return <h1>Hello {props.name} </h1>

}

// FunctionComponent == My Custom HTML Tag
function App(){
return  (<div>

        <Subject name ="React"/>
        </div>
)}

// JS : APP()
// React : <APP/>

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
