import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="bg-secondary p-20 text-white grid gap-y-16 lg:flex justify-between px-8 md:px-20">
      <div className="flex flex-col gap-10">
        <div>
          <img src={logo} alt="NavyTech" />
          <div className=" text-3xl font-semibold">Navytech</div>
        </div>
        <div className=" *:block">
          <a href="mailto:hello@navytech.com">hello@navytech.com</a>
          <a href="tel:+01 23456789">Phone : +01 23456789</a>
        </div>
        <div className="flex">
          <a>
            <img src={facebook} alt="Facebook" />
          </a>
          <a>
            <img src={twitter} alt="Twitter" />
          </a>
          <a>
            <img src={instagram} alt="Instagram" />
          </a>
          <a>
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a>
            <img src={youtube} alt="Youtube" />
          </a>
        </div>
      </div>
      <div className="flex gap-20 sm:flex-row flex-col">
        <div>
          <div className="text-2xl font-semibold mb-6">Quick Links</div>
          <div>
            <ul className="flex flex-col gap-4 font-normal">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#aboutus">About us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-6">Resources</div>
          <div>
            <ul className="flex flex-col gap-4 font-normal">
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="text-2xl font-semibold mb-6">Subscribe</div>
        <div>
          <div className="bg-[#FFFFFF1A] flex p-2 rounded-lg gap-2">
            <img className=" pl-4" src={mail} />
            <input
              type="text"
              placeholder="name@domain.com"
              className="placeholder:text-[#FFFFFF66] focus:outline-none bg-transparent w-full "
            />
            <button className="bg-navy-blue px-4 sm:px-10 py-2 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
