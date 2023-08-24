// ให้สร้างตัวแปร Array เก็บชื่อเพื่อน
// นำ Array ชื่อเพื่อนมา Render ใน list แล้วแสดงบนหน้า UI

const friendLists=["apple","boy","cat","dan"]

function FriendName(props){
    return <div>
        <h1>Name : {props.alt}</h1>
    </div>
}
function App(){
    return <div>
        {friendLists.map((name)=> <FriendName alt={name}/>)}
    </div>
}
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);