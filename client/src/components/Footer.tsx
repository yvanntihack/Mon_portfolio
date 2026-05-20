/**
 * Footer Component
 * Minimaliste Technique Moderne: Fond gris clair, texte épuré, liens subtils
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">&lt;/&gt;</span>
              </div>
              <span className="font-bold text-foreground">Kouamé Ezéchiel</span>
            </div>
            <p className="text-sm text-foreground/60">
              Technicien DevOps spécialisé en automatisation et infrastructure cloud.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                  Expérience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-foreground/60 hover:text-accent transition-colors">
                  Projets
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:ezekielkoume@hotmail.fr"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/kouame-kanh-ezechiel-5604837b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yvanntihack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/10 pt-8">
          <p className="text-center text-sm text-foreground/60">
            © {currentYear} Kouamé Ezéchiel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
