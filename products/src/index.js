import faker from "faker";

let products = "";
// hi there hello world
for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}
console.log("remote app");
document.querySelector("#dev-products").innerHTML = products;
