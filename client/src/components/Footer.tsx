import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4B0082] text-white/80 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif text-white mb-6">Seven Aura</h3>
            <p className="font-light text-white/70 mb-6 max-w-sm">
              Align Your Body, Awaken Your Mind, Ascend Your Life. Holistic yoga programs designed for inner balance.
            </p>
            <a 
              href="https://www.instagram.com/seven.aura.yoga?igsh=cXpueHFsNzllY3I3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 font-light">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-6">Contact Info</h4>
            <ul className="space-y-4 font-light">
              <li>123 Wellness Way, Serenity Suite 400</li>
              <li>+1 (234) 567-8900</li>
              <li>hello@sevenaurayoga.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-6">Policies</h4>
            <ul className="space-y-4 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm font-light text-white/50">
          <p>&copy; {new Date().getFullYear()} Seven Aura Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
