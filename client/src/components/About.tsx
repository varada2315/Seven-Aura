import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Our Journey</h2>
          <div className="space-y-6 text-lg text-gray-600 font-light max-w-3xl mx-auto">
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

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#6A0DAD]/5 p-10 rounded-3xl border border-[#6A0DAD]/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-serif text-[#4B0082] mb-4">Our Mission</h3>
            <p className="text-gray-600 font-light leading-relaxed">
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
            <p className="text-gray-600 font-light leading-relaxed">
              Our vision is to create a healthier and more mindful society by integrating yoga into everyday life, education, and workplaces.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-serif text-[#4B0082] mb-8">Program Benefits</h3>
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
    </section>
  );
}
