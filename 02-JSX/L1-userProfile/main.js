// ให้สร้างตัวแปรชื่อ fullName เก็บชื่อจริง นามสกุลของตัวเอง #
// ให้สร้างตัวแปรชื่อ birthYear เก็บปีที่เกิดของตัวเอง #
// ให้ render หน้า web โดยใช้ JSX ดังนี้ #
// แสดงชื่อ fullName ใน tag <h1> #
// แสดงอายุใน tag <p> (ให้เอาปีปัจจุบันลบด้วยปีเกิด) #

// #1 React : JSX
const fullName = "Chinnawat Sangrung";
const birthYear= 1993;
const persentYear = 2023;
let textColorBlue ="text-blue"


// #2 ReactDOM : createRoot
const domRoot= document.getElementById("root");
const root =ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task

const profile=(
    <div>
        <h1 className = "text-red">Fullname : {fullName}</h1>
        <p className = {textColorBlue}>Age : {persentYear-birthYear}</p>
    </div>
)
root.render(profile);