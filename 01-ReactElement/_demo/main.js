console.log( "Learn React");

// Create Element
// const btn = document.createElement("button");
// btn.innerText="cart";
// btn.classList="red";

// Render

// const root = document.getElementById("root");
// root.appendChild(btn);

// ## React
// React === Global Object (via CDN Link)
// console.log(React)

// Create ReactElement   ==> return  ReactElement ==Node == HTML element(Virtual-DOM) == JS Obj
// ReactElement = JS Object ที่เอาไป render ใน browser ได้
// สร้างโดย React.createElement( tag, propsObj,...Child)

// <button class = "red">cart<button> tag type ประเภทแท็ก ,props(สิ่งที่อยู่ระหว่างเเท็กเปิด),chlidren สิ่งที่อยู่ข้างในเเท็ก
// <button><button>  tag เปิดไม่ได้กำนหนด props มา ใส่ props=null ไม่ใส่ก็ได้
const  reactElement = React.createElement("button",{className : "blue"},"cart"); // สร้าง ui  
// console.dir(reactElement);

// ReactDOM  : Render to Browser

// pick DOM  
const domRoot = document.getElementById("root");   // realDOM

// take over(action) สร้าง root
const root = ReactDOM.createRoot(domRoot); 

//  render คือ reactElement
root.render(reactElement);

//-----------------------------------------------------------------------------------------
/* <button>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span>Button</span>
</button> */
// const span1 = React.createElement("span",null)
// const span2 = React.createElement("span",null)
// const span3 = React.createElement("span",null)
// const span4 = React.createElement("span",null)
// const span5 = React.createElement("span",null,"Button")


// const parent = React.createElement("button", null ,span1,span2,span3,span4,span5)

//params3 => child 1
//params4 => child 2
//params5 => child 3
//paramsN => child N-2

//------------------------------------------------------------------------------------------