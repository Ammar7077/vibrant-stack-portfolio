import { motion } from "framer-motion";
import { 
  Code2, Database, Layout, Server, Settings, Smartphone, 
  Star, StarHalf, FileCode, Braces, PackageOpen,
  Layers, Cpu, Network, Lock, Wifi, ArrowRight, 
  CloudCog, Monitor, Globe, FolderGit
} from "lucide-react";

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const partialFill = (rating % 1) * 100; // Calculate the percentage fill for the partial star
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
  }

  if (partialFill > 0) {
    stars.push(
      <div key="partial" className="relative w-4 h-4">
        <Star className="absolute w-4 h-4 text-white" />
        <Star
          className="absolute w-4 h-4 text-yellow-400"
          style={{
            clipPath: `inset(0 ${100 - partialFill}% 0 0)`, // Clip the star to show partial fill
          }}
        />
      </div>
    );
  }

  return <div className="flex gap-0.5 ml-2">{stars}</div>;
};

// Updated skills data with reorganized categories
const skills = [
  { 
    icon: <Layout className="w-6 h-6" />, 
    name: "Frontend Development", 
    tech: [
      { name: "Next.js", rating: 5 },
      { name: "React.js", rating: 5 },
      { name: "Tailwind CSS", rating: 5 },
      { name: "Material UI", rating: 4.7 },
      { name: "Redux", rating: 4.7 },
      { name: "HTML5", rating: 4.7 },
      { name: "CSS3", rating: 4.7 },
    ] 
  },
  { 
    icon: <Smartphone className="w-6 h-6" />, 
    name: "Mobile Development", 
    tech: [
      { name: "Flutter", rating: 5 },
      { name: "GetX and Provider", rating: 5 },
      { name: "React Native", rating: 4.7 },
      { name: "Redux", rating: 4.7 },
    ] 
  },
  { 
    icon: <Server className="w-6 h-6" />, 
    name: "Backend Development", 
    tech: [
      { name: "Nest.js", rating: 5 },
      { name: "FastAPI", rating: 5 },
      { name: "JWT", rating: 5 },
      { name: "Node.js", rating: 4.7 },
      { name: "WebSockets", rating: 4.7 },
      { name: "Express.js", rating: 4.6 },
    ] 
  },
  { 
    icon: <Database className="w-6 h-6" />, 
    name: "Database Technologies", 
    tech: [
      { name: "MongoDB/Mongoose", rating: 5 },
      { name: "TypeORM", rating: 5 },
      { name: "PostgreSQL", rating: 4.7 },
      { name: "MySQL", rating: 4.45 },
      { name: "Redis", rating: 4.25 },
      { name: "Microsoft SQL Server", rating: 3.8 },
    ] 
  },
  { 
    icon: <Code2 className="w-6 h-6" />, 
    name: "Programming Languages", 
    tech: [
      { name: "JavaScript", rating: 5 },
      { name: "TypeScript", rating: 5 },
      { name: "Python", rating: 5 },
      { name: "Dart", rating: 5 },
      { name: "C#", rating: 4.2 },
      { name: "C/C++", rating: 4.2 },
    ] 
  },
  { 
    icon: <Settings className="w-6 h-6" />, 
    name: "DevOps & Deployment", 
    tech: [
      { name: "Vercel", rating: 5 },
      { name: "Netlify", rating: 5 },
      { name: "Custom Server", rating: 4.6 },
      { name: "Linux Servers", rating: 4.6 },
      { name: "DNS Configuration", rating: 4.5 },
      { name: "Google Play Console", rating: 4.5 },
      { name: "Docker", rating: 4.3 },
      { name: "Azure", rating: 4.1 },
      { name: "CI/CD", rating: 4 },
      { name: "AWS", rating: 3.6 },
    ] 
  },
  {
    icon: <FolderGit className="w-6 h-6" />,
    name: "Development Tools",
    tech: [
      { name: "Git/GitHub", rating: 5 },
      { name: "FTP/SFTP", rating: 5 }
    ]
  },
  {
    icon: <FileCode className="w-6 h-6" />,
    name: "Best Practices",
    tech: [
      { name: "State Management", rating: 5 },
      { name: "Clean Code Principles", rating: 4.8 },
      { name: "Performance Optimization", rating: 4.8 },
      { name: "AI Integration", rating: 4.8 },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
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
              <div className="flex flex-col gap-2">
                {skill.tech.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {tech.name}
                    </span>
                    <StarRating rating={tech.rating} />
                  </div>
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
