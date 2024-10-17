import Button from "../../components/button/Button";
import HomeLayout from "../../layout/HomeLayout";
import AvatarGroup from "/assets/images/avatar-group.jpg";
import StarIcon from "../../components/icons/StarIcon";
import HairPin from "/assets/images/floral-hair-pin.png";
import BalanceShoe from "/assets/images/sneakers.png";
import Jordan from "/assets/images/jordan.png";
import Iphone from "/assets/images/iphone.png";
import TrendingProducts from "./components/TrendingProducts";
import Laptop from "/assets/images/laptop.png";
import AllProducts from "./components/AllProducts";
import TickIcon from "../../components/icons/TickIcon";
import Hisense from "/assets/images/hisense.png";
import Pavillion from "/assets/images/pavillion.png";
import MakeUp from "/assets/images/makeup-kit.png";

export type TProducts = {
  name: string;
  price: number;
  imgUrl: string;
  likes: string;
}[];
export const trendingProducts = [
  { name: "Floral Hair Pin", price: 4000, imgUrl: HairPin, likes: "1.5k" },
  {
    name: "New Balance Sneakers",
    price: 7500,
    imgUrl: BalanceShoe,
    likes: "765"
  },
  { name: "Nike Jordan Shoes", price: 15000, imgUrl: Jordan, likes: "500" },
  { name: "Iphone 11 Pro", price: 120000, imgUrl: Iphone, likes: "1.3k" }
];
export const allProducts: TProducts = [
  { name: "Dell Xpire Laptop", price: 350000, imgUrl: Laptop, likes: "197" },
  {
    name: "Hisense Refrigerator",
    price: 120000,
    imgUrl: Hisense,
    likes: "109"
  },
  {
    name: "Hp Pavillion Laptop",
    price: 300000,
    imgUrl: Pavillion,
    likes: "129"
  },
  { name: "Full make-up kit", price: 25000, imgUrl: MakeUp, likes: "190" },
  { name: "Skirt and shirt", price: 16000, imgUrl: Laptop, likes: "150" },
  { name: "Casual Office Shoes", price: 12000, imgUrl: Laptop, likes: "69" },
  {
    name: "Ergonomic Working Chair",
    price: 55000,
    imgUrl: Laptop,
    likes: "100"
  },
  { name: "Iphone 13", price: 325000, imgUrl: Laptop, likes: "151" },
  { name: "Reading Table", price: 50000, imgUrl: Laptop, likes: "40" },
  { name: "12pcs set of pots", price: 120000, imgUrl: Laptop, likes: "14" },
  { name: "Samsung S10+", price: 105000, imgUrl: Laptop, likes: "52" },
  { name: "Macbook Charger Type C", price: 25000, imgUrl: Laptop, likes: "23" }
];
export default function Home() {
  return (
    <HomeLayout>
      <div className="w-full pt-12">
        <section className="flex relative flex-col items-start  space-y-8 w-2/3">
          <h1 className="uppercase lg:text-5xl">Shop Your Thrift Items Here</h1>
          <div className="w-3/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span>
                <TickIcon />
              </span>
              <span>Fast and easy sales</span>
            </div>{" "}
            <div className="flex items-center space-x-2">
              <span>
                <TickIcon />
              </span>
              <span>Easy to navigate</span>
            </div>{" "}
            <div className="flex items-center space-x-2">
              <span>
                <TickIcon />
              </span>
              <span>Reliable sellers</span>
            </div>
          </div>
          <Button className="w-1/3 mt-4">Create account for free</Button>
          <div className="flex items-center space-x-2">
            <img className="" src={AvatarGroup} alt="Avatar Group" />
            <div className="flex flex-col items-start ">
              <div className="flex items-center">
                <span>
                  <StarIcon />
                </span>
                <span>
                  <StarIcon />
                </span>
                <span>
                  <StarIcon />
                </span>
                <span>
                  <StarIcon />
                </span>
                <span>
                  <StarIcon />
                </span>
              </div>
              <span>from 200+ reviews</span>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-center">Shop by Category</h1>
          <div className="grid grid-cols-3 grid-rows-2 mt-4 gap-x-4 gap-y-8 h-[80vh]">
            <div className="bg-fashion bg-cover shadow-lg h-full bg-center text-white flex items-center justify-center rounded-lg col-start-1 col-span-1">
              <div className="backdrop-brightness-50 rounded-lg flex items-center  justify-center w-full h-full">
                <span className="">Fashion/Clothing</span>
              </div>
            </div>
            <div className="bg-home bg-cover shadow-lg h-full bg-center text-white flex items-center justify-center rounded-lg col-start-1 ">
              <div className="backdrop-brightness-50 rounded-lg flex items-center  justify-center w-full h-full">
                <span>Home and Accessories</span>
              </div>
            </div>
            <div className="bg-phone bg-cover shadow-lg h-full bg-center text-white flex items-center justify-center rounded-lg col-start-2 row-start-1 row-span-2">
              <div className="backdrop-brightness-50 rounded-lg flex items-center  justify-center w-full h-full">
                <span>Phones & Devices</span>
              </div>
            </div>
            <div className="bg-health bg-cover shadow-lg h-full bg-center text-white flex items-center justify-center rounded-lg col-start-3 col-span-1 row-start-1">
              <div className="backdrop-brightness-50 rounded-lg flex items-center  justify-center w-full h-full">
                <span>Health and Beauty</span>
              </div>
            </div>
            <div className="bg-others bg-cover shadow-lg h-full bg-center text-white flex items-center justify-center rounded-lg col-start-3 col-span-1 row-start-2">
              <div className="backdrop-brightness-50 rounded-lg flex items-center  justify-center w-full h-full">
                <span>Other Categories</span>
              </div>
            </div>
          </div>
        </section>
        <TrendingProducts />
        <AllProducts />
        <section className="mt-10">
          <h1 className="capitalise text-5xl">What our users say</h1>
        </section>
      </div>
    </HomeLayout>
  );
}
