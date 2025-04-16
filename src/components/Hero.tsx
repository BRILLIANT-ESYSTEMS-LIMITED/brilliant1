import { motion } from 'framer-motion';
import { ChevronRight, Code2, Globe, Server } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-800 to-green-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Pioneering Digital Innovation in Nigeria
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Kano's premier software development company, delivering cutting-edge solutions for government, education, and enterprise.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-green-900 font-semibold hover:bg-green-50 transition-colors"
            >
              Start Your Project
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: Code2, label: 'Custom Software Development' },
            { icon: Globe, label: 'Digital Transformation' },
            { icon: Server, label: 'Enterprise Solutions' },
          ].map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
            >
              <Icon className="w-10 h-10 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-semibold">{label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}