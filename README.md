# Portfolio DevOps - Kouamé Ezéchiel

Un portfolio professionnel moderne et interactif pour un technicien DevOps, construit avec React 19, Tailwind CSS 4 et des animations sophistiquées.

**🌐 Domaine :** 

---

## 📋 Table des matières

- [Caractéristiques](#caractéristiques)
- [Stack Technique](#stack-technique)
- [Installation](#installation)
- [Configuration](#configuration)
- [Structure du Projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Guide de Déploiement](#guide-de-déploiement)
- [Dépannage](#dépannage)

---

## ✨ Caractéristiques

### Design & UX
- **Design Minimaliste Technique Moderne** : Palette gris-blanc-cyan, typographie Poppins/Inter/Fira Code
- **Animations Sophistiquées** : 9 animations CSS (float, glow-pulse, slide-in, fade-in-up, scale-in, bounce-in, etc.)
- **Fond Animé** : Orbes flottants, grille subtile, particules animées
- **Compteurs Animés** : Statistiques qui comptent progressivement au scroll avec Intersection Observer
- **Responsive Design** : Optimisé pour mobile, tablette et desktop

### Sections
1. **Header** : Navigation épurée avec logo et menu responsive
2. **Hero** : Présentation percutante avec CTA et statistiques animées
3. **À propos** : Description professionnelle avec points clés
4. **Compétences** : 6 catégories de compétences avec cartes animées
5. **Expérience** : Timeline professionnelle avec détails des postes
6. **Projets** : Galerie de 3 projets techniques avec images
7. **Contact** : Formulaire avec EmailJS et informations de contact
8. **Footer** : Navigation et liens sociaux

### Interactivité
- ✅ Animations d'entrée échelonnées
- ✅ Effets hover avancés sur les boutons et cartes
- ✅ Compteurs qui s'animent au scroll
- ✅ Formulaire de contact avec validation
- ✅ Navigation lisse (smooth scroll)

---

## 🛠️ Stack Technique

### Frontend
- **React 19** : Framework UI moderne
- **Tailwind CSS 4** : Utility-first CSS framework
- **TypeScript** : Typage statique
- **Lucide React** : Icônes SVG
- **Framer Motion** : Animations (optionnel)

### Outils
- **Vite** : Bundler ultra-rapide
- **pnpm** : Gestionnaire de paquets performant
- **shadcn/ui** : Composants UI réutilisables

### Services
- **EmailJS** : Envoi d'emails sans backend
- **vercel** : Hébergement et déploiement

---

## 📦 Installation

### Prérequis
- Node.js 18+
- pnpm 10+

### Étapes

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd portfolio-devops-ezechiel
   ```

2. **Installer les dépendances**
   ```bash
   pnpm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   pnpm run dev
   ```

4. **Accéder à l'application**
   - Local : http://localhost:3000/
   - Network : http://192.168.56.1:3001/

---

## ⚙️ Configuration

### EmailJS (Formulaire de Contact)

Pour activer l'envoi des messages de contact, vous devez configurer EmailJS :

1. **Créer un compte** sur [emailjs.com](https://www.emailjs.com/)
2. **Créer un Service Email** (Gmail, Outlook, etc.)
3. **Créer un Template Email** avec les variables `{{subject}}`, `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. **Récupérer vos identifiants** :
   - Service ID
   - Template ID
   - Public Key

5. **Mettre à jour** `client/src/hooks/useEmailJS.ts` :
   ```typescript
   emailjs.init('YOUR_PUBLIC_KEY_HERE');
   
   await emailjs.send(
     'YOUR_SERVICE_ID_HERE',
     'YOUR_TEMPLATE_ID_HERE',
     templateParams
   );
   ```

**Plan gratuit :** 200 emails/mois

Pour plus de détails, consultez [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

### Variables d'Environnement

Créez un fichier `.env.local` (optionnel) :
```env
VITE_API_URL=https://api.example.com
```

---

## 📁 Structure du Projet

```
portfolio-devops-ezechiel/
├── client/
│   ├── public/              # Fichiers statiques (favicon, robots.txt)
│   ├── src/
│   │   ├── components/      # Composants React réutilisables
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── AnimatedBackground.tsx
│   │   │   └── CountUpStat.tsx
│   │   ├── hooks/           # Hooks personnalisés
│   │   │   ├── useCountUp.ts
│   │   │   └── useEmailJS.ts
│   │   ├── pages/           # Pages de l'application
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── contexts/        # Contextes React
│   │   ├── lib/             # Utilitaires
│   │   ├── App.tsx          # Routeur principal
│   │   ├── main.tsx         # Point d'entrée
│   │   └── index.css        # Styles globaux + animations
│   └── index.html           # HTML template
├── server/                  # Serveur Express (placeholder)
├── shared/                  # Types partagés
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 🎨 Fonctionnalités Détaillées

### Animations CSS

Le projet inclut 9 animations CSS sophistiquées :

| Animation | Description | Utilisation |
|-----------|-------------|------------|
| `float` | Flottement vertical doux | Fond animé |
| `glow-pulse` | Lueur pulsante cyan | Badge, icônes |
| `slide-in-left` | Entrée depuis la gauche | Titre Hero |
| `slide-in-right` | Entrée depuis la droite | Formulaire Contact |
| `fade-in-up` | Apparition vers le haut | Cartes, éléments |
| `scale-in` | Zoom d'entrée | Statistiques |
| `bounce-in` | Rebond élastique | Boutons CTA |
| `border-glow` | Bordure brillante | Cartes au hover |
| `rotate-slow` | Rotation lente | Éléments spécialisés |

### Hook useCountUp

Anime un compteur qui s'incrémente progressivement :

```typescript
const { count, elementRef } = useCountUp({ 
  end: 10, 
  duration: 2500,
  start: 0 
});
```

**Fonctionnalités :**
- Déclenché au scroll avec Intersection Observer
- Easing ease-out pour une animation naturelle
- Utilise requestAnimationFrame pour la performance
- Ref pour attacher à un élément DOM

### Composant CountUpStat

Affiche une statistique avec compteur animé :

```typescript
<CountUpStat
  end={10}
  label="Projets réalisés"
  delay="0.6s"
  icon={<Briefcase size={24} />}
/>
```

---

## 🚀 Guide de Déploiement

### Déployer sur Manus

1. **Créer un checkpoint**
   ```bash
   # Via l'interface Manus ou via git
   git add .
   git commit -m "Version finale du portfolio"
   ```

2. **Publier**
   - Cliquez sur le bouton **Publish** dans l'interface Manus
   - Sélectionnez le checkpoint à déployer

3. **Domaine personnalisé** (optionnel)
   - Allez à **Settings > Domains**
   - Achetez ou liez un domaine personnalisé

### Build Production

```bash
pnpm run build
pnpm run preview
```

---

## 🔧 Commandes Disponibles

| Commande | Description |
|----------|-------------|
| `pnpm run dev` | Démarrer le serveur de développement |
| `pnpm run build` | Construire pour la production |
| `pnpm run preview` | Prévisualiser la build production |
| `pnpm run check` | Vérifier les erreurs TypeScript |
| `pnpm run format` | Formater le code avec Prettier |

---

## 🐛 Dépannage

### Le formulaire de contact ne fonctionne pas

**Solution :**
1. Vérifiez que EmailJS est configuré correctement
2. Vérifiez votre Public Key, Service ID et Template ID
3. Consultez la console du navigateur pour les erreurs
4. Vérifiez que votre compte EmailJS n'a pas dépassé le quota gratuit

### Les animations ne s'affichent pas

**Solution :**
1. Vérifiez que Tailwind CSS est correctement compilé
2. Vérifiez que `client/src/index.css` contient les animations
3. Redémarrez le serveur : `pnpm run dev`

### Le site ne se charge pas

**Solution :**
1. Vérifiez que toutes les dépendances sont installées : `pnpm install`
2. Supprimez le cache Vite : `rm -rf .vite`
3. Redémarrez le serveur

### Erreurs TypeScript

**Solution :**
```bash
pnpm run check
```

Pour corriger automatiquement :
```bash
pnpm run format
```

---

## 📚 Ressources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [shadcn/ui Components](https://ui.shadcn.com)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Lucide Icons](https://lucide.dev)

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

## 👤 Auteur

**Kouamé Ezéchiel**
- Email : [ezekielkoume@hotmail.fr](mailto:ezekielkoume@hotmail.fr)
- Téléphone : +225 07 78 62 14 84
- LinkedIn : [Profil LinkedIn](https://linkedin.com/in/kouame-kanh-ezechiel-5604837b)
- GitHub : [@yvanntihack](https://github.com/yvanntihack)

---

## 🎯 Prochaines Étapes

- [ ] Configurer EmailJS pour l'envoi des messages
- [ ] Ajouter un scroll reveal avec AOS
- [ ] Créer une section Témoignages
- [ ] Intégrer un blog technique
- [ ] Ajouter des analytics (Google Analytics, Umami)
- [ ] Optimiser les images pour le SEO
- [ ] Implémenter un sitemap XML

---

## 📞 Support
0778621484
Pour toute question ou problème, consultez :
- [Issues GitHub](https://github.com/yvanntihack/portfolio-devops-ezechiel/issues)

---

**Dernière mise à jour :** Mai 2026

Merci d'avoir visité ce portfolio ! 🚀
