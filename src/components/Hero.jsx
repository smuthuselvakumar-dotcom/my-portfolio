function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Hi, I'm <span className="text-blue-600">Muthuselvakumar</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        2 years of experience building scalable product applications including
        booking systems, healthcare platforms, and secure payment integrations.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
export default Hero;
