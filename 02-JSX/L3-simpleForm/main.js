// ให้สร้าง tag <label> และ <input>
// tag <input> มี class ชื่อ username มี id คือ username และมี attribute ชื่อ name ให้มีค่าเท่ากับ username
// tag <label> ให้ใส่ข้อความ Username และมี attribute ชื่อ for ให้มีค่าเท่ากับ id ของ tag <input>
// ให้ render หน้า web เพื่อแสดง tag ทั้งสองในแบบ JSX


// #1 React : JSX 

//<input/> self closing (no need chlid)


// #2 ReactDOM : createRoot
const domRoot= document.getElementById("root");
const root =ReactDOM.createRoot(domRoot);
// // #3 ReactDOM : TakeOver for Render Task
const app=(
    <div>
        <label htmlFor="username">Username</label>
        <input className="username" id="username" name="username" />    
    </div>
)

root.render(app);