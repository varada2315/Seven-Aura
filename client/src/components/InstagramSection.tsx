import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function InstagramSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#4B0082] mb-4">Follow Our Journey</h2>
            <p className="text-gray-600 font-light">Join our community on Instagram for daily inspiration.</p>
          </div>
          <a
            href="https://www.instagram.com/seven.aura.yoga?igsh=cXpueHFsNzllY3I3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow @seven.aura.yoga
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/seven.aura.yoga?igsh=cXpueHFsNzllY3I3"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group block"
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <img
                src={`/src/assets/images/ig_${index}.jpg`}
                alt={`Instagram post ${index}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = `https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=400&h=400`;
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
