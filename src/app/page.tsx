import Hero from "@/components/ui/Homepage/Hero/Hero";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <Hero />
    </main>
  );
}
