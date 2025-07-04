'use client';

export default function CallToAction() {
  return (
    <section className="bg-blue-50 py-16 text-center px-4">
      <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
      <p className="text-gray-700 mb-6">Upload your PDF or jump right into the editor.</p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="file"
          disabled
          className="border border-gray-300 bg-white text-gray-400 cursor-not-allowed px-4 py-2 rounded w-full sm:w-auto"
        />
        <a
          href="/editor"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition inline-block"
        >
          Open Editor
        </a>
      </div>
    </section>
  );
}
