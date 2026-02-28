import { DestinationCard } from "../components/DestinationCard";
import { motion } from "motion/react";
import { DESTINATIONS } from "../data/destinations";

export default function Destinations() {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          Explorez la Timeline
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          De l'aube des temps au futur lointain, choisissez votre prochaine aventure.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS.map((dest) => (
          <DestinationCard
            key={dest.id}
            id={dest.id}
            title={dest.title}
            year={dest.year}
            description={dest.description}
            image={dest.image}
            tags={dest.tags}
          />
        ))}
      </div>
    </div>
  );
}
