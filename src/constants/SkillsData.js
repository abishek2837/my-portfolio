import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiFirebase,
  SiTypescript,
  SiAntdesign
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const TechStackData = [
  {
    Skills: [
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "NextJS",
        icon: <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
      },
      {
        name: "React Native",
        icon: <TbBrandReactNative className="md:text-4xl text-2xl" color="#66dbfb" />
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />,
      },
      {
        name: "Redux-toolkit",
        icon: <SiRedux className="md:text-4xl text-2xl" color="#7e57c2" />,
      },
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#039be5"} />,
      },
      {
        name: "SASS",
        icon: <DiSass className="md:text-4xl text-2xl" color="#f06292" />,
      },
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />
      },
      {
        name: "firebase",
        icon: <SiFirebase className="md:text-4xl text-2xl" color="#ffcd33" />
      },
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />
      },
      // {
      //   name: "Express",
      //   icon: <SiExpress className="md:text-4xl text-2xl" color="#555555" />,
      // },
      // {
      //   name: "MongoDB",
      //   icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
      // },
      // {
      //   name: "jQuery",
      //   icon: <SiJquery className="md:text-4xl text-2xsl" color="#106dae" />
      // },
      // {
      //   name: "netlify",
      //   icon: <SiNetlify className="md:text-4xl text-2xl" color={"#31b5ba"} />
      // },
    ],
    Familiar: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#377cc8" />
      },
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "Meterial UI",
        icon: <SiMui className="md:text-4xl text-2xl" color="#29b6f6" />,
      },
      {
        name: "Ant Design",
        icon: <SiAntdesign className="md:text-4xl text-2xl" color="#29b6f6" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />
      },
      // {
      //   name: "Angular",
      //   icon: <FaAngular className="md:text-4xl text-2xl" color="#c50836" />
      // },

      // {
      //   name: "PHP",
      //   icon: <FaPhp className="md:text-4xl text-2xl" color="#7b7fb5" />
      // },
      // {
      //   name: "JAVA",
      //   icon: <FaJava className="md:text-4xl text-2xl" color="#547c99" />
      // },

      // {
      //   name: "MySQL",
      //   icon: <GrMysql className="md:text-4xl text-2xl" color="#08668e" />
      // },
      // {
      //   name: "Shopify",
      //   icon: <FaShopify className="md:text-4xl text-2xl" color="#99c14f" />
      // }
    ]

  }
]

export default TechStackData;