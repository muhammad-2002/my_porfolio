"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Logistric International",
    description:
      "A fully responsive MERN stack application for managing parcel deliveries with distinct user roles user, delivery personnel, admin. Features include secure authentication using Firebase and JWT, interactive dashboards for parcel booking and management, and comprehensive admin oversight of parcel assignments and system statistics.",
    image: "/images/projects/logistic.png",
    tag: ["All", "Mern"],
    gitUrl: "https://github.com/muhammad-2002/logistic-client",
    gitUrl2: "https://github.com/muhammad-2002/logistic-server",
    previewUrl: "https://logistics-international-7d03b.web.app/",
  },
  {
    id: 2,
    title: "JOB SeekerX ",
    description:
      "Responsive job listing platform featuring dynamic job filtering (On-Site, Remote, Hybrid, Part-Time), robust authentication email/password, Google Sign-in, developed with React.js, MongoDB, Tailwind CSS, Firebase, Node.js, and Express.js for efficient user experience and securit",
    image: "/images/projects/job.png",
    tag: ["All", "Mern"],
    gitUrl: "https://github.com/muhammad-2002/JobSeekerX",
    gitUrl2: "https://github.com/muhammad-2002/Job-SeekerX--Server",
    previewUrl: "https://jobseekrex.web.app/",
  },
  {
    id: 3,
    title: "BRUSH STROKES ",
    description:
      "Dynamic art & craft product display platform with secure user authentication email/password, social media, leveraging React.js, Tailwind CSS, Express.js, MongoDB, and Firebase. Responsive design ensures seamless functionality across mobile, tablet, and desktop devices for optimal user engagement and experience.",
    image: "/images/projects/brush.png",
    tag: ["All", "Mern"],
    gitUrl: "https://github.com/muhammad-2002/Brushstrokes-client",
    gitUrl2: "https://github.com/muhammad-2002/Brush-Strokes-server",
    previewUrl: "https://brush-stokes.web.app/",
  },
  {
    id: 4,
    title: "My Bali",
    description:
      "Explore Bali with detailed guides for top destinations like Ubud, Seminyak, and Kuta. Manage content effortlessly with our intuitive admin panel while accessing insider travel tips. Our platform ensures a seamless experience across all devices with responsive design.",
    image: "/images/projects/luxe.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/muhammad-2002/Assignment-9",
    gitUrl2: "https://github.com/muhammad-2002/Assignment-9",
    previewUrl: "https://luxe-living-8bd7a.web.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mern"
          isSelected={tag === "Mern"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              gitUrl2={project.gitUrl2}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
