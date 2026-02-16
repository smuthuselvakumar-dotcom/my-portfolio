function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-semibold mb-8">Experience</h2>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">Software Developer - Packapill Technologies Pvt Ltd</h3>

        <p className="text-gray-500 mb-3">
          2024 August - Present
        </p>

        <ul className="list-disc  ml-5 space-y-2 text-gray-700">
          <li>Built and maintained healthcare booking flows using React.</li>
          <li>Integrated Stripe payment system for secure transactions.</li>
          <li>Integrated and optimized RESTful APIs for real-time appointment booking and patient data management.</li>
          <li>Collaborated with UI and backend teams in agile environment.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
