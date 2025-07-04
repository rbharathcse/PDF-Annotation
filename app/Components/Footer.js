'use client';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm border-t">
      <p>
        PDF Annotation Tool —{' '}
        <a
          href="https://github.com/rbharathcse/PDF-Annotation-Landing-Page"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
