// ให้สร้างตัวแปรชื่อ height และ weight เก็บข้อมูลส่วนสูงและน้ำหนักตามลำดับ
// ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI
// ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h1>

// วิธีคำนวณ BMI ในการหาค่าดัชนีมวลกาย = น้ำหนักตัว [กิโลกรัม] ÷ ส่วนสูง [เมตร] ยกกำลังสอง
// #1 React : JSX
const height= 170 ;  // a
const weight= 60;   // b
function calcBMI(a,b){
    return b/((a/100)**2)
}

// #2 ReactDOM : createRoot
const domRoot= document.getElementById("root");
const root =ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
const BMI=(
    <div>
        <h1> My BMI ! </h1>
        <h3>{calcBMI(height,weight).toFixed(2)}</h3>
    </div>
)

root.render(BMI);