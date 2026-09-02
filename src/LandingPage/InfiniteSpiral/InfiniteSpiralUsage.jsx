import InfiniteSpiral from "../InfiniteSpiral/InfiniteSpiral"

function InfiniteSpiralUsage() {
  return (
    <section className="min-h-screen bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-fuchsia-400">
            BUILT FOR PRACTICE
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-6xl">
            Everything you need to become a better programmer.
          </h2>

          <p className="mt-5 max-w-xl text-gray-400">
            Learn DSA, solve questions, write code in your own editor, and monitor
            your progress as you improve.
          </p>
        </div>

        <div className="mx-auto mt-10 h-[600px] max-w-6xl overflow-hidden">
          <InfiniteSpiral
            items={[
              { src: "src/assets/C++.jpg", alt: "Data Structures and Algorithms" },
              { src: "src/assets/Csharp.jpg", alt: "Coding problems" },
              { src: "src/assets/SQL.jpg", alt: "Built-in code editor" },
              { src: "src/assets/Java.jpg", alt: "Progress tracking" },
              { src: "src/assets/JS.jpg", alt: "Structured courses" },
              { src: "src/assets/Python.jpg", alt: "Programming skills" }
            ]}
            animationMode="auto"
            speed={0.55}
            radius={170}
            cardWidth={180}
            cardHeight={120}
            verticalSpacing={60}
            perspective={1000}
            cardRadius={10}
            centerScale={1.2}
            edgeBlur={6}
            cardsPerTurn={7}
            pauseOnHover={false}
            direction="up"
            rotation={0}
            cardTilt={0}
            edgeFade={0.3}
            imageFit="cover"
            grayscale={0}
          />
        </div>
      </section>
  )
}

export default InfiniteSpiralUsage