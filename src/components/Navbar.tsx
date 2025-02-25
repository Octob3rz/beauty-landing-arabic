import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'ar', name: 'العربية' },
  { code: 'en', name: 'English' },
  { code: 'tr', name: 'Türkçe' },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation('common');
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold">
          {t('navbar.title')}
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
            aria-label={t('toolbarButtons.services')}
          >
            {t('toolbarButtons.services')}
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
            aria-label={t('toolbarButtons.pricing')}
          >
            {t('toolbarButtons.pricing')}
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
            aria-label={t('toolbarButtons.contact')}
          >
            {t('toolbarButtons.contact')}
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="group flex items-center gap-2 border-accent/50 hover:border-accent bg-accent/10 hover:bg-accent/20 text-accent-foreground"
              >
                <Globe className="h-4 w-4 text-black group-hover:rotate-6 transition-transform" />
                {languages.find(l => l.code === currentLang)?.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code} 
                  onSelect={() => changeLanguage(lang.code)}
                  className="cursor-pointer hover:bg-accent/10"
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.nav>
  );
};
