import rightArrow from "../assets/right-arrow.svg";
import { blogs } from "../assets/data/data";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="px-6 sm:px-10 md:px-20 py-20 flex flex-col items-center gap-20">
      <div className="text-center">
        <div className="opacity-70 text-2xl">Blog</div>
        <div className="text-3xl font-bold">Browse articles</div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {blogs.map((blog, index) => {
          return <Blog blog={blog} key={index} />;
        })}
      </div>
      <div>
        <button className="bg-navy-blue text-white text-2xl rounded-xl py-4 px-12 flex gap-4 items-center">
          Read more <img src={rightArrow} />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
