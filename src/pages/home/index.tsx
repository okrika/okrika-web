import Button from "../../components/button/Button";
import HomeLayout from "../../layout/HomeLayout";
import AvatarGroup from "../../assets/images/avatar-group.jpg";
import StarIcon from "../../assets/icons/StarIcon";

export default function Home() {
  return (
    <HomeLayout>
      <div className="w-full pt-12">
        <section className="flex relative flex-col items-start  space-y-8 w-2/3">
          <h1 className="uppercase lg:text-5xl">Shop Your Thrift Items Here</h1>
          <div className="w-3/5 flex items-center justify-between">
            <span>Fast and easy sales</span> <span>Easy to navigate</span>{" "}
            <span>Reliable sellers</span>
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
        <section>
          <h1 className="text-3xl font-bold text-center">Shop by Category</h1>
          <div className="grid grid-cols-3 grid-rows-2 mt-4 gap-x-4 gap-y-8 h-[80vh]">
            <div className="bg-fashion bg-cover h-full bg-center text-white text-xl flex items-center justify-center rounded-lg col-start-1 col-span-1">
              <span>Fashion/Clothing</span>
            </div>
            <div className="bg-home bg-cover h-full bg-center text-white text-xl flex items-center justify-center rounded-lg col-start-1 ">
              <span>Home and Accessories</span>
            </div>
            <div className="bg-phone bg-cover h-full bg-center text-white text-xl flex items-center justify-center rounded-lg col-start-2 row-start-1 row-span-2">
              <span>Phones & Devices</span>
            </div>
            <div className="bg-health bg-cover h-full bg-center text-white text-xl flex items-center justify-center rounded-lg col-start-3 col-span-1 row-start-1">
              <span>Health and Beauty</span>
            </div>
            <div className="bg-others bg-cover h-full bg-center text-white text-xl flex items-center justify-center rounded-lg col-start-3 col-span-1 row-start-2">
              <span>Other Categories</span>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
