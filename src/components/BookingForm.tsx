import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Calendar, Check, MapPin, User } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { DESTINATIONS } from "../data/destinations";

export function BookingForm() {
  const [searchParams] = useSearchParams();
  const initialDestination = searchParams.get("destination") || "";
  
  const [formData, setFormData] = useState({
    destination: initialDestination,
    date: "",
    travelers: 1,
    name: "",
    email: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto p-8 bg-zinc-900 border border-green-500/30 rounded-2xl text-center"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Réservation Confirmée !</h2>
        <p className="text-gray-400">
          Votre saut temporel vers {DESTINATIONS.find(d => d.id === formData.destination)?.title} a été programmé.
          Vérifiez votre email pour la carte d'embarquement.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-serif font-bold text-white mb-2">Sécurisez votre Timeline</h2>
        <p className="text-gray-400">Réservez votre place dans l'histoire dès aujourd'hui.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              Destination
            </label>
            <select
              required
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all appearance-none"
            >
              <option value="" disabled>Sélectionnez une époque...</option>
              {DESTINATIONS.map((dest) => (
                <option key={dest.id} value={dest.id}>{dest.title}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-500" />
              Date de Départ (Temps Présent)
            </label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
            <User className="w-4 h-4 text-amber-500" />
            Voyageurs
          </label>
          <input
            type="number"
            min="1"
            max="10"
            required
            value={formData.travelers}
            onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) })}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Nom Complet</label>
            <input
              type="text"
              required
              placeholder="H.G. Wells"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Adresse Email</label>
            <input
              type="email"
              required
              placeholder="voyageur@time.agency"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-900/20 transform transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Initialisation de la Séquence..." : "Confirmer la Réservation"}
        </button>
      </div>
    </motion.form>
  );
}
