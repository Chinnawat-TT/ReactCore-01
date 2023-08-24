// ให้สร้าง Component ชื่อ ProductItem
// ใน Component แสดงข้อมูลดังนี้
// tag <h1> แสดงชื่อ product
// tag <h2> แสดง price ของ product
// tag <p> แสดง description ของ product
// ชื่อ price และ description ของ product ถูกส่งมาทาง props
// - ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ทั้งสามเป็นค่าอะไรก็ได้ 

function ProductItem (props){
    return (<div>
        <img src={props.soure}></img>
        <h1>{props.nameProduct}</h1>
        <h2>price: {props.priceProduct}</h2>
        <p>description : {props.descriptionProduct} </p>
    </div>)
}

function App(){
    return (<div>
        <ProductItem soure ="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP851/iphone13-colors-480_2x.png" nameProduct="iPhone 13" priceProduct={29900} descriptionProduct="iPhone 13
Super Retina XDR display6.1inch (diagonal) allscreen OLED display2532by1170-pixel resolution at 460 ppi"/>
    </div>)
}
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);
