# 🛰️ DASHBOARD KERN_BREACH — Spécifications

## Architecture : "Citizen Intelligence Platform"

Un tableau de bord digne de la NSA pour monitorer ton initiative citoyenne en temps réel.
Stack : React + données statiques (JSON/YAML) + API externes gratuites.

---

## 🖥️ ÉCRAN PRINCIPAL — Command Center

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  🟢 KERN_BREACH COMMAND CENTER                    [◐ theme] [⚙️] [👤]      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │   €1,847     │ │     127      │ │      42      │ │     89%      │       │
│  │   ▲ +€200    │ │   ▲ +12      │ │   ▲ +3       │ │   ▲ +2%      │       │
│  │   TRÉSORERIE │ │ PARTICIPANTS │ │  MISSIONS    │ │  SANTÉ SYS   │       │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘       │
│                                                                             │
│  ┌─────────────────────────────────────┐ ┌─────────────────────────────────┐│
│  │ 📊 ACTIVITÉ TEMPS RÉEL              │ │ 🗺️ CARTE DES OPÉRATIONS        ││
│  │                                     │ │                                 ││
│  │  ████████████░░░░ 14:32            │ │    ● Bruxelles (23)             ││
│  │  █████████░░░░░░░ 14:28            │ │    ● Liège (12)                 ││
│  │  ██████████████░░ 14:15            │ │    ● Namur (8)                  ││
│  │  ███████░░░░░░░░░ 14:02            │ │    ● Charleroi (5)              ││
│  │                                     │ │    ○ Mons (2)                   ││
│  │  [Live feed: commits, posts, etc]  │ │                                 ││
│  └─────────────────────────────────────┘ └─────────────────────────────────┘│
│                                                                             │
│  ┌─────────────────────────────────────┐ ┌─────────────────────────────────┐│
│  │ 💰 FLUX FINANCIER                   │ │ 🎯 MISSIONS EN COURS            ││
│  │                                     │ │                                 ││
│  │  IN  ████████████ €2,047           │ │  ● GHOST_COUNCIL    [███░░] 60% ││
│  │  OUT ████████░░░░ €1,200           │ │  ● PILIER_MAP       [████░] 80% ││
│  │                                     │ │  ● KERN_WATCH       [██░░░] 40% ││
│  │  Dernière transaction:              │ │  ● COALITION_01     [█░░░░] 20% ││
│  │  -€12.00 | Domaine | 05/01         │ │                                 ││
│  └─────────────────────────────────────┘ └─────────────────────────────────┘│
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │ 📡 ALERTES & ÉVÉNEMENTS                                     [Voir tout]││
│  │                                                                         ││
│  │  🔴 14:45 | Conseil communal Schaerbeek — ce soir 19h                  ││
│  │  🟡 14:30 | Nouveau participant : @citizen_42                          ││
│  │  🟢 14:15 | Mission GHOST_COUNCIL validée par @user_17                 ││
│  │  🔵 13:52 | Commit: "Ajout ressource KERN" (github.com/...)            ││
│  └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📊 MODULES DÉTAILLÉS

### 1. MODULE FINANCES — "Treasury Monitor"

**Fonctionnalités :**
- Balance en temps réel avec tendance
- Graphique d'évolution sur 30/90/365 jours
- Liste de toutes les transactions (filtrable)
- Burn rate (vitesse de dépense)
- Runway (combien de temps avant épuisement)
- Répartition par catégorie (pie chart)
- Alertes automatiques (seuil bas, dépense anormale)
- Export CSV/PDF

**Sources de données :**
```yaml
# /data/finances.yaml - mis à jour manuellement ou via script
transactions:
  - id: "TXN-001"
    date: "2026-01-15"
    type: "in"
    amount: 2000
    source: "FRB Fonds Pauvreté"
    category: "Subvention"
    proof: "/docs/frb-001.pdf"
    verified: true
```

**Métriques calculées automatiquement :**
- Total IN / Total OUT
- Solde actuel
- Moyenne mensuelle
- Projection à 3/6/12 mois

---

### 2. MODULE PARTICIPANTS — "Network Intelligence"

