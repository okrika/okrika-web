import CircularArrowIcon from "../../assets/icons/CircularArrowIcon";
import HeartIcon from "../../assets/icons/HeartIcon";
type TProps = {
  className?: string;
  name: string;
  price: number;
  imgUrl: string;
  likes: string;
};
export default function ProductCard({
  className,
  imgUrl,
  likes,
  name,
  price
}: TProps) {
  return (
    <div className={`${className} flex flex-col items-start space-y-6`}>
      <img
        className="rounded-lg shadow-lg lg:hover:brightness-50 active:brightness-50"
        src={imgUrl}
        alt={name.toLowerCase()}
      />{" "}
      <div className="w-full">
        <div className=" flex items-center space-x-1">
          <span className="fill-okrika-orange stroke-okrika-orange">
            <HeartIcon />
          </span>
          <span className="text-sm">({likes} likes)</span>
        </div>
        <p>{name}</p>
        <div className="w-full flex items-center space-x-10">
          <span className="font-bold ">Rwf {price.toLocaleString()}</span>{" "}
          <CircularArrowIcon />{" "}
        </div>
      </div>
    </div>
  );
}
