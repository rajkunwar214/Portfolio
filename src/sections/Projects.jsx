import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Green Ayodhya Fund – Government Environmental Funding Platform",
    description:
      "Developed and deployed a government-grade environmental fundraising platform using the MERN Stack (React.js, Node.js, Express.js, MongoDB) , showcasing real-world public impact. Implemented a responsive React-based UI, secure RESTful APIs, optimized MongoDB database architecture, and SEO-optimized performance to ensure scalability, reliability, and seamless user experience across devices.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript (ES6+)",
      "RESTful APIs",
      "Bootstrap",
      "SEO Optimization",
      "Cloud Deployment",
    ],
    link: "https://greenfund.ayodhyada.in/",
    highlightTitle: "Government Inauguration",
    highlightText:
      "This project holds special significance as this platform was officially inaugurated by Chief Minister of Uttar Pradesh (Yogi Adityanath) on 6 August 2024.representing a production-ready government platform developed under  the supervision of IAS Ashwani Kumar Pandey, Vice Chairman of the Ayodhya Development Authority.  It reflects real-world impact, public-sector trust, and the ability to deliver scalable software solutions aligned with government-level standards.",
  },
  {
    number: "02",
    title: "Rainbow Realty Consulting – Real Estate Consulting Platform",
    description:
      "Designed and developed the official corporate website for Rainbow Realty Consulting, a real estate consultancy platform providing property investment, sales, and advisory services in Delhi NCR. The platform delivers a modern responsive interface, enabling users to explore real estate services, property opportunities, and company information seamlessly across devices. Implemented dynamic UI components, optimized performance, and SEO-friendly architecture to enhance online visibility and user engagement while ensuring fast loading and scalable web performance.",
    tags: [
      "HTML5 & CSS3",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Apache/Nginx",
      "MySQL",
    ],
    link: "https://www.rainbowconsulting.in/index.php",
    highlightTitle: "Enterprise Business Website",
    highlightText:
      "Developed a production-ready corporate real estate website focused on brand visibility, service presentation, and client engagement. The platform demonstrates expertise in building modern business websites with scalable frontend architecture, responsive design, and SEO-optimized performance for real estate businesses.",
  },
  {
    number: "03",
    title: "Deepotsav App",
    description:
      "Developed a digital management and monitoring application for the Ayodhya Deepotsav festival, designed to help authorities coordinate and supervise large-scale event operations across locations like Ram Ki Paidi and Ramkatha Park. The platform enabled administrative management, team coordination, task tracking, and real-time monitoring, ensuring smooth execution of one of India’s largest cultural celebrations featuring lakhs of diyas and grand Saryu Aarti. The project highlights the ability to build scalable systems for high-profile government events.",
    tags: [
      "React Native",
      "JavaScript (ES6+)",
      "Node.js",
      "MongoDB",
      "MySQL",
      "REST APIs",
    ],
    link: "#",
    highlightTitle: "Prestigious Honors & Government Recognition",
    highlightText:
      "This project received prestigious recognition for its innovation and impact, earning honors from Anandiben Patel at the Governor House and from Akhilesh Singh. The awards acknowledge the successful development of a digital monitoring and management system for Ayodhya Deepotsav, showcasing the delivery of reliable technology solutions for one of India’s largest cultural and government-supported events.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-1xl mx-auto mb-24"
        >
          <span className="uppercase text-sm tracking-widest text-primary">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Projects that
            <span className="italic font-serif text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground mt-4">
            Real-world platforms, government-grade software and innovative
            products that solve real problems.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative group p-[2px] rounded-2xl
              bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500
              hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
              transition-all duration-700"
            >
              {/* INNER CARD */}
              <div
                className="grid md:grid-cols-2 gap-14 items-start 
              bg-black/80 backdrop-blur-xl rounded-2xl p-10"
              >
                {/* LEFT SIDE */}
                <div>
                  {/* project number */}
                  <span className="text-6xl font-bold text-white/60 transition duration-500">
                    {project.number}
                  </span>

                  <h3 className="text-3xl font-semibold mt-2 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-sm rounded-md border border-white/20
                        text-gray-200
                        hover:border-cyan-400 hover:text-cyan-400
                        hover:bg-cyan-400/10
                        hover:scale-105
                        transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* LINK */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 mt-6 text-cyan-400 font-medium hover:gap-3 transition-all"
                  >
                    View Live Project
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* RIGHT SIDE HIGHLIGHT */}
                {project.highlightTitle && (
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative p-8 rounded-xl
                    border border-cyan-400/40
                    bg-gradient-to-br from-cyan-400/10 to-purple-500/10
                    backdrop-blur-md
                    shadow-xl
                    hover:shadow-cyan-500/20
                    transition"
                  >
                    {/* glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-500/10 blur-xl opacity-40" />

                    <div className="relative z-10">
                      <span className="text-cyan-400 font-semibold">
                        {project.highlightTitle}
                      </span>

                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {project.highlightText}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
