import { motion } from 'framer-motion';
import { Cpu, Brain, Notebook as Robot, Cloud, Shield, Code } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Advanced AI solutions for intelligent automation and decision-making'
  },
  {
    icon: Robot,
    title: 'IoT & Robotics',
    description: 'Connected device ecosystems and robotic process automation'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and serverless applications'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security and threat protection systems'
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    description: 'Custom hardware solutions and firmware development'
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored software solutions for unique business needs'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Cutting-Edge Technologies
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            We leverage the latest technologies to deliver innovative solutions
            that drive digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-green-700">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}