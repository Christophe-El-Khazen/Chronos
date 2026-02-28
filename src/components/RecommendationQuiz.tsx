import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const QUESTIONS = [
  {
    id: 1,
    text: "Quel type d'expérience recherchez-vous ?",
    options: [
      { label: "Culturelle et artistique", value: "culture" },
      { label: "Aventure et nature", value: "nature" },
      { label: "Élégance et raffinement", value: "luxury" },
    ],
  },
  {
    id: 2,
    text: "Votre période préférée ?",
    options: [
      { label: "Histoire moderne (XIXe-XXe siècle)", value: "modern" },
      { label: "Temps anciens et origines", value: "ancient" },
      { label: "Renaissance et classicisme", value: "renaissance" },
    ],
  },
  {
    id: 3,
    text: "Vous préférez :",
    options: [
      { label: "L'effervescence urbaine", value: "city" },
      { label: "La nature sauvage", value: "wild" },
      { label: "L'art et l'architecture", value: "art" },
    ],
  },
  {
    id: 4,
    text: "Votre activité idéale :",
    options: [
      { label: "Visiter des monuments", value: "monuments" },
      { label: "Observer la faune", value: "wildlife" },
      { label: "Explorer des musées", value: "museums" },
    ],
  },
];

const RECOMMENDATIONS: Record<string, { id: string; title: string; reason: string }> = {
  "paris-1889": {
    id: "paris-1889",
    title: "Paris 1889",
    reason: "Vous recherchez l'élégance, la culture et l'excitation d'une métropole moderne à son apogée.",
  },
  "cretaceous": {
    id: "cretaceous",
    title: "Période Crétacé",
    reason: "Vous avez soif d'aventure brute, de nature intacte et du frisson du monde préhistorique.",
  },
  "florence-1504": {
    id: "florence-1504",
    title: "Florence 1504",
    reason: "Vous êtes une âme en quête de beauté, d'art et de la renaissance intellectuelle.",
  },
};

export function RecommendationQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<typeof RECOMMENDATIONS[string] | null>(null);

  const handleOptionSelect = (value: string) => {
    const newAnswers = { ...answers, [currentStep]: value };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, string>) => {
    // Simple logic for demonstration
    const scores = {
      "paris-1889": 0,
      "cretaceous": 0,
      "florence-1504": 0,
    };

    // Q1
    if (finalAnswers[0] === "luxury") scores["paris-1889"]++;
    if (finalAnswers[0] === "nature") scores["cretaceous"]++;
    if (finalAnswers[0] === "culture") scores["florence-1504"]++;

    // Q2
    if (finalAnswers[1] === "modern") scores["paris-1889"]++;
    if (finalAnswers[1] === "ancient") scores["cretaceous"]++;
    if (finalAnswers[1] === "renaissance") scores["florence-1504"]++;

    // Q3
    if (finalAnswers[2] === "city") scores["paris-1889"]++;
    if (finalAnswers[2] === "wild") scores["cretaceous"]++;
    if (finalAnswers[2] === "art") scores["florence-1504"]++;

    // Find max
    const winner = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
    setResult(RECOMMENDATIONS[winner]);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-zinc-900 border border-amber-500/30 rounded-3xl p-8 text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-10 h-10 text-amber-400" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-white mb-4">Votre Époque Idéale est...</h2>
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-6">
          {result.title}
        </h3>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          {result.reason}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={`/destinations/${result.id}`}
            className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-medium transition-colors flex items-center gap-2"
          >
            Voir les détails
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={resetQuiz}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-colors flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Refaire le Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  const question = QUESTIONS[currentStep];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex justify-between items-center text-sm text-gray-500">
        <span>Question {currentStep + 1} sur {QUESTIONS.length}</span>
        <div className="flex gap-1">
          {QUESTIONS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 w-8 rounded-full transition-colors ${
                idx <= currentStep ? "bg-amber-500" : "bg-zinc-800"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-xl"
      >
        <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
          {question.text}
        </h2>

        <div className="grid gap-4">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className="w-full text-left p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-white/5 hover:border-amber-500/50 transition-all group flex items-center justify-between"
            >
              <span className="text-gray-200 group-hover:text-white font-medium">
                {option.label}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
