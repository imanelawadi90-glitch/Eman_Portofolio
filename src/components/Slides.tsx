const Slides = () => {
  return (
    <section id="slides" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Slides
          </h2>

          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        {/* Presentation card */}
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl border border-gray-800 bg-black">

            <img
              src="/slides/cairo-cover.png"
              alt="Cairo Production House Presentation"
              className="w-full h-auto object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Cairo Production House
              </h3>

              <p className="text-gray-400 mt-2">
                Presentation Design
              </p>

              <a
                href="/slides/cairo-presentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:opacity-90 transition"
              >
                View Presentation
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Slides;