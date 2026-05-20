/**
 * Hero Section
 * Minimaliste Technique Moderne: Image de fond cloud infrastructure, texte épuré, CTA cyan
 * Typographie: Poppins Bold pour le titre, Inter Regular pour la description
 */

import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663601979224/GJ333ry7Eg5EaeP6MaRNek/hero-devops-3UqpKPcU2qXZZfdr5DcuqH.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary rounded-full mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
            <span className="text-sm text-foreground font-medium">Technicien DevOps Junior</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Automatisation, Cloud et{' '}
            <span className="text-accent relative inline-block">
              Déploiement
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent to-transparent animate-pulse" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Avec plus de 3 ans d'expérience en déploiement d'applications et gestion d'infrastructures cloud, je transforme les processus complexes en pipelines automatisés et fiables.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-accent text-accent-foreground rounded-sm font-medium hover:opacity-90 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir mes projets
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-foreground/20 text-foreground rounded-sm font-medium hover:border-accent hover:text-accent hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <Zap size={18} className="group-hover:rotate-12 transition-transform" />
              Me contacter
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-foreground/10">
            <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-accent mb-2 group cursor-default hover:scale-110 transition-transform">3+</div>
              <p className="text-sm text-foreground/60">Ans d'expérience</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-accent mb-2 group cursor-default hover:scale-110 transition-transform">10+</div>
              <p className="text-sm text-foreground/60">Projets réalisés</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-3xl font-bold text-accent mb-2 group cursor-default hover:scale-110 transition-transform">5+</div>
              <p className="text-sm text-foreground/60">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
