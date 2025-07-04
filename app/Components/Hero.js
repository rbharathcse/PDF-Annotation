'use client';
//
export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Annotate PDFs in Your Browser
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Highlight, comment, and collaborate on PDFs with ease.
        </p>
        <a
          href="/editor"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Try the Editor
        </a>
      </div>
    </section>
  );
}
