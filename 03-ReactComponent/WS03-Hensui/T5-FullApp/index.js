// #1 React : CreateElement
function Hero(){
    return (
        <div className="text-hero">
            <img src="https://i.ibb.co/9VZRsxF/pexels-cottonbro-studio-3296546-1.png"></img>

        </div>
     )
}
function  ContactUS(){
    return <form >
         <input placeholder="email" className="text-contactEmail"></input>
         <input type="submit" className ="text-contactSubmit"></input>
 
     </form>
 }
function InfoText(){
    return <div className="text-info" >
         <p>Welcome to Hensui, the newest addition to the vibrant Los Angeles dining scene! Our restaurant is dedicated to bringing you the most authentic and delicious Japanese cuisine. </p>
         <br/>
         <p>Stay tuned for our grand opening date, sign up with your e-mail address to get notified.</p>
         </div>
 }
function Header (){
    return (
        <div className ="head">

            <h1 className="text-header" >Discover authentic Japanese cuisine in LA. Opening Soon!</h1>
            <InfoText/>
            <ContactUS/>
        </div>
    )
}
function App (){
    return (
        <div>
            <div className ="text-app">
            <Header/>
            <Hero/>

            </div>
        </div>
    )
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<App/>);