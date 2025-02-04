import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Settings, Smartphone } from "lucide-react";

const skills = [
  { icon: <Layout className="w-6 h-6" />, name: "Frontend", tech: ["Next.js", "React.js", "Flutter"] },
  { icon: <Server className="w-6 h-6" />, name: "Backend", tech: ["Nest.js", "FastAPI", "Node.js"] },
  { icon: <Database className="w-6 h-6" />, name: "Database", tech: ["PostgreSQL", "MongoDB", "Redis"] },
  { icon: <Code2 className="w-6 h-6" />, name: "Languages", tech: ["TypeScript", "Python", "Dart"] },
  { icon: <Settings className="w-6 h-6" />, name: "DevOps", tech: ["Docker", "CI/CD", "AWS"] },
  { icon: <Smartphone className="w-6 h-6" />, name: "Mobile", tech: ["Flutter", "React Native"] },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground">Expertise across the full development stack</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="font-semibold text-xl">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;