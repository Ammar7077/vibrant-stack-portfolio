import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const projects = [
  {
    title: "ClientJO.com",
    description: "Customer Service system with roles-based architecture for handling company calls",
    image: "/placeholder.svg",
    link: "https://clientjo.com",
    tags: ["Next.js", "NestJS", "TypeScript"],
  },
  {
    title: "GGE Taxi Booking",
    description: "Complete taxi booking application ecosystem built for GGE Solutions",
    image: "/placeholder.svg",
    link: "https://github.com/Ammar7077",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "RUDAIN.net",
    description: "Corporate website development and implementation",
    image: "/placeholder.svg",
    link: "https://rudain.net",
    tags: ["React", "Node.js", "Tailwind"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-video overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="text-white w-8 h-8" />
                    </div>
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-secondary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
