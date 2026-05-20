/**
 * Header Component
 * Minimaliste Technique Moderne: Navigation épurée, alignement à gauche, accent cyan
 * Typographie: Poppins Bold pour le logo, Inter Regular pour les liens
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">&lt;/&gt;</span>
          </div>
          <span className="font-bold text-foreground text-lg hidden sm:inline">Kouamé Ezéchiel</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium"
          >
            À propos
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium"
          >
            Compétences
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium"
          >
            Expérience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium"
          >
            Projets
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 bg-accent text-accent-foreground rounded-sm font-medium text-sm hover:opacity-90 transition-opacity duration-200"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-left text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Compétences
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-left text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Expérience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-accent text-accent-foreground rounded-sm font-medium text-sm hover:opacity-90 transition-opacity w-full"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
