import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-chakra-gradient">
      {/* Abstract Chakra Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6A0DAD]/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2E8B57]/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 w-12 h-12 rounded-full border border-[#C9A227]/30"
      />
      <motion.div 
        animate={{ y: [0, 30, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-32 w-24 h-24 rounded-full border border-[#6A0DAD]/20"
      />

      <div className="container mx-auto px-6 relative z-10 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/40 text-[#4B0082] text-sm font-medium tracking-wider uppercase backdrop-blur-sm mb-4">
            Welcome to Seven Aura Yoga
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#4B0082] leading-tight">
            Align Your Body,<br />
            Awaken Your Mind,<br />
            Ascend Your Life
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
            Holistic yoga programs designed to improve strength, flexibility, focus, and inner balance for children, adults, and organizations.
          </p>
          <div className="pt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block px-8 py-4 bg-[#4B0082] text-white rounded-full text-lg font-medium hover:bg-[#6A0DAD] transition-colors shadow-lg shadow-[#6A0DAD]/30"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
