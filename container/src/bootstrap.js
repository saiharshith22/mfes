import { mount as productsMount } from "productsApp/ProductsIndex";
import { mount as cartMount } from "cartApp/CartShow";

console.log("container");

productsMount(document.querySelector("#my-products"));

cartMount(document.querySelector("#my-cart"));
