import logo from "../assets/logo.svg";
import search from "../assets/search-img.svg";
import phone from "../assets/phone.svg";

const Header = () => {
  return (
    <div className="bg-secondary flex justify-between text-primary py-5 items-center px-10 md:px-20">
      <div>
        <a href="/">
          <img src={logo} alt="Navy Tech Logo" />
        </a>
      </div>
      <div className="gap-10 hidden lg:flex">
        <div>
          <a href="#services">Services</a>
        </div>
        <div>
          <a href="#portfolio">Portfolio</a>
        </div>
        <div>
          <a href="#aboutus">About us</a>
        </div>
        <div>
          <a href="#testimonial">Testimonial</a>
        </div>
        <div>
          <img src={search} alt="Search icon" />
        </div>
      </div>
      <div>
        <a href="tel:+01 23456789">
          <button className="flex gap-3 px-6 py-2 items-center border-[1px] rounded-lg border-white ">
            <img className="h-4" src={phone} alt="Talk to us" />
            <span>Talk to us</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
