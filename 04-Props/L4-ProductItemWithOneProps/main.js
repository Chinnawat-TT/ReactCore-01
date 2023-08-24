
function ProductItem (props){
    return (<div>
        <img src={props.data.soure}></img>
        <h1>Product: {props.data.nameProduct}</h1>
        <h2>price: {props.data.priceProduct}</h2>
        <p>description : {props.data.descriptionProduct} </p>
    </div>)
}
// const props ={data: {soure :"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP851/iphone13-colors-480_2x.png" ,nameProduct:"iPhone 13", priceProduct:"29900" ,
// descriptionProduct:"iPhone 13Super Retina XDR display6.1inch (diagonal) allscreen OLED display2532by1170-pixel resolution at 460 ppi"}}

function App(){
    return (<div>
        <ProductItem data ={{soure :"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP851/iphone13-colors-480_2x.png" ,nameProduct:"iPhone 13", priceProduct:"29900" ,
descriptionProduct:"iPhone 13Super Retina XDR display6.1inch (diagonal) allscreen OLED display2532by1170-pixel resolution at 460 ppi"}} />
    </div>)
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App/>);