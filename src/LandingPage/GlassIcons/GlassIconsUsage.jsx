import GlassIcons from '../GlassIcons/GlassIcons'

import {
  FiBookOpen,
  FiCode,
  FiTrendingUp,
  FiFileText,
  FiCpu,
  FiAward
} from "react-icons/fi";

function GlassIconsUsage() {
  return (
    <section className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold tracking-[0.3em] text-fuchsia-400">
          ONE PLATFORM
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          Learn, code, and grow.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Everything you need to strengthen your coding skills and prepare for
          technical interviews.
        </p>

        <GlassIcons
          className="mt-10 text-white"
          items={[
            {
              icon: <FiBookOpen size={30} />,
              color: "purple",
              label: "Courses"
            },
            {
              icon: <FiCode size={30} />,
              color: "blue",
              label: "Code Editor"
            },
            {
              icon: <FiFileText size={30} />,
              color: "orange",
              label: "Practice Problems"
            },
            {
              icon: <FiTrendingUp size={30} />,
              color: "green",
              label: "Progress Tracking"
            },
            {
              icon: <FiCpu size={30} />,
              color: "indigo",
              label: "DSA Learning"
            },
            {
              icon: <FiAward size={30} />,
              color: "red",
              label: "Achievements"
            }
          ]}
        />
      </div>
    </section>
  )
}
export default GlassIconsUsage
