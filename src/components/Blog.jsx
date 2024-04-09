import user from "../assets/user.svg";
import calender from "../assets/date.svg";

const Blog = ({ blog: { title, owner, image, date } }) => {
  return (
    <div className="p-4 flex flex-col gap-4 items-center max-w-[420px]">
      <div className="w-full">
        <img
          className="h-[300px] w-full object-cover rounded-lg grayscale"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-2 text-sm text-nowrap">
          <img src={user} />
          <div>{owner}</div>
        </div>
        <div className="flex gap-2 text-sm text-nowrap">
          <img src={calender} />
          <div>{date}</div>
        </div>
      </div>
      <div className="text-2xl font-semibold">{title}</div>
      <div className="text-navy-blue">View details &gt;</div>
    </div>
  );
};

export default Blog;
