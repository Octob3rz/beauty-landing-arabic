import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Check, MessageSquare, Mail } from "lucide-react";
import { Navbar } from '@/components/Navbar';
import { SideNavigation } from '@/components/SideNavigation';
import Map from '@/components/Map';

const Index = () => {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SideNavigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center section-padding relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=80"
            alt="Beauty Clinic"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <span className="text-sm font-medium text-primary/80 mb-4 block">
            {t('hero.welcome')}
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          <Button className="rounded-full px-8 py-6">
            {t('hero.bookConsultation')}
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">{t('services.title')}</h2>
            <p className="text-muted-foreground">{t('services.description')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{t(`services.list.${service.key}.title`)}</h3>
                <p className="text-muted-foreground">{t(`services.list.${service.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">{t('pricing.title')}</h2>
            <p className="text-muted-foreground">{t('pricing.description')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: index === 1 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">{t(`pricing.plans.${plan.key}.name`)}</h3>
                <p className="text-4xl font-display font-bold mb-6">{t(`pricing.plans.${plan.key}.price`)} <span className="text-lg">{t(`pricing.plans.${plan.key}.priceSubtext`)}</span></p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      <span>{t(`pricing.plans.${plan.key}.features.${feature}`)}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.featured ? 'default' : 'outline'}>
                  {t('pricing.selectPlan')}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Widgets Section */}
      <section id="contact" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-display font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-muted-foreground">{t('contact.description')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-4 rounded-2xl mb-12"
          >
            <Map />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="https://wa.me/358451333953"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 cursor-pointer"
            >
              <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{t('contact.whatsapp')}</h3>
                <p className="text-muted-foreground text-sm">+358 45 1333953</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:mamatovviacheslav@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 cursor-pointer"
            >
              <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{t('contact.email')}</h3>
                <p className="text-muted-foreground text-sm">mamatovviacheslav@gmail.com</p>
              </div>
            </motion.a>
          </div>

          {/* New Widgets Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.a
              href="https://example.com/advanced-solution"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 cursor-pointer"
            >
              <div className="h-12 w-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                <Check className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{t('contact.advancedSolution')}</h3>
                <p className="text-muted-foreground text-sm">{t('contact.advancedSolutionSubtext')}</p>
              </div>
            </motion.a>

            <motion.a
              href="https://viacheslav.my"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 cursor-pointer"
            >
              <div className="h-12 w-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                <Check className="h-6 w-6 text-gold-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{t('contact.vipExperience')}</h3>
                <p className="text-muted-foreground text-sm">{t('contact.vipExperienceSubtext')}</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    key: 'facial',
    title: "Facial Aesthetics",
    description: "Advanced facial treatments to enhance your natural beauty",
    image: "https://www.jasonbdiamond.com/wp-content/uploads/2022/10/woman-facial-profile-with-tightening-lines.jpg",
  },
  {
    key: 'dental',
    title: "Dental Care",
    description: "Complete dental transformation for a perfect smile",
    image: "https://gp-assets-1.growthplug.com/website_files/4790/bigstock-Woman-smile-and-teeth-Dental--25845860.jpg",
  },
  {
    key: 'body',
    title: "Body Countouring",
    description: "Advanced body shaping and contouring treatments",
    image: "https://coastalaesthetic.com/wp-content/uploads/AdobeStock_579284366.jpeg",
  }
];

const pricingPlans = [
  {
    key: 'basic',
    name: "Basic Plan",
    price: "$99",
    priceSubtext: "/session",
    featured: false,
    features: ['consultation', 'basicTreatment', 'followUp']
  },
  {
    key: 'standard',
    name: "Standard Plan",
    price: "$199",
    priceSubtext: "/session",
    featured: true,
    features: ['consultation', 'advancedTreatment', 'followUp', 'aftercarePlan']
  },
  {
    key: 'premium',
    name: "Premium Plan",
    price: "$299",
    priceSubtext: "/session",
    featured: false,
    features: ['consultation', 'comprehensiveTreatment', 'multipleSessions', 'aftercarePlan', 'luxurySupport']
  }
];

export default Index;
