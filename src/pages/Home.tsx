import { Hero } from "../components/Hero";
import { DestinationCard } from "../components/DestinationCard";
import { motion } from "motion/react";
import { DESTINATIONS } from "../data/destinations";

export default function Home() {
  const featuredDestinations = DESTINATIONS.slice(0, 3);

  return (
    <div className="pb-20">
      <Hero />
      
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Timelines Sélectionnées
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nos destinations les plus demandées, triées sur le volet pour leur importance historique et leur atmosphère époustouflante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((dest) => (
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
      </section>
    </div>
  );
}
