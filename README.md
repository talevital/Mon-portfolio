# Portfolio Moderne

Un portfolio professionnel et responsive créé avec Next.js, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- **Design moderne** avec glassmorphism et animations fluides
- **Mode sombre/clair** avec toggle automatique
- **Responsive design** optimisé pour mobile, tablette et desktop
- **Animations** avec Framer Motion pour une expérience utilisateur premium
- **SEO optimisé** avec les bonnes pratiques
- **Performance** optimisée avec Next.js

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour une meilleure maintenabilité
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations
- **Lucide React** - Icônes modernes
- **Next Themes** - Gestion du mode sombre

## 📦 Installation

1. Clonez le projet :
```bash
git clone <votre-repo>
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Personnalisation

### Modifier les informations personnelles

1. **Nom et titre** : Modifiez le fichier `src/components/Hero.tsx`
2. **Informations de contact** : Mettez à jour `src/components/Contact.tsx`
3. **Compétences** : Personnalisez `src/components/Skills.tsx`
4. **Projets** : Ajoutez vos projets dans `src/components/Projects.tsx`
5. **À propos** : Éditez le contenu dans `src/components/About.tsx`

### Couleurs et thème

Les couleurs sont définies dans `tailwind.config.ts` et `src/app/globals.css`. Vous pouvez :
- Modifier les couleurs de dégradé
- Ajuster les effets de glassmorphism
- Personnaliser les animations

### Images

Remplacez les placeholders d'images par vos vraies photos :
- Photo de profil dans `Hero.tsx`
- Images de projets dans `Projects.tsx`

## 📁 Structure du projet

```
src/
├── app/
│   ├── globals.css          # Styles globaux et utilitaires
│   ├── layout.tsx           # Layout principal avec SEO
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── About.tsx            # Section À propos
│   ├── Contact.tsx          # Section Contact avec formulaire
│   ├── Footer.tsx           # Pied de page
│   ├── Header.tsx           # Navigation avec menu mobile
│   ├── Hero.tsx             # Section d'accueil
│   ├── Projects.tsx         # Section Projets
│   ├── Skills.tsx           # Section Compétences
│   └── ThemeProvider.tsx    # Provider pour le mode sombre
```

## 🎯 Fonctionnalités détaillées

### Mode sombre/clair
- Toggle automatique avec `next-themes`
- Persistance des préférences utilisateur
- Transitions fluides entre les modes

### Animations
- Animations d'entrée avec Framer Motion
- Effets de hover sur les éléments interactifs
- Transitions de page fluides
- Animations de scroll

### Responsive Design
- Mobile-first approach
- Breakpoints optimisés
- Navigation mobile avec menu hamburger
- Grilles adaptatives

### Performance
- Optimisation des images avec Next.js
- Lazy loading des composants
- Code splitting automatique
- SEO optimisé

## 🚀 Déploiement

### Vercel (recommandé)
1. Connectez votre repo GitHub à Vercel
2. Déployez automatiquement à chaque push

### Autres plateformes
```bash
npm run build
npm start
```

## 📝 Notes de développement

- Le projet utilise l'App Router de Next.js 14
- TypeScript est configuré avec des types stricts
- Les composants sont optimisés pour la réutilisabilité
- Le code est bien commenté pour faciliter les modifications

## 🤝 Contribution

N'hésitez pas à contribuer en :
- Signalant des bugs
- Proposant de nouvelles fonctionnalités
- Améliorant la documentation

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

Créé avec ❤️ et beaucoup de café ☕