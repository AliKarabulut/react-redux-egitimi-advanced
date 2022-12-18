import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy = [
  {
    id: "p1",
    price: 6,
    title: "my first dummy",
    description: "firsttt",
  },
  {
    id: "p2",
    price: 5,
    title: "my second dummy",
    description: "seccc",
  },
  {
    id: "p3",
    price: 3,
    title: "my 3 dummy",
    description: "33333",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy.map((pro) => (
          <ProductItem
            key={pro.id}
            id={pro.id}
            title={pro.title}
            price={pro.price}
            description={pro.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
