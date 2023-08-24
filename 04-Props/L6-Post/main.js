// ให้สร้างตัวแปร Array เก็บข้อมูล Post ที่เป็น Object มี key คือ id, message, วันที่ Post, ชื่อคนโพสต์
// นำ ArrayPost มา Render ใน list แล้วแสดงบนหน้า UI

const post = [
  { id: 1, message: "i love tu", date: "1/01/2020", name: "apple" },
  { id: 2, message: "i here tu", date: "2/01/2020", name: "bird" },
  { id: 3, message: "i sad tu", date: "3/01/2020", name: "cat" },
];

function ArrayPost (props){
return <div>
      <h4>{props.name}</h4>
      <p>Post : {props.message} date: {props.date}</p>
    </div>

}

function App(){
    return <div>
        {post.map((person)=>(<ArrayPost name={person.name} message={person.message} date={person.date}/>))}
        </div>
}
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App/>);