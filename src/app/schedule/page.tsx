import Link from "next/link";

export default function SchedulePage() {
  return (
    <div className="h-screen w-full bg-gray-300 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl mb-4 font-bold">Under Construction</h1>
        <p className="text-lg">Coming soon.</p>
        <Link href="/" className="text-l h-3xl w-xl bg-gray-400 rounded-xl p-1">Go back to home page</Link>
      </div>
    </div>
  );
}

