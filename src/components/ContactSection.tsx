import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

const ContactSection = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("your.email@example.com");
    toast({
      title: "Email copied to clipboard",
      description: "You can now paste it anywhere",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "your.email@example.com",
      action: handleCopyEmail,
      actionLabel: "Copy email",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 234 567 890",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Social",
      value: "@yourusername",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">Let's discuss your next project</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-lg text-center"
            >
              <div className="mb-4 flex justify-center">{info.icon}</div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              <p className="text-muted-foreground mb-4">{info.value}</p>
              {info.action && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={info.action}
                >
                  {info.actionLabel}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;