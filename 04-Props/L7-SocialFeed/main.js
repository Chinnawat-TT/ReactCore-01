const post = [
    { id: 1, message: "Happy new year", date: "1/01/2020", name: "John" },
    { id: 2, message: "Programing is fun", date: "2/01/2020", name: "Jack" },
    { id: 3, message: "I here tu", date: "3/01/2020", name: "Sarah" },
  ];
  
  function ArrayPost (props){

    const {message,date,name}=props
  return <div className ="card">
        <h4>{message}</h4>
        <div className ="card__para">
        <p>Author:{name}</p>
        <p>{date}</p>
        </div>
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

