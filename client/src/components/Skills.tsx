/**
 * Skills Section
 * Minimaliste Technique Moderne: Cartes avec bordure gauche cyan, grille asymétrique
 * Typographie: Poppins Bold pour les titres, Inter Regular pour le contenu
 */

import { Cloud, Terminal, GitBranch, Database, Zap, BarChart3 } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud size={24} />,
    skills: ['AWS (EC2, S3, IAM, CloudWatch)', 'Notions Azure', 'Déploiement cloud'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'OS & Système',
    icon: <Terminal size={24} />,
    skills: ['Linux (Ubuntu, CentOS)', 'Windows Server', 'Bash scripting', 'SSH'],
    color: 'from-slate-600 to-slate-700',
  },
  {
    title: 'CI/CD & Versioning',
    icon: <GitBranch size={24} />,
    skills: ['Git / GitHub', 'Pipelines de déploiement', 'Automatisation scripts'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Développement & API',
    icon: <Zap size={24} />,
    skills: ['Node.js', 'REST API', 'PostgreSQL', 'Intégration paiement'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Monitoring & Support',
    icon: <BarChart3 size={24} />,
    skills: ['Suivi incidents', 'Logging', 'Reporting technique', 'Gestion anomalies'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Méthodologie',
    icon: <Database size={24} />,
    skills: ['Agile / Scrum', 'Tests fonctionnels', 'Validation technique', 'Documentation'],
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-6">
            <span className="text-sm text-accent font-medium">COMPÉTENCES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expertise Technique
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Une palette complète de compétences en infrastructure cloud, automatisation et gestion de déploiements.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Left Border Accent */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${category.color} rounded-l-lg`} />

              {/* Icon */}
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-16 border-t border-foreground/10">
          <h3 className="text-xl font-bold text-foreground mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span className="text-foreground/80 text-sm">AWS Cloud Practitioner (en cours)</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span className="text-foreground/80 text-sm">Certification Avancée Software & Cloud</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span className="text-foreground/80 text-sm">Google IT Support Professional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
