# E-Commerce Elements

As the name implies, we will create some functional elements of an 'e-commerce' website.

## Function Components

We will create the following components:

- **Product Card**: A card that shows the product image, name, price, and a button to add the product to the cart.
- **User Table**: A table of users, with their name, email, and a button to delete the user.

These will contained in `src/components` folder. These will be **function components**. Here's a suggested architecture:

```shell
src/
  components/
    product/
        card.js
    user-table/
        index.js
```

In this architecture 🏗️, we create a separate directory 📁 for each component. We keep an `index.js` for each one.
Now, within these files, since they are function components, we will name them like: `export default function ProductCard() { ... }`. Note that we will only export one component per file, hence we will use `default` export.

This means that for the import side of things, we **do not** destructure with `{}`. We will import like this: `import ProductCard from '.components/product/card';`.

If you check the, the [product card component README,](./src/components/product/README.md) it is already done for you, as an example. Feel free to modify it as you see fit, and use it as a basis for completing the other components.

You can also reference [`index.js`](./src/index.js) to see how I have implemented that component and used it render the catalog.

## Utility Functions

We will create some utility functions that could be useful for an e-commerce application. You may use ESM **named exports** and keep all of the functions in a single file, `src/utils.js`.

Here are the functions we will create:

- **`formatPrice`**: A function that takes a number and returns a string formatted as a price. For example, `formatPrice(10)` should return `"$10.00"`.
- **`calcPriceWithTax`**: A function that takes a price and a tax rate, and returns the price with tax included. For example, `calcPriceWithTax(10, 0.1)` should return `11`.

### Stretch Goals (Optional - maybe some Extra Credit?)

- **`getCustomers`**: In our ['users database'](./src/db/users.js), each use has a `role` property. This function should return an array of users that have a role of `'Customer'`, not `'Admin'`. Referencing the 'database', there are currently 4️⃣ customers. **Note:** This is a difficult task given the limited amount of topics that we have covered, so it's fine if it's not perfect.
