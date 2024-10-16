import HeartStrokeIcon from "../assets/icons/HeartStrokeIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import ProfileIcon from "../assets/icons/ProfileIcon";
import { SearhIcon } from "../assets/icons/SearchIcon";
import WhatsappIcon from "../assets/icons/WhatsappIcon";
import XIcon from "../assets/icons/XIcon";

export default function HomeLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full pt-5 px-8">
      <header className="flex items-center justify-center">
        <nav className="w-[10%] flex rounded-[40px] shadow-lg md:w-4/5 lg:w-4/5 px-8 pb-7 pt-5 items-center justify-between">
          <h1>Okrika</h1>
          <ul className="w-1/4 flex items-center text-lg space-x-8">
            <li>Home</li>
            <li>Categories</li>
            <li>Blog</li>
            <li>Shop</li>
          </ul>
          <div className="w-1/4 flex items-center space-x-4">
            <span>
              <SearhIcon />
            </span>{" "}
            <span>
              <HeartStrokeIcon />
            </span>{" "}
            <span>
              <ProfileIcon />
            </span>
            <button
              className="w-4/5 rounded-[40px] shadow-md active:shadow-sm active:border-okrika-green active:bg-white active:text-okrika-green text-white bg-okrika-green py-4"
              type="button"
            >
              Be a seller
            </button>
          </div>
        </nav>
      </header>
      <main className="py-6">{children}</main>
      <footer className="flex flex-col bg-okrika-green items-center p-5 pt-10 rounded-lg  ">
        <div className=" flex items-start w-[70%]">
          <div className=" flex items-center text-white flex-wrap">
            <span className="w-1/3">About Us</span>
            <span className="w-1/3">Terms and Conditions</span>
            <span className="w-1/3">+1234-567-98-23</span>
            <span className="w-1/3">Sell on Okrika</span>
            <span className="w-1/3">Contact us</span>
            <span className="w-1/3">okrika@gmail.com</span>
            <span className="w-1/3">Community</span>
            <span className="w-1/3">Resources</span>
          </div>
          <button className="bg-white text-black text-sm p-2 rounded-lg font-bold">
            {" "}
            Shop Now
          </button>
        </div>
        <div className="w-full flex items-end justify-between">
          {" "}
          <div className="w-1/8 flex flex-col items-center space-y-4">
            <h1>Okrika</h1>
            <div className="flex items-center space-x-4">
              <span>
                <WhatsappIcon />
              </span>{" "}
              <span>
                <InstagramIcon />
              </span>{" "}
              <span>
                <XIcon />
              </span>
            </div>
          </div>
          <div className="w-1/6 flex flex-col items-center justify-end">
            <p>@2024-Copyright</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
