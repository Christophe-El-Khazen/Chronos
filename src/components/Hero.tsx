import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/images/Trailer.mp4"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6 tracking-wider uppercase">
            Est. 2050 • Services Temporels Premium
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight font-serif">
            Voyagez Au-Delà <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-[length:200%_auto] animate-gradient">
              Du Présent
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Découvrez l'élégance du Paris de 1889, la puissance brute du Crétacé,
            ou la renaissance artistique de Florence en 1504. Votre voyage vous attend.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/destinations"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-amber-900/20 flex items-center gap-2"
            >
              Explorer les Époques
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/quiz"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-full font-medium transition-all hover:scale-105 flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              Trouver mon Voyage
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
