import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Chatbot } from "./components/Chatbot";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Booking from "./pages/Booking";
import Quiz from "./pages/Quiz";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetail />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Chatbot />
    </Layout>
  );
}
