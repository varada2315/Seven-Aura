import { motion } from "framer-motion";
import { Laptop, Baby, School, Building2, MoonStar, Tent, Brain, BookOpen } from "lucide-react";

const services = [
  {
    title: "Online Group Yoga Classes",
    icon: Laptop,
    color: "text-[#6A0DAD]",
    bg: "bg-[#6A0DAD]/10",
  },
  {
    title: "Kids Yoga Programs",
    icon: Baby,
    color: "text-[#2E8B57]",
    bg: "bg-[#2E8B57]/10",
  },
  {
    title: "Curriculum-Based Yoga for Schools",
    icon: School,
    color: "text-[#C9A227]",
    bg: "bg-[#C9A227]/10",
  },
  {
    title: "Corporate Yoga & Workplace Wellness Programs",
    icon: Building2,
    color: "text-[#4B0082]",
    bg: "bg-[#4B0082]/10",
  },
  {
    title: "Yoga Workshops & Wellness Programs",
    icon: MoonStar,
    color: "text-[#6BBF59]",
    bg: "bg-[#6BBF59]/10",
  },
  {
    title: "Summer Camps for Children",
    icon: Tent,
    color: "text-[#6A0DAD]",
    bg: "bg-[#6A0DAD]/10",
  },
  {
    title: "Mindfulness & Breathing Sessions",
    icon: Brain,
    color: "text-[#2E8B57]",
    bg: "bg-[#2E8B57]/10",
  },
  {
    title: "Yoga Teacher Guidance & Curriculum Development",
    icon: BookOpen,
    color: "text-[#C9A227]",
    bg: "bg-[#C9A227]/10",
  }
];

export default function Services() {
  return (
    <section id="programs" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4B0082] mb-4">Our Services</h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Comprehensive wellness programs tailored to nurture every aspect of your being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.bg} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-lg font-medium text-gray-800 leading-snug">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
