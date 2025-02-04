import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using Next.js and Node.js",
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects using React and Python",
  },
  {
    title: "Software Engineer",
    company: "Startup",
    period: "2018 - 2020",
    description: "Developed mobile applications using Flutter and Firebase",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">Professional journey and achievements</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 relative pl-8 border-l-2 border-primary/20 last:mb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="glass-card p-6 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-muted-foreground mb-3">{exp.company}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;