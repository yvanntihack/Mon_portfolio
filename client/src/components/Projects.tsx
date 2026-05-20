/**
 * Projects Section
 * Minimaliste Technique Moderne: Cartes de projets avec images, grille asymétrique
 * Typographie: Poppins Bold pour les titres, Inter Regular pour le contenu
 */

import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  github?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Pipeline de Déploiement Automatisé',
    description: 'Mise en place d\'un workflow Git complet avec automatisation des déploiements sur serveur Linux.',
    technologies: ['Git', 'Bash', 'Linux', 'CI/CD'],
    highlights: [
      'Workflow Git avec branches et pull requests',
      'Scripts Bash pour automatisation des déploiements',
      'Procédures de rollback et sauvegarde',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601979224/GJ333ry7Eg5EaeP6MaRNek/projects-bg-ewY9wddeNCghHCQi4e7rTd.webp',
  },
  {
    title: 'Plateforme E-commerce Node.js + AWS',
    description: 'Architecture REST API déployée sur AWS EC2 avec stockage S3 et intégration de paiement mobile.',
    technologies: ['Node.js', 'PostgreSQL', 'AWS', 'REST API'],
    highlights: [
      'Architecture REST API scalable',
      'Stockage des assets sur AWS S3',
      'Intégration paiement Orange Money',
      'Monitoring des transactions',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601979224/GJ333ry7Eg5EaeP6MaRNek/skills-section-mz4RrS6iY6N3UbaejxZWRG.webp',
  },
  {
    title: 'Infrastructure Cloud AWS',
    description: 'Gestion complète d\'une infrastructure cloud avec EC2, S3, IAM et CloudWatch pour monitoring.',
    technologies: ['AWS', 'EC2', 'S3', 'CloudWatch'],
    highlights: [
      'Configuration des instances EC2',
      'Gestion des permissions IAM',
      'Monitoring avec CloudWatch',
      'Optimisation des coûts',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601979224/GJ333ry7Eg5EaeP6MaRNek/hero-devops-3UqpKPcU2qXZZfdr5DcuqH.webp',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-6">
            <span className="text-sm text-accent font-medium\">PROJETS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projets Techniques
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Une sélection de projets qui démontrent mon expertise en DevOps, automatisation et architecture cloud.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4 flex-1">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                    <li key={hIndex} className="text-xs text-foreground/60 flex items-start gap-2">
                      <span className="text-accent flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 pt-4 border-t border-foreground/10">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-foreground/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Voir</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
