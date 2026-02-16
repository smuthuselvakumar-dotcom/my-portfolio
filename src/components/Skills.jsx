function Skills() {

  const skills = [
    "React (JavaScript)",
    "HTML",
    "CSS",
    "Tailwind CSS",
    ".NET (Basic)",
    "PostgreSQL",
    "Stripe Integration",
    "Git & GitHub",
    "Azure (Basic)"
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
