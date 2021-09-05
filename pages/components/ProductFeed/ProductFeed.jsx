import Product from "./Product";
import Image from "next/image";
import { useSelector } from "react-redux";
const ProductFeed = (props) => {
  const { products } = props;
  if (!products) {
    return <p>Loading....</p>;
  }
  return (
    <div className="xl:mx-5 mx-2 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:-mt-52">
      {products.slice(0, 4).map((item) => (
        <Product key={item.id} products={item} />
      ))}

      <div className="md:col-span-2">
        {products.slice(4, 5).map((item) => (
          <Product key={item.id} products={item} />
        ))}
      </div>
      {products.slice(5, products.length - 1).map((item) => (
        <Product key={item.id} products={item} />
      ))}

      <div className="md:col-span-4">
        {products.slice(products.length - 1, products.length).map((item) => (
          <Product key={item.id} products={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeed;
// export async function getStaticProps({ products }) {
//   return {
//     product: products,
//     fallback: false,
//   };
// }
