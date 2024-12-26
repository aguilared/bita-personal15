import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
        <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
      </div>

      <h1 className="text-gray-900 dark:text-white">Dark mode is here!</h1>
      <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
    </main>
  );
}
