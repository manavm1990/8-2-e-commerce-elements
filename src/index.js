import ProductCard from "./components/product/card.js";
import catalog from "./db/catalog.js";
import UserTable from "./components/user-table/index.js";
import users from "./db/users.js";

/**
 * Render the product cards.
 
* Generates an array of product card elements from the catalog.
 *
 * This code takes each product from the catalog and creates a product card element for it.
 * The `catalog` is an array of product objects, and for each product, the `ProductCard` function
 * is called to create a card element representing that product.
 *
 * We can call `map` on any array. 
 * We can transform each element of an array into another element
 * simply by applying a function to it.
 * 
 * So, we ➿ over the `catalog`. We refer to each product as `product` (or any name).
 * We call the `ProductCard` function with the `product` as an argument...
 */
const productCards = catalog.map((product) => ProductCard(product));
console.info(productCards.join("\n"));

// TODO: Render a table of users. Hint: See the 'database' of users...

console.info(UserTable(users));
