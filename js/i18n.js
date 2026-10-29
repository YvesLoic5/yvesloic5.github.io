// ---------- i18n (FR par défaut, EN au clic) ----------
const EN = {
    'Réalisations': 'Work',
    'Distinctions': 'Awards',
    'Télécharger le CV': 'Download my CV',
    'Méthode': 'Process',
    'Discutons': "Let's talk",
    'Disponible pour de nouvelles missions': 'Available for new missions',
    'Je construis des': 'I build',
    'agents IA': 'AI agents',
    'qui tournent en production.': 'that run in production.',
    "Agents, RAG, serving de LLMs et infrastructure Kubernetes : j'accompagne vos équipes du prototype au déploiement, avec des systèmes fiables, mesurés et maintenables.": 'Agents, RAG, LLM serving and Kubernetes infrastructure: I take your teams from prototype to deployment, with systems that are reliable, measured and maintainable.',
    'Discutons de votre projet': "Let's discuss your project",
    'Voir mes réalisations': 'See my work',
    'En production chez': 'In production at',
    'Contributeur': 'Contributor',
    '// 01 — services': '// 01 — services',
    'Ce que je': 'What I',
    'construis pour vous': 'build for you',
    "Quatre expertises complémentaires pour transformer une idée d'IA en un produit que vos utilisateurs adoptent au quotidien.": 'Four complementary areas of expertise to turn an AI idea into a product your users rely on every day.',
    'Agents IA & automatisation': 'AI agents & automation',
    'Des agents qui exécutent de vraies tâches métier — CRM, documents, emails, outils internes — en se branchant sur vos systèmes existants.': 'Agents that carry out real business tasks — CRM, documents, emails, internal tools — by plugging into your existing systems.',
    'Workflows multi-étapes avec LangGraph': 'Multi-step workflows with LangGraph',
    'Connexion à vos outils via MCP : CRM, Drive, Notion, Supabase…': 'Connected to your tools via MCP: CRM, Drive, Notion, Supabase…',
    'Choix et routage parmi 80+ modèles LLM': 'Selection and routing across 80+ LLM models',
    'Voir le cas Swiftask': 'See the Swiftask case',
    'Assistants sur vos données (RAG)': 'Assistants on your data (RAG)',
    'Vos documents — PDF, images, bases de connaissances — deviennent interrogeables en langage naturel, avec des réponses sourcées et une qualité mesurée.': 'Your documents — PDFs, images, knowledge bases — become searchable in natural language, with sourced answers and measured quality.',
    'Recherche hybride dense + sparse et reranking': 'Hybrid dense + sparse search and reranking',
    'RAG multimodal texte + images': 'Multimodal text + image RAG',
    'Évaluation chiffrée avec RAGAS': 'Quantified evaluation with RAGAS',
    'Voir le projet Multimodal RAG': 'See the Multimodal RAG project',
    'LLM serving & IA souveraine': 'LLM serving & sovereign AI',
    'Des modèles open source hébergés sur votre infrastructure ou dans votre pays : vos données restent chez vous et les coûts restent maîtrisés.': 'Open source models hosted on your infrastructure or in your own country: your data stays with you and costs stay under control.',
    'Serving optimisé avec vLLM et Ollama': 'Optimized serving with vLLM and Ollama',
    'Déploiement et scaling sur Kubernetes': 'Deployment and scaling on Kubernetes',
    'Sélection et intégration de modèles souverains': 'Selection and integration of sovereign models',
    'Voir le cas IA Souveraine': 'See the IA Souveraine case',
    'LLMOps & mise en production': 'LLMOps & going to production',
    "Ce qui sépare une démo d'un produit fiable : CI/CD, monitoring, cache, fallbacks et observabilité de bout en bout.": 'What separates a demo from a reliable product: CI/CD, monitoring, caching, fallbacks and end-to-end observability.',
    'CI/CD multi-environnements avec GitHub Actions': 'Multi-environment CI/CD with GitHub Actions',
    'Monitoring et observabilité avec Grafana': 'Monitoring and observability with Grafana',
    'Cache sémantique, retries et fallbacks de modèles': 'Semantic caching, retries and model fallbacks',
    'Voir ma stack': 'See my stack',
    'Des projets': 'Real-world',
    'concrets': 'projects',
    ', en production': ', in production',
    '// 03 — méthode': '// 03 — process',
    'Du besoin au': 'From need to',
    'résultat': 'results',
    'Pas de boîte noire : à chaque étape, vous savez ce qui est livré et pourquoi.': "No black box: at every step, you know what's delivered and why.",
    'Cadrage': 'Scoping',
    'On part de votre problème métier : objectifs, données disponibles, contraintes et critères de succès.': 'We start from your business problem: goals, available data, constraints and success criteria.',
    'Livrable :': 'Deliverable:',
    'note de cadrage': 'scoping brief',
    'Prototype': 'Prototype',
    "Un POC fonctionnel sur vos propres données pour valider la valeur vite, avant d'investir davantage.": 'A working POC on your own data to validate the value quickly, before investing further.',
    'démo utilisable': 'usable demo',
    'Infrastructure, tests, évaluation et observabilité : un système robuste, prêt pour vos utilisateurs.': 'Infrastructure, testing, evaluation and observability: a robust system, ready for your users.',
    'système déployé': 'deployed system',
    'Suivi': 'Follow-up',
    'Monitoring, optimisation des coûts et des performances, itérations selon les retours terrain.': 'Monitoring, cost and performance optimization, iterations based on real-world feedback.',
    'amélioration continue': 'continuous improvement',
    'Code documenté et transférable': 'Documented, transferable code',
    'Qualité mesurée, pas supposée': 'Quality measured, not assumed',
    'Échanges en français et en anglais': 'Communication in French and English',
    "Fuseau UTC+3, proche de l'Europe": 'UTC+3 time zone, close to Europe',
    'Contributeur à la communauté data science & machine learning de Kaggle': 'Contributor to the Kaggle data science & machine learning community',
    'Un projet IA en tête ?': 'Have an AI project in mind?',
    'Parlons-en.': "Let's talk.",
    'Vous me décrivez votre besoin': 'You tell me what you need',
    'On en discute en visio': 'We discuss it on a video call',
    'Je vous propose une approche et un plan': 'I propose an approach and a plan',
    "😩 Je n'en peux plus…": "😩 I can't take it anymore…",
    'Il me faut :': 'I need:',
    '🤖 des agents IA': '🤖 AI agents',
    '📚 un RAG fiable': '📚 a reliable RAG',
    "⚙️ de l'automatisation": '⚙️ automation',
    'Compris ! 👍': 'Got it! 👍',
    'Je te fabrique ça 🔧': "I'll build it for you 🔧",
    'Voilà ton robot 🎁': "Here's your robot 🎁",
    'Merci ! 🙌': 'Thank you! 🙌',
    'À nous de jouer 💪': "Let's go! 💪",
    'Un client à bout': 'A client at breaking point',
    'Il me confie son besoin': 'They tell me what they need',
    'Je fabrique son robot': 'I build their robot',
    'Je le lui livre': 'I deliver it',
    'Il écrase la concurrence': 'They crush the competition',
    '"résume le contrat et crée la fiche CRM"': '"summarize the contract and create the CRM record"',
    '3 étapes · LangGraph': '3 steps · LangGraph',
    'in 4.2s · 1 842 tokens · cache hit': 'in 4.2s · 1,842 tokens · cache hit',
    'outils agentiques intégrés': 'agentic tools integrated',
    'modèles LLM orchestrés': 'LLM models orchestrated',
    'ans en LLMOps & agent harness': 'years in LLMOps & agent harness',
    'infra de production': 'production infrastructure',
    '// 02 — réalisations': '// 02 — work',
    'AI & LLMOps Engineer, je collabore avec des plateformes SAAS AI Hub comme': 'AI & LLMOps Engineer, I work with SaaS AI Hub platforms like',
    'et': 'and',
    "— de la production au quotidien jusqu'aux projets open source.": '— from day-to-day production work to open source projects.',
    'Tout': 'All',
    'Projets': 'Projects',
    "Conception et intégration de l'écosystème agentique de la plateforme SAAS AI Hub.": 'Design and integration of the agentic ecosystem of the SaaS AI Hub platform.',
    '60+ outils agentiques': '60+ agentic tools',
    ': Odoo CRM, Google Drive Toolkit, MCP Protocol, générateurs PDF/DOCX, pipeline OCR': ': Odoo CRM, Google Drive Toolkit, MCP Protocol, PDF/DOCX generators, OCR pipeline',
    '80+ modèles LLM': '80+ LLM models',
    'Intégrations MCP': 'MCP integrations',
    'Agents IA': 'AI agents',
    "SAAS AI Hub souverain hébergé en France, white-label de Swiftask priorisant les IA open source. J'optimise le déploiement et l'inférence des modèles hébergés par DRI, de l'inférence jusqu'à l'usage agentique des end-users.": 'Sovereign SaaS AI Hub hosted in France, white-label of Swiftask prioritizing open source AI. I optimize the deployment and inference of the models hosted by DRI, from inference all the way to agentic usage by end-users.',
    'Serving de LLMs': 'LLM serving',
    'hébergés par DRI : vLLM, Ollama': 'hosted by DRI: vLLM, Ollama',
    'Orchestration Kubernetes': 'Kubernetes orchestration',
    'complète & CI/CD multi-environnements': 'end-to-end & multi-environment CI/CD',
    '& observabilité de la plateforme': '& platform observability',
    'Intégration & catégorisation': 'Integration & categorization',
    'de modèles souverains': 'of sovereign models',
    'Souverain': 'Sovereign',
    'Projet solo · A → Z': 'Solo project · A → Z',
    'RAG complet': 'Complete RAG',
    'texte + images': 'text + images',
    ': ingestion PDF/PNG/JPG, embeddings BGE-M3 (dense+sparse) & CLIP, Milvus hybride, génération GPT-4o en streaming avec fallback LLaVA.': ': PDF/PNG/JPG ingestion, BGE-M3 (dense+sparse) & CLIP embeddings, hybrid Milvus, GPT-4o streaming generation with LLaVA fallback.',
    'détails techniques': 'technical details',
    'Recherche hybride': 'Hybrid search',
    ': HNSW cosine + BM25, fusion RRF': ': HNSW cosine + BM25, RRF fusion',
    'Cache 2 niveaux': '2-level cache',
    'Redis : exact (MD5) + sémantique (≥ 0.92)': 'Redis: exact (MD5) + semantic (≥ 0.92)',
    'Évaluation': 'Evaluation',
    'RAGAS sur 20 Q&A': 'RAGAS on 20 Q&As',
    ': Docker Compose, Tenacity, ingestion idempotente': ': Docker Compose, Tenacity, idempotent ingestion',
    'Voir le repo': 'View repo',
    'Voir la PR': 'View PR',
    'Contribution au dépôt': 'Contribution to the',
    '. Les réponses LLM en Markdown étaient vocalisées littéralement par le TTS — ce correctif nettoie la syntaxe avant la synthèse vocale pour un rendu naturel.': ' repository. LLM responses in Markdown were being read out literally by the TTS — this fix cleans the syntax before speech synthesis for a natural result.',
    'Projet solo': 'Solo project',
    "Bot d'orientation universitaire pour Madagascar, propulsé par": 'University guidance bot for Madagascar, powered by',
    'quantisé et exécuté en local, avec retrieval sémantique': 'quantized and run locally, with semantic retrieval using',
    'et interface': 'and a web interface built with',
    'Modèle local': 'Local model',
    ': GGML q4_0, aucune dépendance cloud': ': GGML q4_0, no cloud dependency',
    ": Pinecone pour l'indexation des établissements": ': Pinecone to index institutions',
    '// 04 — stack': '// 04 — stack',
    'Ma': 'My',
    'boîte à outils': 'toolbox',
    "Ce que j'utilise au quotidien pour construire, déployer et monitorer des systèmes d'IA en production.": 'What I use every day to build, deploy and monitor AI systems in production.',
    'Agents IA & Workflows': 'AI Agents & Workflows',
    'Bases vectorielles': 'Vector databases',
    '// 05 — distinctions': '// 05 — awards',
    'Distinctions &': 'Awards &',
    'communauté': 'community',
    "Médaille d'argent": 'Silver medal',
    'Ambassadeur Madagascar': 'Madagascar ambassador',
    'Intervenant Google I/O 2024': 'Speaker at Google I/O 2024',
    'Talk sur les nouveautés de Gemini': "Talk on what's new in Gemini",
    'Master Big Data & IA': "Master's in Big Data & AI",
    'Big Data et Intelligence Artificielle': 'Big Data and Artificial Intelligence',
    'Articles techniques': 'Technical articles',
    'Organisation du DevFest 2024': 'DevFest 2024 organizer',
    "Ouvert aux missions freelance, collaborations et échanges techniques autour de l'IA agentique, du LLMOps et de l'infrastructure.": 'Open to freelance assignments, collaborations and technical discussions around agentic AI, LLMOps and infrastructure.',
    'Copier': 'Copy'
};
const EN_ATTR = {
    'Langue': 'Language',
    'Animation : un client épuisé me confie son besoin, je fabrique son robot, je le lui livre et il écrase la concurrence': 'Animation: an exhausted client tells me what they need, I build their robot, I deliver it and they crush the competition',
    "Étapes de l'histoire": 'Story steps',
    'Étape 1': 'Step 1', 'Étape 2': 'Step 2', 'Étape 3': 'Step 3', 'Étape 4': 'Step 4', 'Étape 5': 'Step 5',
    'Portrait de Yves Loïc SOATIANAINA en tenue de diplômé': 'Portrait of Yves Loïc SOATIANAINA in graduation attire',
    'Ouvrir le menu': 'Open menu',
    'Filtrer les réalisations': 'Filter work',
    "Copier l'adresse email": 'Copy email address',
    'Logo IA Souveraine': 'IA Souveraine logo',
    'Logo Llama 2': 'Llama 2 logo',
    "Schéma d'un système RAG multimodal : images, texte et graphiques vers un modèle": 'Diagram of a multimodal RAG system: images, text and charts feeding a model',
    'Dépôt GitHub huggingface/speech-to-speech': 'GitHub repository huggingface/speech-to-speech'
};
const EN_META = 'Portfolio of Yves Loïc SOATIANAINA, AI & LLMOps Engineer: AI agents, RAG, LLM serving and Kubernetes infrastructure.';
const metaDesc = document.querySelector('meta[name="description"]');
const FR_META = metaDesc.getAttribute('content');
const norm = t => t.replace(/\s+/g, ' ').trim();

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: n => n.parentElement.closest('script, style, #typed') || !norm(n.nodeValue) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
});
while (walker.nextNode()) textNodes.push({ node: walker.currentNode, fr: walker.currentNode.nodeValue });
const attrNodes = [...document.querySelectorAll('[aria-label], img[alt]')].flatMap(el =>
    ['aria-label', 'alt'].filter(a => el.hasAttribute(a)).map(a => ({ el, a, fr: el.getAttribute(a) })));

let currentLang = 'fr';
function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    textNodes.forEach(({ node, fr }) => {
        const en = lang === 'en' ? EN[norm(fr)] : undefined;
        if (en === undefined) { node.nodeValue = fr; return }
        if (en !== en.trim()) { node.nodeValue = en; return }
        node.nodeValue = fr.match(/^\s*/)[0] + en + fr.match(/\s*$/)[0];
    });
    attrNodes.forEach(({ el, a, fr }) => el.setAttribute(a, lang === 'en' && EN_ATTR[fr] ? EN_ATTR[fr] : fr));
    metaDesc.setAttribute('content', lang === 'en' ? EN_META : FR_META);
    document.querySelectorAll('#langSwitch button').forEach(b => {
        const on = b.dataset.lang === lang;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on);
    });
    try { localStorage.setItem('lang', lang) } catch (e) { }
}
document.querySelectorAll('#langSwitch button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
let saved = null;
try { saved = localStorage.getItem('lang') } catch (e) { }
if (saved === 'en') applyLang('en');