**Fonctionnalités :**
- Nombre total de participants (anonymisé)
- Répartition géographique (carte Belgique)
- Croissance (courbe temporelle)
- Niveau d'engagement (actif/passif/dormant)
- Leaderboard des contributeurs (opt-in)
- Graphe du réseau (connexions entre participants)
- Nouveaux arrivants (feed)

**Niveaux d'engagement :**
```
🟢 Actif     : Action dans les 7 derniers jours
🟡 Passif    : Action dans les 30 derniers jours  
🔴 Dormant   : Pas d'action depuis 30+ jours
⚪ Observateur: Inscrit mais jamais d'action
```

**Respect vie privée :**
- Pas de tracking nominatif par défaut
- Pseudonymes uniquement
- Opt-in pour apparaître dans les stats publiques
- Données agrégées seulement

---

### 3. MODULE MISSIONS — "Operation Tracker"

**Fonctionnalités :**
- Liste de toutes les missions (actives/complétées/archivées)
- Progression en temps réel
- Participants par mission
- Timeline des validations
- XP total distribué
- Missions les plus populaires
- Suggestions de nouvelles missions (IA ?)

**Structure d'une mission :**
```yaml
mission:
  code: "GHOST_COUNCIL"
  title: "Fantôme au Conseil"
  status: "active"  # active | completed | archived
  difficulty: "easy"  # easy | medium | hard | expert
  xp: 150
  participants: 23
  completions: 18
  created: "2026-01-05"
  deadline: null  # ou date
  requirements:
    - "Assister à un conseil communal"
    - "Documenter l'expérience"
    - "Partager sur le canal"
```

---

### 4. MODULE POLITIQUE — "KERN Watch"

**Fonctionnalités :**
- Calendrier politique belge (conseils des ministres, votes, etc.)
- Alertes sur les décisions importantes
- Scraping automatique des ordres du jour
- Suivi des parlementaires (votes, interventions)
- Timeline des événements politiques
- Indicateur de "température politique" (analyse sentiment)

**Sources de données (API/scraping) :**
- lachambre.be (ordres du jour, votes)
- parlement.wallonie.be
- parlement.brussels
- dekamer.be
- consilium.europa.eu

**Alertes configurables :**
```yaml
alerts:
  - type: "kern_meeting"
    trigger: "24h before"
    channel: "matrix"
  - type: "vote_budget"
    keywords: ["budget", "sociale", "chômage"]
    channel: "all"
```

---

### 5. MODULE VEILLE — "Intelligence Feed"

**Fonctionnalités :**
- Agrégation de flux RSS (médias belges)
- Filtrage par mots-clés
- Analyse de sentiment (positif/négatif/neutre)
- Détection de trending topics
- Archivage automatique
- Partage facile vers les canaux

**Sources suggérées :**
```yaml
feeds:
  - name: "RTBF Info"
    url: "https://www.rtbf.be/rss/info"
    category: "mainstream"
  - name: "Médor"
    url: "https://medor.coop/feed/"
    category: "investigation"
  - name: "Apache"
    url: "https://apache.be/feed/"
    category: "investigation"
  - name: "CRISP"
    url: "https://www.crisp.be/feed/"
    category: "analyse"
```

---

### 6. MODULE SOCIAL — "Network Monitor"

