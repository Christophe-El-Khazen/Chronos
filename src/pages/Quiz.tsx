import { RecommendationQuiz } from "../components/RecommendationQuiz";

export default function Quiz() {
  return (
    <div className="py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Trouvez Votre Époque Idéale
        </h1>
        <p className="text-gray-400">
          Répondez à 4 questions simples et laissez notre IA vous guider à travers le temps.
        </p>
      </div>
      <RecommendationQuiz />
    </div>
  );
}
