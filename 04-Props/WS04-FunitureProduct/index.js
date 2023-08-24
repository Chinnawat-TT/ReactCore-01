const products = [
  {
    id: 1,
    product_name: "Sprouts - Bean",
    price: "$3.37",
    description: "In hac habitasse platea dictumst.",
    discount: 41,
    source : "https://down-th.img.susercontent.com/file/f607d6462bda1816bf0c0993197ac4a3"
  },
  {
    id: 2,
    product_name: "Cinnamon Rolls",
    price: "$3.52",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    discount: 50,
  },
  {
    id: 3,
    product_name: "Flour - Bread",
    price: "$8.97",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    discount: 49,
  },
  {
    id: 4,
    product_name: "Nantucket Cranberry Juice",
    price: "$9.30",
    description: "Vestibulum sed magna at nunc commodo placerat.",
    discount: 29,
  },
  {
    id: 5,
    product_name: "Bread - 10 Grain",
    price: "$7.68",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    discount: 47,
  },
  {
    id: 6,
    product_name: "Oneshot Automatic Soap System",
    price: "$7.80",
    description: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    discount: 23,
  },
  {
    id: 7,
    product_name: "Cleaner - Lime Away",
    price: "$3.70",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    discount: 28,
  },
  {
    id: 8,
    product_name: "Beer - Upper Canada Light",
    price: "$4.36",
    description:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    discount: 25,
  },
  {
    id: 9,
    product_name: "Turkey Leg With Drum And Thigh",
    price: "$1.49",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    discount: 48,
  },
  {
    id: 10,
    product_name: "Coffee - Beans, Whole",
    price: "$9.38",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    discount: 44,
  },
  {
    id: 11,
    product_name: "Container - Hngd Cll Blk 7x7x3",
    price: "$6.86",
    description:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    discount: 16,
  },
  {
    id: 12,
    product_name: "Lobster - Tail, 3 - 4 Oz",
    price: "$8.17",
    description: "Proin risus.",
    discount: 43,
  },
  {
    id: 13,
    product_name: "Wine - Sake",
    price: "$2.18",
    description:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    discount: 39,
  },
  {
    id: 14,
    product_name: "Buttons",
    price: "$5.01",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    discount: 32,
  },
  {
    id: 15,
    product_name: "Beef - Short Ribs",
    price: "$5.40",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    discount: 33,
  },
  {
    id: 16,
    product_name: "Dc - Frozen Momji",
    price: "$4.21",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    discount: 24,
  },
  {
    id: 17,
    product_name: "Fish - Soup Base, Bouillon",
    price: "$4.15",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    discount: 49,
  },
  {
    id: 18,
    product_name: "Shrimp - Black Tiger 8 - 12",
    price: "$0.95",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    discount: 14,
  },
  {
    id: 19,
    product_name: "Wine - Acient Coast Caberne",
    price: "$5.59",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    discount: 11,
  },
  {
    id: 20,
    product_name: "Tabasco Sauce, 2 Oz",
    price: "$2.28",
    description:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    discount: 48,
  },
];

// #1 Write Your Function Component
function ArrayPost(props) {
  return (
    <div className="card">
        <img src={props.source}></img>
      <h4>{props.name}</h4>
      <div className="card__para">
        <p>$:{props.price}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className ="container">
      {products.map((data) => (
        <ArrayPost
          name={data.product_name}
          price={data.price}
          id={data.id}
          description={data.description}
          src={data.source}
        />
      ))}
    </div>
  );
}

// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task

root.render(<App />);
