/**
 * Experience Section
 * Minimaliste Technique Moderne: Timeline verticale, cartes épurées, accent cyan
 * Typographie: Poppins Bold pour les titres, Inter Regular pour le contenu
 */

import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Consultant DevOps & Support Technique',
    company: 'TIC AFRIC',
    period: '2024 – Présent',
    current: true,
    description: [
      'Suivi et validation des pipelines de déploiement en environnement de pré-production',
      'Détection, analyse et coordination des corrections d\'anomalies techniques',
      'Rédaction et mise à jour de la documentation des procédures de déploiement et d\'incident',
      'Participation aux reportings hebdomadaires sur l\'état des livrables et des environnements',
      'Collaboration Agile avec les équipes Dev, QA et métiers pour le respect des délais',
    ],
  },
  {
    title: 'Co-fondateur & Responsable Technique',
    company: 'JC DIGITAL',
    period: '2018 – 2024',
    description: [
      'Administration des serveurs de production et gestion des accès (Linux, SSH, FTP)',
      'Mise en place du versioning Git et des procédures de sauvegarde automatisée (scripts Bash)',
      'Développement et déploiement d\'une plateforme e-commerce sous Node.js + PostgreSQL',
      'Intégration d\'un module de paiement mobile (Orange Money) via API REST',
      'Support technique applicatif et gestion des incidents pour les clients',
      'Coordination avec les clients pour la recette fonctionnelle et la validation des livrables',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-6">
            <span className="text-sm text-accent font-medium">EXPÉRIENCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parcours Professionnel
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Une trajectoire professionnelle riche, marquée par des responsabilités croissantes et une expertise en DevOps.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-accent to-accent/20" />
              )}

              {/* Timeline Dot */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} className="text-accent" />
                  </div>
                  {exp.current && (
                    <div className="mt-2 px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold">
                      ACTUEL
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-accent font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-foreground/70 text-sm flex items-start gap-3">
                          <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 pt-16 border-t border-foreground/10">
          <h3 className="text-2xl font-bold text-foreground mb-8">Formation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-bold text-foreground mb-2">Licence en Sciences Informatiques</h4>
              <p className="text-accent font-medium mb-2">Université Félix Houphouët-Boigny, Abidjan</p>
              <p className="text-foreground/70 text-sm mb-2">2020</p>
              <p className="text-foreground/60 text-sm">Spécialité : Systèmes & Réseaux</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-bold text-foreground mb-2">BTS Informatique</h4>
              <p className="text-accent font-medium mb-2">Développeur d'Applications</p>
              <p className="text-foreground/70 text-sm mb-2">2016</p>
              <p className="text-foreground/60 text-sm">Option : Développement logiciel et web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
