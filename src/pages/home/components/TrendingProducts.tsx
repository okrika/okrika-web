import ProductCard from "../../../components/product-card";
import { Link } from "@tanstack/react-router";
import CircularArrowIcon from "../../../components/icons/CircularArrowIcon";
import { trendingProducts } from "..";
export default function TrendingProducts() {
  return (
    <section className="w-full mb-[180px]">
      <div className="flex w-full items-center justify-between mb-8">
        {" "}
        <h1 className="text-4xl font-bold">Trending Products</h1>{" "}
        <Link className="flex items-center space-x-2" to="/">
          <span>See all</span>
          <span>
            <CircularArrowIcon />
          </span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {trendingProducts.map(({ name, imgUrl, price, likes }) => (
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