**Fonctionnalités :**
- Statistiques Mastodon (followers, engagement)
- Mentions et hashtags (#KernBreach, etc.)
- Reach estimé
- Posts les plus performants
- Calendrier de publication suggéré
- Intégration du fil Mastodon en temps réel

**Métriques :**
- Impressions / Engagement rate
- Croissance followers
- Hashtag performance
- Best posting times

---

### 7. MODULE SANTÉ SYSTÈME — "System Health"

**Fonctionnalités :**
- Uptime du site web
- Performance (vitesse de chargement)
- Erreurs détectées
- Derniers déploiements (GitHub Actions)
- Taille du repo
- Contributeurs actifs sur le code
- Issues/PR en attente

**Indicateurs :**
```
🟢 Tous systèmes opérationnels
🟡 Dégradation mineure
🔴 Incident en cours
```

---

### 8. MODULE CALENDRIER — "Ops Calendar"

**Fonctionnalités :**
- Agenda partagé (ateliers, lives, deadlines)
- Intégration politique (conseils communaux, etc.)
- Rappels automatiques
- Export iCal
- Sync avec autres calendriers

**Types d'événements :**
- 🎓 Atelier
- 🔴 Live
- 🏛️ Politique
- 📅 Deadline
- 🎯 Mission collective

---

## 🎨 DESIGN SYSTEM

### Palette de couleurs (mode sombre)
```css
--bg-0: #05050a;      /* Fond principal */
--bg-1: #0a0a12;      /* Cartes */
--bg-2: #12121f;      /* Éléments surélevés */
--text-1: #e8e8ec;    /* Texte principal */
--text-2: #8888a0;    /* Texte secondaire */
--vert: #90EE90;      /* Accent principal */
--lilas: #DDA0DD;     /* Accent secondaire */
--rouge: #ff4757;     /* Alertes/erreurs */
--jaune: #ffd93d;     /* Warnings */
--bleu: #5dade2;      /* Info */
```

### Typographie
```css
--font-display: 'Orbitron', monospace;  /* Titres, chiffres */
--font-body: 'Inter', sans-serif;        /* Corps de texte */
--font-mono: 'JetBrains Mono', mono;     /* Code, données */
```

### Composants
- Cards avec bordure subtile + glow au hover
- Graphiques avec grille et lignes néon
- Badges colorés par statut
- Animations fluides (60fps)
- Responsive (mobile-first)

---

## 🔧 STACK TECHNIQUE RECOMMANDÉE

### Frontend
```
React 18+ (ou Svelte pour la légèreté)
├── Recharts / Victory (graphiques)
├── React-Leaflet (cartes)
├── Framer Motion (animations)
├── TanStack Query (data fetching)
└── Tailwind CSS (styling)
```

### Backend (serverless/statique)
```
Données statiques (JSON/YAML dans GitHub)
├── GitHub Actions (scheduled updates)
├── Cloudflare Workers (API proxy, scraping)
└── Supabase (optionnel, pour temps réel)
```

### Sources de données
```
GitHub API          → Commits, issues, contributors
Mastodon API        → Stats sociales
RSS feeds           → Veille média
Scraping custom     → Données politiques
Fichiers locaux     → Finances, missions, participants
```

---

## 🚀 ROADMAP DE DÉVELOPPEMENT

### Phase 1 — MVP (2 semaines)
- [ ] Dashboard de base avec 4 widgets
- [ ] Module finances (lecture fichier YAML)
- [ ] Module missions (progression)
- [ ] Alertes basiques
- [ ] Design system complet

### Phase 2 — Intelligence (4 semaines)
- [ ] Module politique (scraping lachambre.be)
- [ ] Module veille (agrégation RSS)
- [ ] Carte des participants
- [ ] Graphiques avancés

### Phase 3 — Automatisation (6 semaines)
- [ ] Alertes temps réel (Matrix/Discord)
- [ ] Scraping automatisé
- [ ] API publique
- [ ] Mobile app (PWA)

### Phase 4 — IA (optionnel)
- [ ] Analyse de sentiment
- [ ] Suggestions de missions
- [ ] Détection d'anomalies
- [ ] Résumés automatiques

---

## 🔒 SÉCURITÉ & PRIVACY

### Principes
- **Privacy by design** : pas de tracking nominatif
- **Données minimales** : on ne collecte que l'essentiel
- **Transparence** : le code est public
- **Chiffrement** : communications Matrix/Signal

### Données sensibles
- Pseudonymes hashés (pas d'identité réelle)
- Géolocalisation approximative (ville, pas adresse)
- Opt-in pour toute stat publique

---

## 📦 LIVRABLES

1. **Code source** (React app, MIT license)
2. **Documentation** (setup, configuration, contribution)
3. **Scripts** (scraping, mise à jour données)
4. **Design Figma** (maquettes complètes)
5. **API spec** (OpenAPI/Swagger)

---

*Ce dashboard est conçu pour être réplicable par n'importe quel collectif citoyen.*
*Tout le code sera open source et documenté.*
