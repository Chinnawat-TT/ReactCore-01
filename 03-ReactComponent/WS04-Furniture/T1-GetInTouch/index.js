// #1 Write Your Function Component
function GetInTouch() {
  return (
    <div classname="textContact">
      <h2>Get In Touch With Us</h2>
      <h4>
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </h4>
    </div>
  );
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<GetInTouch/>);
