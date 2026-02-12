function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-10">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-semibold mb-4">Frontend</h3>
          <p className="text-gray-600">React (JS), HTML, CSS</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-semibold mb-4">Backend</h3>
          <p className="text-gray-600">.NET (Basic understanding)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-semibold mb-4">Database</h3>
          <p className="text-gray-600">PostgreSQL</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-semibold mb-4">Tools & Payments</h3>
          <p className="text-gray-600">
            Git, GitHub, VS Code, Stripe Integration
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
