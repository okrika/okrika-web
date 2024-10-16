import { allProducts } from "..";
import ProductCard from "../../../components/product-card";

export default function AllProducts() {
  return (
    <section className="w-full mt-8">
      <h1 className="text-4xl font-bold mb-10">All Products</h1>
      <div className="flex items-center justify-between space-y-6 flex-wrap">
        {allProducts.map(({ name, imgUrl, price, likes }) => (
          <ProductCard
            className="w-1/4"
            name={name}
            imgUrl={imgUrl}
            price={price}
            likes={likes}
          />
        ))}
      </div>
    </section>
  );
}
