import faker from "faker";

const mount = (el) => {
  let products = "";
  // hi there hello world
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  console.log("remote app");
  // document.querySelector("#dev-products").innerHTML = products;
  el.innerHTML = products;
};

// When we set an id to div and render our code in that div, there can be a situation like Container app might not have the div with desired id. We cannot assume like there will a div with that id.
//  so we need to have seperate implementations to run our code in remote app and in container app.
//  in remote app we need to immediately render our app into this "el" element. but in container app, we might not need to render this immediately. in container there will be many remote apps and we need to dynamically render this app when it is required.

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  // assuming our container doesn't have an element with id "dev-products"
  if (el) {
    mount(el);
  }
}

// we donot want to render this app immediately
// this mount can be imported by container app and call this mount function whereever the container wants to show this products list element on the screen.

export { mount };
