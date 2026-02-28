import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-white text-center px-4">
      <h2 className="text-4xl font-serif font-bold mb-4">404 - Timeline Perdue</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Il semble que cette destination ait été effacée du continuum espace-temps.
      </p>
      <Link 
        to="/destinations" 
        className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-medium transition-colors"
      >
        Retour aux destinations
      </Link>
    </div>
  );
}
