/**
 * Contact Section
 * Minimaliste Technique Moderne: Formulaire épuré, liens sociaux, accent cyan
 * Typographie: Poppins Bold pour les titres, Inter Regular pour le contenu
 */

import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-6">
            <span className="text-sm text-accent font-medium">CONTACT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parlons de vos projets
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos besoins en DevOps et infrastructure cloud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8">Informations de Contact</h3>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:ezekielkoume@hotmail.fr"
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <p className="text-foreground font-medium">ezekielkoume@hotmail.fr</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+22507786214"
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Téléphone</p>
                  <p className="text-foreground font-medium">+225 07 78 62 14 84</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Localisation</p>
                  <p className="text-foreground font-medium">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-foreground/10">
              <p className="text-sm text-foreground/60 mb-4">Retrouvez-moi sur</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/kouame-kanh-ezechiel-5604837b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/yvanntihack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-foreground mb-8">Envoyez un message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Sujet du message"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
              >
                {submitted ? 'Message envoyé ✓' : 'Envoyer'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
