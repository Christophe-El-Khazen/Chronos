import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import React from "react";

interface DestinationCardProps {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ id, title, year, description, image, tags }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-300 shadow-lg hover:shadow-amber-900/10"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
          <span className="text-xs font-medium text-amber-100">Premium</span>
        </div>
      </div>

      <div className="p-6 relative z-20 -mt-12">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="text-2xl font-bold text-white font-serif">{title}</h3>
          <span className="text-amber-400 font-mono text-sm font-bold">{year}</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/destinations/${id}`}
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors group/link"
        >
          Voir les détails
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
