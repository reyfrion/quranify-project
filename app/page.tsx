import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex flex-col items-center gap-12 px-8 py-20 text-center">
        {/* Project Logo/Icon Area */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-32 w-32 animate-pulse rounded-full bg-emerald-500/20 blur-2xl"></div>
          <h2 className="relative text-5xl font-bold tracking-tighter text-emerald-600 dark:text-emerald-400">
            Quranify
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Experience the Quran <br />
            <span className="text-emerald-600">Like Never Before</span>
          </h1>
          <p className="max-w-[600px] text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            A modern, beautiful interface for reading, listening, and 
            connecting with the Holy Quran. Built for clarity and focus.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="flex h-12 items-center justify-center rounded-full bg-emerald-600 px-8 text-sm font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95">
            Start Reading
          </button>
          <button className="flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800">
            Explore Features
          </button>
        </div>
      </main>

      <footer className="mt-auto py-8 text-sm text-zinc-500">
        © {new Date().getFullYear()} Quranify Project
      </footer>
    </div>
  );
}