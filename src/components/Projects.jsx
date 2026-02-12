function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-10">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Project Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">
            MediTrack - Healthcare Management System
          </h3>
          <p className="text-gray-600 mb-4">
            A role-based healthcare application with appointment booking,
            physician dashboards, and payment integration.
          </p>

          <ul className="text-gray-600 space-y-2 mb-4">
            <li>• React-based UI architecture</li>
            <li>• Stripe payment integration</li>
            <li>• Optimized search & pagination logic</li>
            <li>• Role-based dashboard system</li>
          </ul>

          <div className="text-sm text-gray-500">
            React • .NET • PostgreSQL • Stripe
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Personal Portfolio</h3>
          <p className="text-gray-600 mb-4">
            Modern SaaS-style portfolio built using React and Tailwind CSS.
          </p>

          <ul className="text-gray-600 space-y-2 mb-4">
            <li>• Component-based structure</li>
            <li>• Tailwind styling</li>
            <li>• Responsive design</li>
          </ul>

          <div className="text-sm text-gray-500">React • Tailwind • Vite</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
