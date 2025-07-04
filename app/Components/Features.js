'use client';

export default function Features() {
  const features = [
    {
      title: 'Highlight Text',
      description: 'Select and highlight text seamlessly in your PDFs.',
    },
    {
      title: 'Add Comments',
      description: 'Leave feedback and notes anywhere on the document.',
    },
    {
      title: 'Cloud Sync',
      description: 'Your annotations are saved automatically in the cloud.',
    },
    {
      title: 'No Install Needed',
      description: 'Runs entirely in the browser with no extra downloads.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10">Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border rounded shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
