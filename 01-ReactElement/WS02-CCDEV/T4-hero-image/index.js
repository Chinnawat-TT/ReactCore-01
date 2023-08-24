/* <div class="team_img_wrapper">
    <img
        src="https://img.freepik.com/free-vector/team-business-people-putting-hands-up-together_74855-19906.jpg?w=1380&amp;t=st=1692544217~exp=1692544817~hmac=6253a9b25f1f86e30715b25c4b736446b802dc9bd3c4990c9ffa640f327f1f04"
        alt="team-photo"
    />
</div> */

// #1 React : CreateElement
const img= React.createElement("img",{src:"https://i.ibb.co/mhcL2P6/image.png",alt:"team-photo"});
const myDiv2=React.createElement("div",{className:"team_img_wrapper"},img);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(myDiv2);