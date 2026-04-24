import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl font-extrabold tracking-tight mb-6">
        Master <span className="text-blue-600">Test Automation</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Learn Cypress, Playwright, and Selenium through interactive theory, cheatsheets, and practice simulators.
      </p>
      <div className="flex gap-4">
        <Link href="/learn" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Start Learning
        </Link>
        <Link href="/practice" className="px-8 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition">
          Practice Now
        </Link>
      </div>
    </div>
  );
}
