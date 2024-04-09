// Image for our services
import paintBrush from "../paintbrush.png";
import globe from "../globe.png";
import mobile from "../mobile.png";
import creditCard from "../credit-card.png";

//Image for portfolio
import previousWork1 from "../previous-work-1.jpeg";
import previousWork2 from "../previous-work-2.jpeg";
import previousWork3 from "../previous-work-3.jpeg";
import previousWork4 from "../previous-work-4.jpeg";
import previousWork5 from "../previous-work-5.jpeg";
import previousWork6 from "../previous-work-6.jpeg";

//Client reviews images
import client1 from "../client-img-1.jpeg";
import client2 from "../client-img-2.jpeg";

//Blog images
import blog1 from "../article-img-1.jpeg";
import blog2 from "../article-img-2.jpeg";
import blog3 from "../article-img-3.jpeg";

const ourServices = [
  {
    image: paintBrush,
    title: "Branding and UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus",
  },
  {
    image: globe,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus",
  },
  {
    image: mobile,
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus",
  },
  {
    image: creditCard,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus",
  },
];

const portfolio = [
  { image: previousWork1 },
  { image: previousWork2 },
  { image: previousWork3 },
  { image: previousWork4 },
  { image: previousWork5 },
  { image: previousWork6 },
];

const testimonials = [
  {
    name: "Michael Wong",
    stars: 5,
    image: client1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
  },
  {
    name: "Avril Song",
    stars: 4,
    image: client2,
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
  },
  {
    name: "Michael Wong",
    stars: 5,
    image: client1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
  },
  {
    name: "Avril Song",
    stars: 3,
    image: client2,
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
  },
  {
    name: "Michael Wong",
    stars: 4,
    image: client1,
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
  },
  {
    name: "Avril Song",
    stars: 2,
    image: client2,
    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
  },
];

const blogs = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "May 12, 2021",
    image: blog1,
    owner: "John Doe",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "May 12, 2021",
    image: blog2,
    owner: "John Doe",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    date: "May 12, 2021",
    image: blog3,
    owner: "John Doe",
  },
];

export { ourServices, portfolio, testimonials, blogs };
