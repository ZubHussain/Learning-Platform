import Navbar from "../Navbar/Navbar"
import CursorGrid from "./CursorGrid"
import GlassIconsUsage from "../GlassIcons/GlassIconsUsage"
import SplitFlapTextUsage from "../SplitFlapText/SplitFlapTextUsage"
import { Link } from "react-router-dom"
import InfiniteSpiralUsage from "../InfiniteSpiral/InfiniteSpiralUsage"

export default function CursorGridUsage() {
  return (
    <CursorGrid
      className="min-h-screen bg-black"
      cellSize={70}
      color="#D946EF"
      radius={140}
      falloff="smooth"
      holdTime={400}
      fadeDuration={800}
      lineWidth={1.2}
      maxOpacity={1}
      fillOpacity={0}
      gridOpacity={0}
      cellRadius={0}
      clickPulse
      pulseSpeed={600}
    >
      <Navbar />
      
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-fuchsia-400">
          CODE. PRACTICE. PROGRESS.
        </p>
        
        {/* HERO SECTION */}
        <SplitFlapTextUsage />
        <p className="mt-8 max-w-xl text-base leading-7 text-gray-400">
          Master programming through structured courses, hands-on coding challenges, and real-time
          progress tracking — all in one platform.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-fuchsia-600 px-6 py-3 font-semibold text-white transition hover:bg-fuchsia-500">
            Start Practicing
          </button>

          <Link
            to="/courses"
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Explore Courses
          </Link>
        </div>

        {/* COURSES SECTION */}
        <InfiniteSpiralUsage/>

        {/* GLASS ICONS SECTION */}
        <GlassIconsUsage/>
      </main>

    </CursorGrid>
  );
}
