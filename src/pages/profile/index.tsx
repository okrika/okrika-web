import Button from "../../components/button/Button";
import CalendarIcon from "../../components/icons/CalendarIcon";
import FeedbackIcon from "../../components/icons/FeedbackIcon";
import HeartStrokeIcon from "../../components/icons/HeartStrokeIcon";
import ProfileIcon from "../../components/icons/ProfileIcon";
import QuestionIcon from "../../components/icons/QuestionIcon";
import HomeLayout from "../../layout/HomeLayout";

export default function Profile() {
  return (
    <HomeLayout>
      <div className="flex rounded-[20px] flex-col items-center py-4 px-6 pb-12 space-y-4 w-3/5 bg-okrika-green">
        <ProfileIcon width="118" height="100" />
        <div className="w-full flex flex-col items-center space-y-1 ">
          <span className="text-lg">Kolapo Olubanjo</span>
          <span className="text-xs">Add New Phone Number</span>
          <span className="text-xs">Add location</span>
        </div>
        <div className="w-full flex flex-col items-center space-y-4 ">
          <Button className="flex items-center space-x-3 p-4 bg-white text-black w-1/2">
            <span>
              <HeartStrokeIcon />
            </span>
            <span className="text-black">Liked product</span>
          </Button>
          <Button className="flex items-center space-x-3 p-4 bg-white text-black w-1/2">
            <span>
              <CalendarIcon />
            </span>
            <span className="text-black">My Adverts</span>
          </Button>
          <Button className="flex items-center space-x-3 p-4 bg-white text-black w-1/2">
            <span>
              <FeedbackIcon />{" "}
            </span>
            <span className="text-black">Feedback</span>
          </Button>
          <Button className="flex items-center space-x-3 py-4 px-4 bg-white text-black w-1/2">
            <span>
              <QuestionIcon />
            </span>
            <span className="text-black">Frequently asked questions</span>
          </Button>
        </div>
      </div>
    </HomeLayout>
  );
}
