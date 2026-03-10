import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable and scalable code using modern JavaScript practices and MERN architecture to ensure long-term project stability.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Developing fast and optimized web applications with efficient backend APIs and responsive frontend interfaces.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Collaborating with teams and clients to deliver high-quality digital solutions aligned with project goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring modern tools and technologies to continuously improve development workflows and user experiences.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into scalable ,
              <span className="font-serif italic font-normal text-white">
                {" "}
                full-stack web applications.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate MERN Stack Developer with 1.5+ years of
                hands-on experience building modern web applications. My journey
                in web development started with curiosity about how websites
                work, and it quickly evolved into a deep interest in creating
                powerful, user-friendly digital products.
              </p>
              <p>
                I specialize in MongoDB, Express.js, React.js, and Node.js,
                developing full-stack applications that are fast, scalable, and
                secure. From responsive frontend interfaces to robust backend
                APIs, I enjoy turning complex ideas into simple and efficient
                solutions.
              </p>
              <p>
                I have worked on several real-world projects including business
                websites, admin dashboards, and full-stack platforms. One of my
                notable projects is the Green Ayodhya Fund website, developed
                under the guidance of IAS Ashwani Pandey and inaugurated by
                Chief Minister Yogi Adityanath. I have also developed project
                websites like Signature Global Park, focusing on modern UI,
                performance, and seamless user experience. I always focus on
                writing clean code, optimizing performance, and delivering
                digital solutions that help businesses grow online.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build high-quality web applications that solve
                real problems, create meaningful user experiences, and help
                businesses grow in the digital world."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
