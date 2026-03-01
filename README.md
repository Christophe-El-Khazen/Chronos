# ⏳ TimeTravel Agency - Interactive Webapp

**TimeTravel Agency** est une application web moderne et interactive qui permet à ses clients d'explorer et de réserver des voyages temporels de luxe. Ce projet a été développé dans le cadre d'un travail de groupe (4 personnes) avec une évaluation individuelle.

## 🌟 Fonctionnalités Principales

1. **Interface Immersive** : Une expérience utilisateur fluide et moderne grâce à des animations (Framer Motion) et un design élégant (Tailwind CSS) avec une navigation dynamique.
2. **Trois Destinations Exclusives** :
   - 🇫🇷 **Paris 1889** : La Belle Époque, la Tour Eiffel et l'Exposition Universelle.
   - 🦖 **Crétacé (-65 Millions d'années)** : Une aventure brute au pays des dinosaures (T-Rex, Tricératops).
   - 🇮🇹 **Florence 1504** : L'apogée de la Renaissance italienne avec Michel-Ange et Léonard de Vinci.
3. **Agent Conversationnel IA (Chatbot)** : Un assistant virtuel intelligent propulsé par **Google Gemini API** (`@google/genai`) qui conseille les clients et répond à leurs questions sur les voyages temporels.
4. **Quiz de Recommandation** : Un questionnaire interactif permettant de personnaliser et de suggérer la destination idéale ("Quiz Temporel").
5. **Système de Réservation** : Un formulaire complet permettant de planifier son voyage (dates, nombre de voyageurs, options temporelles).

## 🛠️ Technologies Utilisées

- **Frontend** : React 19, TypeScript, Vite
- **Styling** : Tailwind CSS v4
- **Animations** : Motion (Framer Motion)
- **Icônes** : Lucide React
- **IA** : Google Gemini API (`@google/genai`), nano banana pour les images
- **Routage** : React Router DOM v7

## 🚀 Installation et Lancement en Local

### Prérequis
- Node.js (version 18 ou supérieure)
- Une clé API Google Gemini valide.

### Étapes d'installation

1. **Cloner le projet ou l'extraire :**
   ```bash
   git clone <url-du-repo>
   cd Chronos
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Configuration des variables d'environnement :**
   À la racine du projet, créez (ou modifiez) le fichier `.env` et ajoutez-y votre clé API Gemini de cette manière :
   ```env
   VITE_GEMINI_API_KEY="VOTRE_CLE_API_GEMINI_ICI"
   ```

4. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:5173`.

## 🌐 Déploiement sur Vercel

Ce projet est pré-configuré pour un déploiement optimal sur **Vercel** grâce au fichier `vercel.json` inclus (qui gère le routage côté client de React).

1. Poussez votre code sur GitHub.
2. Connectez-vous à Vercel et importez le dépôt.
3. **IMPORTANT** : Dans les paramètres de déploiement Vercel, allez dans **Environment Variables** et ajoutez :
   - Name : `VITE_GEMINI_API_KEY`
   - Value : `Votre clé API Gemini`
4. Cliquez sur **Deploy**.

---
*Projet réalisé pour l'agence fictive TimeTravel Agency.*
