import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Prepr – AI Mock Interview Platform",
    category: "AI Web App",
    description:
      "An AI-powered platform that runs realistic mock interviews, asks role-based questions, and delivers instant feedback to help candidates prepare. Features voice-driven interview sessions and AI-generated scoring.",
    tools: "Next.js, TypeScript, Tailwind CSS, AI / LLM",
    image: "/images/ai-interview.webp",
    link: "https://ai-interview-platform-rust-alpha.vercel.app/",
  },
  {
    name: "Nirvee Visa & Immigration Experts",
    category: "Business Website",
    description:
      "Professional website for a visa and immigration services company, built with Astro. Features responsive design, service listings, testimonials, and contact forms.",
    tools: "Astro, HTML, CSS, JavaScript",
    image: "/images/visa.webp",
    link: "https://www.nirveevisa.com/",
  },
  {
    name: "Digital Marketing Website",
    category: "Web Application",
    description:
      "A web application built with React and Node.js. Features include user authentication and real-time data.",
    tools: "React, TypeScript, Tailwind CSS",
    image: "/images/dasandco.webp",
    link: "https://dasandco.lovable.app/",
  },
  {
    name: "Job Portal Web App",
    category: "Full-Stack App",
    description:
      "Full-stack job portal with separate candidate, recruiter, and admin functionality. Includes auth, job listings, applications, profile management, and admin dashboards.",
    tools: "Next.js, React, TypeScript",
    image: "/images/job-portal.webp",
    link: "https://job-portal-web-vert.vercel.app/",
  },
  {
    name: "Online Food Ordering",
    category: "Web Platform",
    description:
      "A web-based platform that allows users to browse menus, customize meals, and place orders seamlessly.",
    tools: "React.js, Node.js, MongoDB",
    image: "/images/onlinefood.webp",
    link: "https://thehoreo.vercel.app/home",
  },
  {
    name: "Construction Site",
    category: "Business Website",
    description:
      "A clean and responsive construction website built with modern design principles, crafted to present a professional brand identity.",
    tools: "React.js, Node.js, MongoDB",
    image: "/images/solidcore.webp",
    link: "https://solidcore-lake.vercel.app/",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p>{project.description}</p>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
