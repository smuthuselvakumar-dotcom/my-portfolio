function About() {
  return (
    <section id="about" className="py-20 scroll-mt-10">
      <h2 className="text-3xl font-bold mb-10">About Me</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-gray-600 leading-relaxed mb-4">
            I am a Frontend Developer with 2 years of experience working on
            real-time product applications. Currently working in a healthcare
            domain project where I build scalable UI features using React.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            I have experience integrating APIs, handling complex forms,
            implementing payment flows with Stripe, and improving performance
            and user experience across applications.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I am currently preparing to transition into product-based companies
            where I can contribute to building high-impact scalable systems.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-semibold mb-4">Quick Highlights</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✔ 2+ years React experience</li>
            <li>✔ Healthcare domain expertise</li>
            <li>✔ Stripe payment integration</li>
            <li>✔ PostgreSQL & API integration</li>
            <li>✔ Git & Agile workflow</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
