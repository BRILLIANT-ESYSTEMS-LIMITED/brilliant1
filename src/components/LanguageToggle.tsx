import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ha' : 'en')}
      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      aria-label={language === 'en' ? 'Switch to Hausa' : 'Switch to English'}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'en' ? 'EN' : 'HA'}</span>
    </button>
  );
}