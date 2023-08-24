// ให้สร้าง Component ชื่อ Profile
// ใน Component ประกอบด้วย 
// tag <h1> แสดงชื่อ John Doe
// tag <h2> แสดงอายุมีค่าเท่ากับ 27
// - ให้ render Profile ในหน้า web
//--------------------------------------------
function Profile (props){
    return <div>
        <h1>Fullname : {props.name}</h1>
        <h2>Age : {props.age}</h2>
    </div>
}
//--------------------------------------------
function App(){
    return  <div>
        <Profile name="John" age="35"/>
        <Profile name="jane" age ="30"/>
    </div>
}
//---------------------------------------------
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);