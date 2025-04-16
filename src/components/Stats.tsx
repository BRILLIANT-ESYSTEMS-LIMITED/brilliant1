import { motion } from 'framer-motion';
import type { Statistic } from '../types';

const stats: Statistic[] = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Government Partnerships' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years Experience' },
];

export function Stats() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-green-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}