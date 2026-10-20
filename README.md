# Yves Loïc SOATIANAINA — Portfolio

Portfolio personnel d'**AI & LLMOps Engineer** : agents IA, RAG, serving de LLMs et infrastructure Kubernetes.

🌐 **https://yvesloic5.github.io**

*English: personal portfolio of an AI & LLMOps Engineer — AI agents, RAG, LLM serving and Kubernetes infrastructure. The site is bilingual (FR default, EN toggle).*

## Ce que contient le site

- **Accueil** — une scène animée qui raconte mon métier en 5 étapes, sans rien lire : un client à bout, son besoin, je fabrique son robot, je le lui livre, il gagne.
- **Réalisations** — projets en production (Swiftask, IA Souveraine), projets personnels (RAG multimodal, University Advisor) et contribution open source (huggingface/speech-to-speech), avec filtres.
- **Stack** — outils utilisés au quotidien (LLMs, agents, bases vectorielles, DevOps, backend, data).
- **Distinctions** et **contact**.
- **Bilingue FR / EN** (français par défaut, choix mémorisé dans le navigateur).

## Technique

Site statique, sans étape de build :

| | |
|---|---|
| Structure / logique | HTML + JavaScript vanilla, un seul fichier [`index.html`](index.html) |
| Style | [Tailwind CSS](https://tailwindcss.com) (CDN) + CSS maison (effet « glass », animations) |
| Icônes | [Font Awesome](https://fontawesome.com) 6 |
| Polices | Inter et Fira Code (Google Fonts) |
| Scène animée | SVG inline piloté en CSS (`data-act`), aucune librairie |
| Hébergement | GitHub Pages |

Accessibilité : respect de `prefers-reduced-motion` (la scène devient statique), libellés ARIA traduits, navigation au clavier sur les contrôles.

## Lancer en local

```bash
git clone https://github.com/YvesLoic5/yvesloic5.github.io.git
cd yvesloic5.github.io
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Structure

```
.
├── index.html          # page unique (HTML, CSS, JS)
└── assets/
    ├── favicon.svg     # icône du site (+ PNG de secours)
    ├── Yves_Loic_SOATIANAINA_CV.pdf
    └── img/            # photo et visuels des projets
```

## Modifier les textes / la traduction

Le français est écrit directement dans le HTML. La version anglaise est dans l'objet `EN` (et `EN_ATTR` pour les attributs) en bas de `index.html` : chaque entrée associe un texte français à sa traduction. Un texte absent du dictionnaire reste en français.

## Crédits

Les logos et visuels de projets (Swiftask, IA Souveraine, Llama, Hugging Face, Milvus…) appartiennent à leurs propriétaires respectifs et sont utilisés à titre d'illustration de mon travail.

## Contact

- GitHub : [@YvesLoic5](https://github.com/YvesLoic5)
- LinkedIn : [yves-loic](https://linkedin.com/in/yves-loic)
- Email : yvesloic58@gmail.com
