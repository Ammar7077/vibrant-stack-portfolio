
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Engineer",
    company: "ITC International Technology Consultancy",
    period: "Jul 2024 - Present",
    description: "Leading development of scalable web applications, managing large-scale data operations (200TB+), and implementing advanced features with JAIS-GPT integration. Building full-stack solutions with NestJS, React, and Next.js.",
  },
  {
    title: "Software Engineer",
    company: "AwaelJO-Technologies",
    period: "Oct 2023 - Mar 2024",
    description: "Developed dynamic mobile and web applications using Flutter, ASP.NET, and NodeJS. Implemented Agile methodologies and delivered customized CRM solutions.",
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Arena Solutions",
    period: "Jul 2022 - Mar 2023",
    description: "Delivered web and mobile applications using Flutter and NestJS, focusing on system performance optimization.",
  },
  {
    title: "Various Freelance Roles",
    company: "Multiple Companies",
    period: "2023 - 2024",
    description: "Worked on multiple freelance projects including customer service systems, taxi booking applications, and corporate websites.",
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
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
              transition={{ duration: 0.1, delay: index * 0.05 }}
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
