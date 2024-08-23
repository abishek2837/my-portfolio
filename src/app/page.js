import { Fragment } from "react";
import dynamic from "next/dynamic";
import About from "../sections/about";
import Education from "../sections/education";
import Experience from "../sections/experience";
const Navbar = dynamic(() => import("../layout/navbar/Navbar"))
const Footer = dynamic(() => import("../layout/footer/Footer"))
const Intro = dynamic(() => import("../sections/Intro"))
const Skills = dynamic(() => import("../sections/Skills"))
const Projects = dynamic(() => import("../sections/Projects"))
const SendMail = dynamic(() => import("../utils/SendMail"))
const SocialMedia = dynamic(() => import("../utils/SocialMedia"))

export const metadata = {
  title: "Abishek's Portfolio",
  description: "Explore the best Next.js and React.js portfolio by Abishek Poddar. Featuring simple, dark and light theme designs and mobile responsiveness.",
  keywords: ["portfolio", "Next.js", "React.js", "web development", "dark theme", "light theme", "best portfolio github", "best next js portfolio", "how to make a portfolio", "best react js portfolio github", "best react js portfolio", "best next js portfolio", "react js developer in biratnager", "react js developer in nepal", "react js developer in morang", "react js developer in kathmandu"],
  url: "https://abishekpoddar.com.np",
  openGraph: {
    title: "Abhishek's Portfolio",
    description: "Passionate and driven ReactJS developer with a strong foundation in NextJS. Dedicated to creating dynamic and user-centric web applications. Eager to contribute my expertise in frontend frameworks, modern UI/UX design, and responsive development to a forward-thinking team, while continuouslylearning and growing in the ever-evolving world of web development.",
    url: "https://abishekpoddar.com.np/#about",
    images: [
      {
        url: "images/myimage/myimage.jpg",
        width: 800,
        height: 600,
        alt: "About Us",
      },
    ],
  },
};

const Home = () => {
  return (
    <Fragment>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}
          <SocialMedia />
          {/* LatestBlog */}
          {/* <LatestBlogs /> */}
          {/* Apps */}
          {/* <Apps /> */}
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default Home
