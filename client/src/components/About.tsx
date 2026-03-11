import { motion } from "framer-motion";
import aboutYoga from "@/assets/images/about-yoga.png";
import chakraElements from "@/assets/images/chakra-elements.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Our Journey Section */}
        <div className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#4B0082]">Our Journey</h2>
            <div className="space-y-6 text-lg text-gray-600 font-light">
              <p>
                Seven Aura Yoga was founded with a vision to make yoga accessible and meaningful for people of all ages. With a passion for holistic wellness and structured yoga education, we created programs that combine traditional yoga practices with modern teaching methods.
              </p>
              <p>
                Our journey started with a simple goal—to help individuals, children, and organizations build healthier lifestyles through yoga, mindfulness, and movement.
              </p>
              <p>
                Today, Seven Aura Yoga offers online classes, curriculum-based yoga programs for schools, corporate wellness sessions, workshops, and wellness camps designed to nurture physical health and mental well-being.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-lg"
          >
            <img 
              src={aboutYoga}
              alt="Yoga and wellness"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/20 to-transparent"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#6A0DAD]/5 p-10 rounded-3xl border border-[#6A0DAD]/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-serif text-[#4B0082] mb-4">Our Mission</h3>
            <p className="text-gray-600 font-light leading-relaxed relative z-10">
              Our mission is to empower individuals and communities to achieve physical, mental, and emotional well-being through structured yoga practices, mindfulness, and holistic wellness programs.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#2E8B57]/5 p-10 rounded-3xl border border-[#2E8B57]/10 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2E8B57]/10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-serif text-[#4B0082] mb-4">Our Vision</h3>
            <p className="text-gray-600 font-light leading-relaxed relative z-10">
              Our vision is to create a healthier and more mindful society by integrating yoga into everyday life, education, and workplaces.
            </p>
          </motion.div>
        </div>

        {/* Program Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full h-[400px]">
              <img 
                src={chakraElements}
                alt="Chakra spiritual elements"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Decorative circles */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[#6A0DAD]/30 rounded-full"
              />
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-[#2E8B57]/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif text-[#4B0082]">Program Benefits</h3>
            <div className="space-y-6 text-lg text-gray-600 font-light">
              <p>
                Our yoga programs help people manage stress, improve flexibility, and build a healthier lifestyle.
              </p>
              <p>
                Through guided yoga sessions, breathing techniques, and mindfulness practices, we support both children and adults in developing physical strength, emotional balance, and mental focus in a safe and engaging environment.
              </p>
              <p>
                Seven Aura Yoga offers structured, curriculum-based yoga programs that combine movement, mindfulness, breathing, and fun activities.
              </p>
              <p>
                Our unique approach focuses on holistic development—helping children and adults improve physical health, mental focus, emotional balance, and overall well-being.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
