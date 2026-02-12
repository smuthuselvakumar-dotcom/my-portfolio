function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-10">
      <h2 className="text-3xl font-bold mb-10">Contact</h2>

      <div className="bg-white p-8 rounded-xl shadow-sm border max-w-2xl">
        <p className="text-gray-600 mb-6">
          I am currently open to new opportunities in product-based companies.
          Feel free to reach out.
        </p>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Email:</strong> s.muthuselvakumar@gmail.com
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/s-muthuselvakumar-70b394287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/smuthuselvakumar-dotcom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
