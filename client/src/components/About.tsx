/**
 * About Section
 * Minimaliste Technique Moderne: Texte épuré, mise en page asymétrique, accent cyan
 * Typographie: Poppins Bold pour les titres, Inter Regular pour le contenu
 */

import { Check } from 'lucide-react';

export default function About() {
  const highlights = [
    'Déploiement d\'applications en environnement cloud',
    'Automatisation des processus CI/CD',
    'Gestion d\'infrastructures Linux et AWS',
    'Coordination Agile avec les équipes Dev/QA',
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-sm text-accent font-medium">À PROPOS</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Technicien IT orienté DevOps
            </h2>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              Avec une formation en Systèmes & Réseaux et plus de 3 ans d'expérience professionnelle, j'ai développé une expertise solide en déploiement d'applications, intégration cloud et automatisation des processus.
            </p>

            <p className="text-foreground/70 mb-8 leading-relaxed">
              Rigoureux et orienté résultats, je suis capable de collaborer efficacement avec les équipes Dev et Ops pour assurer la continuité, la qualité et la sécurité des livraisons.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-sm bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-accent-foreground" />
                  </div>
                  <span className="text-foreground/80">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-foreground/10 space-y-2">
              <p className="text-sm text-foreground/60">📧 ezekielkoume@hotmail.fr</p>
              <p className="text-sm text-foreground/60">📱 +225 07 78 62 14 84</p>
              <p className="text-sm text-foreground/60">📍 Abidjan, Côte d'Ivoire</p>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="relative h-96 md:h-full min-h-96">
            <div
              className="absolute inset-0 rounded-lg overflow-hidden"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663601979224/GJ333ry7Eg5EaeP6MaRNek/skills-section-mz4RrS6iY6N3UbaejxZWRG.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
