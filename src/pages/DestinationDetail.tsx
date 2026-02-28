import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Check, Star, MapPin } from "lucide-react";
import { DESTINATIONS } from "../data/destinations";
import { NotFound } from "./NotFound";

export default function DestinationDetail() {
  const { id } = useParams();
  const destination = DESTINATIONS.find((d) => d.id === id);

  if (!destination) {
    return <NotFound />;
  }

  return (
    <div className="pb-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 max-w-7xl mx-auto">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux destinations
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-sm font-mono font-bold">
                {destination.year}
              </span>
              <div className="flex gap-2">
                {destination.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
              {destination.title}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">À propos du voyage</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {destination.longDescription}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Points Forts</h2>
            <div className="grid gap-4">
              {destination.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-zinc-900 border border-white/5 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-gray-200">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Galerie Immersion</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.gallery?.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative group aspect-[4/3] overflow-hidden rounded-xl bg-zinc-800 border border-white/10"
                >
                  {item.url.endsWith('.mp4') ? (
                    <video
                      src={item.url}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={`Gallery item ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar / Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-sm text-gray-400">Prix par voyageur</p>
                <p className="text-3xl font-bold text-white">{destination.price}</p>
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-bold">4.9/5</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="w-4 h-4 text-green-400" />
                <span>Assurance temporelle incluse</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="w-4 h-4 text-green-400" />
                <span>Guide expert certifié</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Check className="w-4 h-4 text-green-400" />
                <span>Tenue d'époque fournie</span>
              </div>
            </div>

            <Link
              to={`/booking?destination=${destination.id}`}
              className="block w-full py-4 bg-amber-600 hover:bg-amber-500 text-white text-center font-bold rounded-xl transition-colors shadow-lg shadow-amber-900/20"
            >
              Réserver ce voyage
            </Link>
            <p className="text-xs text-center text-gray-500 mt-4">
              Départ immédiat après validation du dossier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
