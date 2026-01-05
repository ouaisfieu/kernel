# 🎯 PLAN D'ACTION CONCRET : Financement + Infrastructure Live Open Source

**Statut** : BIM / Précarité
**Objectif** : Obtenir des financements via le secteur associatif + créer une expérience transparente et live
**Philosophie** : Web statique, libre, open source, réplicable

---

## PARTIE 1 : OBTENIR DES FINANCEMENTS — MAINTENANT

### 🚨 PROBLÈME : Tu n'as pas d'ASBL

**Solutions immédiates (sans créer d'ASBL) :**

#### Option A : Se faire "porter" par une ASBL existante
Une ASBL peut déposer un projet en ton nom et te reverser les fonds (moins frais de gestion ~5-10%).

**ASBL partenaires fiscales potentielles :**
| Organisation | Spécialité | Contact |
|--------------|------------|---------|
| **Fondation Roi Baudouin** | Compte projet (gratuit, tu reçois les dons) | kbs-frb.be/fr/tranquillitas |
| **Periferia asbl** | Participation citoyenne, éducation populaire | periferia.be |
| **Collectactif** | Portage de projets citoyens | collectactif.be |
| **All For Climate asbl** | Portage fiscal pour collectifs climat | allforclimate.earth |

**👉 ACTION IMMÉDIATE : Contacte la Fondation Roi Baudouin pour ouvrir un "Compte Projet Tranquillitas"**
- Gratuit
- Tu reçois les dons directement
- Les donateurs ont l'avantage fiscal
- Aucune structure juridique nécessaire de ton côté
- **Email** : tranquillitas@kbs-frb.be

#### Option B : Créer une ASBL (rapide et pas cher)
- **Coût** : ~150€ (publication Moniteur)
- **Délai** : 2-4 semaines
- **Membres requis** : 2 personnes minimum depuis 2019
- Pas besoin de notaire pour les statuts simples

---

### 💰 APPELS À PROJETS OUVERTS — À DÉPOSER MAINTENANT

#### Deadline < 1 mois

| Appel | Montant | Deadline | Lien |
|-------|---------|----------|------|
| **Fonds Pauvreté (FRB)** — projets petite échelle | 1.000-5.000€ | **02/02/2026** | kbs-frb.be/fr/pauvrete-fonds |
| **Fonds Hospitalières Sacré-Coeur** | Variable | **19/01/2026** | Via FRB |
| **Transmission FWB** (3 appels thématiques) | Variable | **30/01/2026** | culture.be |

#### Deadline < 3 mois

| Appel | Montant | Deadline | Lien |
|-------|---------|----------|------|
| **Éducation permanente ponctuelle (FWB)** | Jusqu'à 15.000€ | Permanent | educationpermanente.cfwb.be |
| **COCOF - Éducation permanente** | Variable | Continu | ccf.brussels |
| **Be Planet "Le Bon Moment"** | Variable | **01/02/2026** | beplanet.be |

#### Pour ton profil spécifique (précarité + citoyenneté)

| Appel | Pertinence | Lien |
|-------|------------|------|
| **Éducation financière (FRB)** | Si angle "comprendre le système pour le changer" | kbs-frb.be |
| **Digital For Youth** | Si angle numérique + jeunes vulnérables | kbs-frb.be |
| **Fonds VINCI** | Inclusion socio-professionnelle | kbs-frb.be |

---

### 📝 TEMPLATE DE PITCH POUR TON PROJET

**Titre** : [NOM_PROJET] — Manuel citoyen interactif de prévention électorale

**Résumé (100 mots)** :
> Initiative citoyenne open source visant à démocratiser l'accès aux outils de participation politique en Belgique. Le projet documente en temps réel et en transparence totale le parcours d'un citoyen précaire pour comprendre et agir sur le système politique belge. Tous les contenus, méthodes et outils développés sont libres et réplicables. L'objectif est de créer un "kit d'empowerment" accessible à tous, particulièrement aux publics éloignés de la politique institutionnelle.

**Axes de l'éducation permanente couverts** (pour dossiers FWB) :
- ✅ Participation citoyenne et développement communautaire
- ✅ Production d'outils didactiques
- ✅ Enjeux de société et de démocratie
- ✅ Sensibilisation citoyenne

**Budget type (petit projet)** :
```
Frais de fonctionnement (hébergement, domaine)     200€
Matériel (micro, webcam pour lives)                300€
Déplacements (réunions, événements)                500€
Communication (flyers, stickers)                   200€
Indemnités bénévoles                               800€
                                          TOTAL : 2.000€
```

---

## PARTIE 2 : INFRASTRUCTURE LIVE & TRANSPARENTE

### 🌐 Architecture Web Statique 100% Open Source

```
┌─────────────────────────────────────────────────────────────┐
│                    STACK TECHNIQUE                          │
├─────────────────────────────────────────────────────────────┤
│  📁 GÉNÉRATEUR STATIQUE : Hugo (le plus rapide)             │
│  🎨 THÈME : Custom (vert tendre #90EE90 + lilas #DDA0DD)    │
│  📊 DONNÉES : Fichiers JSON/YAML dans le repo               │
│  🔄 CI/CD : GitHub Actions (build automatique)              │
│  🌍 HÉBERGEMENT : GitHub Pages (gratuit) ou Netlify         │
│  💬 COMMENTAIRES : Giscus (basé sur GitHub Discussions)     │
│  📈 ANALYTICS : Umami (self-hosted, respectueux vie privée) │
└─────────────────────────────────────────────────────────────┘
```

### 📡 Système de Transparence Live

**Principe** : Chaque action est un commit Git = historique immuable et public

```
/content/
├── journal/                    # Blog/journal de bord
│   ├── 2026-01-05-lancement.md
│   └── ...
├── finances/                   # Transparence financière totale
│   ├── _index.md              # Dashboard
│   ├── entrees.yaml           # Toutes les entrées d'argent
│   ├── sorties.yaml           # Toutes les dépenses
│   └── justificatifs/         # Scans des factures
├── missions/                   # Quêtes ARG
│   ├── mission-001.md
│   └── ...
├── reseau/                     # Contacts, partenaires
│   └── carte.md
└── ressources/                 # Manuel citoyen
    ├── guide-kern.md
    ├── guide-participation.md
    └── ...

/data/
├── stats.yaml                  # Stats du projet (auto-update)
├── timeline.yaml               # Chronologie des événements
└── contributors.yaml           # Liste des contributeurs
```

### 💸 Dashboard Finances Transparent (exemple)

```yaml
# /data/finances/2026-01.yaml
mois: "janvier 2026"
solde_debut: 0
entrees:
  - date: "2026-01-15"
    montant: 2000
    source: "Fonds Pauvreté FRB"
    preuve: "/justificatifs/frb-2026-01.pdf"
    
sorties:
  - date: "2026-01-16"
    montant: 12
    categorie: "Hébergement"
    description: "Nom de domaine 1 an"
    preuve: "/justificatifs/ovh-2026-01.pdf"
    
solde_fin: 1988
```

### 🔴 Système de Live Statique (sans serveur)

**Option 1 : Lives sur YouTube/Twitch + embed statique**
- Tu fais tes lives sur une plateforme existante
- Le site affiche l'embed + archive automatique
- Zéro infrastructure à gérer

**Option 2 : Micro-blog temps réel via commits**
```bash
# Script pour poster une update en 1 commande
./post.sh "🔴 LIVE : Je suis au conseil communal de [commune]"
# → Crée un fichier markdown
# → Commit + push
# → GitHub Actions rebuild le site
# → Online en ~30 secondes
```

**Option 3 : Intégration Mastodon/Fediverse**
- Ton compte Mastodon = fil d'actualité
- Le site affiche automatiquement tes derniers posts
- Décentralisé, pas de censure possible

---

## PARTIE 3 : CHARTE GRAPHIQUE

### 🎨 Palette de couleurs

```css
:root {
  /* Mode sombre (défaut) */
  --bg-primary: #1a1a2e;
  --bg-secondary: #16213e;
  --text-primary: #eaeaea;
  --text-secondary: #b8b8b8;
  
  /* Couleurs d'accent */
  --vert-tendre: #90EE90;      /* Vert printemps */
  --lilas: #DDA0DD;            /* Lilas/mauve doux */
  --accent-hover: #98FB98;     /* Vert plus vif au hover */
  
  /* États */
  --success: #90EE90;
  --warning: #FFD700;
  --error: #FF6B6B;
  --info: #DDA0DD;
}

/* Mode clair */
[data-theme="light"] {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #1a1a2e;
  --text-secondary: #4a4a4a;
}

/* Mode néon */
[data-theme="neon"] {
  --vert-tendre: #39FF14;
  --lilas: #FF00FF;
  --bg-primary: #0a0a0a;
}

/* Mode disco */
[data-theme="disco"] {
  /* Animation de couleurs */
  animation: disco 2s infinite;
}
```

### 🔤 Typographies recommandées (Google Fonts, gratuites)

```css
/* Titres : rétro-futuriste */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

/* Corps : lisible et moderne */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

/* Code/monospace : hacker vibes */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');
```

---

## PARTIE 4 : OUTILS À DÉVELOPPER EN INTERNE

### 🛠️ Roadmap des outils

| Priorité | Outil | Description | Tech |
|----------|-------|-------------|------|
| 🔴 P0 | **TRANSPARENCY_DASHBOARD** | Affichage temps réel finances + activité | Hugo + JS vanilla |
| 🔴 P0 | **QUICK_POST** | Script CLI pour poster updates en 1 commande | Bash |
| 🟡 P1 | **MISSION_GENERATOR** | Créer des quêtes citoyennes facilement | YAML + templates |
| 🟡 P1 | **NETWORK_MAP** | Visualiser les connexions du projet | D3.js statique |
| 🟢 P2 | **KERN_TRACKER** | Scraper les ordres du jour du Conseil des ministres | Python + GitHub Actions |
| 🟢 P2 | **PILIER_MAP** | Cartographie interactive pilarisation | Leaflet + GeoJSON |
| 🔵 P3 | **ARG_ENGINE** | Système de points/badges | JSON + localStorage |

### 📦 Stack recommandée

```yaml
Générateur de site: Hugo (v0.120+)
Hébergement: GitHub Pages ou Netlify (gratuit)
CI/CD: GitHub Actions
Commentaires: Giscus (GitHub Discussions)
Analytics: Umami (self-hosted) ou Plausible
Recherche: Pagefind (statique)
Newsletter: Buttondown (gratuit jusqu'à 100 abonnés)
Formulaires: Formspree ou Netlify Forms
```

---

## ✅ TA TODO LIST CETTE SEMAINE

### Jour 1-2 : Financement
- [ ] Envoie un email à tranquillitas@kbs-frb.be pour ouvrir un compte projet
- [ ] Crée un compte sur kbs-frb.be pour voir les appels à projets
- [ ] Identifie 1 ASBL locale qui pourrait porter ton projet (CPAS, maison de quartier, etc.)

### Jour 3-4 : Infrastructure
- [ ] Crée un repo GitHub pour le projet (nom de code ?)
- [ ] Clone ce template Hugo minimaliste : `git clone https://github.com/adityatelange/hugo-PaperMod`
- [ ] Configure les couleurs de base (vert/lilas)
- [ ] Écris ton premier post de journal

### Jour 5-7 : Lancement soft
- [ ] Crée un compte Mastodon dédié au projet
- [ ] Poste ton premier update public
- [ ] Partage le lien du repo avec 2-3 personnes de confiance

---

## 📚 RESSOURCES

### Documentation technique
- Hugo : gohugo.io/documentation
- GitHub Pages : docs.github.com/pages
- Giscus : giscus.app

### Financement
- FRB appels à projets : kbs-frb.be/fr/repondre-un-appel-projets
- Éducation permanente FWB : educationpermanente.cfwb.be
- Brulocalis (veille subsides) : brulocalis.brussels/fr/subsides
- monasbl.be : ressources pour ASBL

### Inspiration
- beautifultrouble.org : tactiques militantes
- activisthandbook.org : wiki pour activistes

---

*Ce document est open source. Copie, adapte, diffuse.*
