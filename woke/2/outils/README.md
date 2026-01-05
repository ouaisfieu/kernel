Je vais créer ces deux modules interconnectés — le cerveau et le réseau social de KERN.## 🧠 KERN::KNOWLEDGE + 🔗 KERN::NETWORK

Deux modules complémentaires — le cerveau et le réseau social de KERN.

---

## 🧠 KNOWLEDGE GRAPH (47 KB)

### Fonctionnalités Obsidian-like

| Feature | Description |
|---------|-------------|
| **[[Liens internes]]** | Syntaxe `[[Note]]` pour créer des connexions |
| **#Tags** | Organisation par hashtags |
| **Graphe D3.js** | Force-directed interactif avec drag & drop |
| **Recherche instantanée** | Filtrage en temps réel |
| **Preview Markdown** | Rendu en temps réel avec liens cliquables |
| **Auto-save** | Sauvegarde automatique avec debounce |
| **XP System** | +15 XP par note créée |

### Syntaxe supportée

```markdown
# Titre
## Sous-titre
**gras** et *italique*
[[Lien vers une note]]
#tag #projet #recherche
`code inline`
> citation
- liste
```

### Légende du graphe

- 🟣 **Violet** — Note standard
- 🔵 **Cyan** — Hub (5+ liens)
- 🟡 **Amber** — Note orpheline

---

## 🔗 CONTACT NETWORK (57 KB)

### Fonctionnalités

| Feature | Description |
|---------|-------------|
| **Graphe centré sur vous** | Vous êtes le nœud central (amber) |
| **8 types de contacts** | Collègue, Source, Politique, Journaliste, Activiste, Ami, Famille, Pro |
| **Force du lien** | 5 niveaux (faible → intime) |
| **Connexions inter-contacts** | Liens entre vos contacts (toggle 2°) |
| **Filtres par type** | Vue rapide par catégorie |
| **Skill "Réseau"** | +20 XP par contact ajouté |

### Types de contacts

| Type | Couleur | Usage |
|------|---------|-------|
| Collègue | 🟣 Violet | Travail quotidien |
| Source | 🟡 Amber | Informateurs |
| Politique | 🔴 Rouge | Élus, attachés |
| Journaliste | 🟣 Purple | Presse |
| Activiste | 🟠 Orange | Société civile |
| Ami | 🟢 Vert | Personnel |

### Modes de visualisation

- **Radiale** — Centrée sur vous
- **Force** — Équilibre naturel
- **Hiérarchie** — Par importance

---

## 🎮 Système XP

| Module | Action | XP |
|--------|--------|-----|
| Knowledge | Créer une note | +15 |
| Knowledge | Créer depuis lien | +15 |
| Network | Ajouter un contact | +20 |

**Niveau up = XP requis × 1.4** (courbe de progression)

---

## 💾 Stockage

Les deux modules utilisent **localStorage** séparément :
- `kern_knowledge` — Notes + XP
- `kern_network_contacts` — Contacts
- `kern_network_skill` — Skill Réseau

**Export JSON disponible** dans Network pour backup.

---

**Total KERN : 19 modules, ~1.05 MB** 🚀
