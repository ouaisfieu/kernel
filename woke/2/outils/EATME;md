# EATME.md

## 🔍 ÉTAT ACTUEL — AUDIT D'INTEROPÉRABILITÉ

| Module | localStorage Key | Communique avec | Isolé ? |
|--------|------------------|-----------------|---------|
| BELDATA | `kern_beldata` | ❌ Rien | ⚠️ OUI |
| DOSSIERS | `kern_dossiers` | ❌ Rien | ⚠️ OUI |
| PANOPTICON | `kern_panopticon` | ❌ Rien | ⚠️ OUI |
| KNOWLEDGE | `kern_knowledge` | ❌ Rien | ⚠️ OUI |
| NETWORK | `kern_network_*` | ❌ Rien | ⚠️ OUI |
| NEXUS PRIME | `nexus_prime_*` | ❌ Rien | ⚠️ OUI |
| NEXUS ARG | `nexus_arg_*` | ❌ Rien | ⚠️ OUI |
| Journal | `kern_journal` | ❌ Rien | ⚠️ OUI |
| Missions | `kern_missions` | ❌ Rien | ⚠️ OUI |

**Verdict brutal : 19 modules qui ne se parlent PAS.** C'est une collection d'outils, pas un écosystème.

---

## 🚨 CE QUI MANQUE POUR PESER

### 1. 🔗 INTEROPÉRABILITÉ RÉELLE

```
PROBLÈME ACTUEL:
- Créer un dossier dans KERN::DOSSIERS → n'apparaît PAS dans PANOPTICON
- Ajouter un contact dans NETWORK → n'existe PAS dans PANOPTICON
- Gagner de l'XP dans KNOWLEDGE → différent de l'XP NEXUS PRIME
- Notes KNOWLEDGE → ne référencent PAS les dossiers
```

**SOLUTION : KERN::CORE — Un bus de données central**

```javascript
// kern-core.js - À importer dans TOUS les modules
const KERN = {
    // Store unifié
    data: {
        dossiers: [],
        entities: [],    // Pour PANOPTICON
        contacts: [],    // Pour NETWORK
        notes: [],       // Pour KNOWLEDGE
        player: {},      // XP, niveau, skills unifié
    },
    
    // Events cross-modules
    on: (event, callback) => {},
    emit: (event, data) => {},
    
    // API unifiée
    createDossier: (data) => {},
    createEntity: (data) => {},
    linkEntities: (id1, id2, relation) => {},
}
```

### 2. 🎮 XP & PROGRESSION UNIFIÉE

```
ACTUELLEMENT:
- KNOWLEDGE: XP séparé, niveaux séparés
- NETWORK: Skill "Réseau" séparé
- NEXUS PRIME: Système RPG complet mais isolé
- NEXUS ARG: Clearance séparé

DEVRAIT ÊTRE:
- 1 profil agent unifié
- XP global qui alimente les skills
- Actions dans N'IMPORTE quel module = progression
```

### 3. 📊 DONNÉES RÉELLES PRÉ-CHARGÉES

```
CE QU'ON A: Interfaces vides que l'user doit remplir
CE QU'IL FAUT: Base de départ avec vraies données

- 150 députés fédéraux (nom, parti, commission, contact)
- 21 ministres fédéraux
- 124 députés wallons + 124 flamands + 89 bruxellois
- Votes clés récents
- Organigrammes des partis
- Liens lobbys <-> politiques connus
```

### 4. 📱 TECH MODERNE

| Manque | Impact |
|--------|--------|
| **PWA / Service Worker** | Pas installable, pas de vrai offline |
| **IndexedDB** | localStorage limité à 5-10MB |
| **Import/Export unifié** | Pas de backup global |
| **Raccourcis clavier** | UX power-user faible |
| **Mode mobile** | Responsive basique |

### 5. 🌐 FEATURES "GAME CHANGER"

| Feature | Difficulté | Impact |
|---------|------------|--------|
| **Scraping auto** des votes parlementaires | 🔴 Serveur requis | 🔥🔥🔥 |
| **Alertes** quand un sujet bouge | 🔴 Backend requis | 🔥🔥🔥 |
| **Collaboration** entre utilisateurs | 🔴 Serveur requis | 🔥🔥 |
| **Import CSV/JSON** de données | 🟢 Faisable | 🔥🔥 |
| **Recherche globale** cross-modules | 🟡 Medium | 🔥🔥 |
| **Timeline** des événements | 🟢 Faisable | 🔥 |

---

## 🎯 PLAN D'ACTION POUR "PESER"

### PHASE 1 : UNIFICATION (Faisable maintenant)

```
□ Créer KERN-CORE.js — bus de données central
□ Refactorer les modules pour utiliser KERN-CORE
□ Profil agent unifié (XP, skills, clearance)
□ Recherche globale cross-modules
□ Dashboard unifié avec vraies stats
```

### PHASE 2 : CONTENU (Faisable maintenant)

```
□ Pré-charger données politiques belges réelles
□ Templates de dossiers (scandale type, loi type, etc.)
□ Missions pré-créées avec objectifs réels
□ Tutoriel interactif / onboarding
```

### PHASE 3 : POLISH (Faisable maintenant)

```
□ PWA manifest + Service Worker
□ Raccourcis clavier globaux
□ Import/Export unifié (1 fichier = tout KERN)
□ Mode sombre/clair
□ Responsive mobile amélioré
```

### PHASE 4 : GAME CHANGERS (Nécessite backend)

```
□ API scraping votes La Chambre
□ Alertes Telegram/Signal
□ Sync multi-devices
□ Mode collaboratif
```

---

## 💡 PROPOSITION IMMÉDIATE

Je peux créer maintenant :

1. **KERN-CORE.js** — Le cerveau central qui unifie tout
2. **Refactorer 2-3 modules clés** pour prouver le concept (DOSSIERS ↔ PANOPTICON ↔ NETWORK)
3. **Profil Agent Unifié** — 1 identité, 1 XP, toutes les compétences
4. **Data pack politique belge** — JSON avec vraies données

**Qu'est-ce qui te semble prioritaire ?**

---

## 📊 COMPARAISON HONNÊTE

| Critère | KERN Actuel | Obsidian | Notion | Pour gagner |
|---------|-------------|----------|--------|-------------|
| Notes interconnectées | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | OK |
| Graphe de données | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ✅ Avantage |
| 100% Offline | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ✅ Avantage |
| Interopérabilité | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 🚨 À AMÉLIORER |
| Gamification | ⭐⭐⭐⭐⭐ | ⭐ | ⭐ | ✅ Avantage unique |
| Données pré-chargées | ⭐ | ⭐ | ⭐⭐ | 🚨 À AMÉLIORER |
| UX Polish | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 🚨 À AMÉLIORER |
| Niche politique | ⭐⭐⭐⭐⭐ | ⭐ | ⭐ | ✅ UNIQUE |

**Notre force : Niche politique + Gamification + 100% Offline + Graphes**
**Notre faiblesse : Modules isolés + Pas de données + UX à polir**
