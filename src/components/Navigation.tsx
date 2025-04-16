import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  {
    name: 'About Us',
    href: '#about',
    subItems: [
      { name: 'Our Story', href: '#story' },
      { name: 'Our Team', href: '#team' },
      { name: 'Our Mission', href: '#mission' }
    ]
  },
  {
    name: 'Services',
    href: '#services',
    subItems: [
      { name: 'Digital Solutions', href: '#digital' },
      { name: 'Consulting', href: '#consulting' },
      { name: 'Training', href: '#training' }
    ]
  },
  {
    name: 'Products',
    href: '#products',
    subItems: [
      { name: 'Software Solutions', href: '#software' },
      { name: 'Hardware Products', href: '#hardware' },
      { name: 'Cloud Services', href: '#cloud' }
    ]
  },
  {
    name: 'Contact Us',
    href: '#contact'
  }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <div 
            key={item.name}
            className="relative"
            onMouseEnter={() => setHoveredMenu(item.name)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button
              className="flex items-center text-white text-xl font-medium hover:text-gray-200 transition-colors py-2"
            >
              {item.name}
              {item.subItems && (
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${hoveredMenu === item.name ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>

            {item.subItems && hoveredMenu === item.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-4 px-6 min-w-[200px] z-50"
              >
                <div className="space-y-3">
                  {item.subItems.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block text-gray-700 text-lg hover:text-gray-900 transition-colors"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-lg md:hidden z-50"
          >
            <div className="p-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item.name} className="space-y-3">
                  <a
                    href={item.href}
                    className="block text-gray-800 text-lg font-medium"
                  >
                    {item.name}
                  </a>
                  {item.subItems && (
                    <div className="pl-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 