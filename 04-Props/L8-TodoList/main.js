// จงสร้าง App Todo List
function Looptask(props){
return <div className="task">
    <p>Task {props.number}</p>
    <input type="submit" value="Edit"></input>
    <input type="submit" value="Delete"></input>
</div> 
};

function Todolist (){
    return <div>
        <input className="input"></input>
        <input className="add" type="submit" value="Add"></input>
        <Looptask number="1"/>
        <Looptask number="2"/>
        </div>
};

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<Todolist/>);
