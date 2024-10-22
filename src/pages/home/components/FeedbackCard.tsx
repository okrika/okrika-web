import GreenShape from "/assets/svgs/green-shape.svg";
import OrangeShape from "/assets/svgs/orange-shape.svg";
import Unknown from "/assets/images/unknown-avatar.png";
import QuoteIcon from "../../../components/icons/QuoteIcon";

export function FeedbackCard({
  avatar,
  children,
  name
}: Readonly<{
  avatar?: string;
  children: React.ReactNode;
  name: string;
}>) {
  return (
    <div className="relative">
      <img
        className="w-full h-full absolute top-0"
        src={OrangeShape}
        alt="background"
      />
      <img className="w-full h-full " src={GreenShape} alt="background" />
      <div className="absolute text-white text-xl font-bold flex flex-col items-center space-y-4 left-[30%] top-[-20px]">
        <img
          className="rounded-full"
          width={102}
          height={102}
          src={avatar ? avatar : Unknown}
          alt="Avatar"
        />
        <p>{name}</p>
      </div>

      <div className="flex w-4/5 absolute left-[50px] bottom-[40%] flex-col items-center space-y-2">
        <span className="flex items-center space-x-[2px] text-[#8E68C5] text-4xl">
          <QuoteIcon />
          <QuoteIcon />
        </span>
        <div className="text-sm text-white">{children}</div>
      </div>
    </div>
  );
}
