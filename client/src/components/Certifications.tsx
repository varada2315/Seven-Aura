import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4B0082] mb-4">Certifications</h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Our commitment to excellence and professional standards in yoga education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
                src={`/src/assets/images/cert_${index}.jpg`}
                alt={`Certification ${index}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
