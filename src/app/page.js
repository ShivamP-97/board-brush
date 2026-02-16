import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen text-white pt-20">

        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6')",
          }}
        >
          <div className="bg-black/50 p-10 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Luxury Interior Design
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Crafted Spaces. Timeless Elegance.
            </p>
            <button className="bg-[#C6A75E] text-black px-8 py-3 rounded-md hover:opacity-80 transition">
              View Projects
            </button>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-[#F8F5F0] text-black py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Our Projects</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="bg-white text-black py-20 px-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Residential Design
              </h3>
              <p>Elegant homes designed for comfort and luxury.</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Commercial Interiors
              </h3>
              <p>Premium spaces that elevate productivity and brand value.</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Turnkey Solutions
              </h3>
              <p>From concept to completion — seamless execution.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="contact"
          className="bg-black text-white py-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Lets Design Your Dream Space
          </h2>
          <button className="bg-[#C6A75E] text-black px-8 py-3 rounded-md hover:opacity-80 transition">
            Contact Us
          </button>
        </section>

      </main>
      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50">💬
      </a>

    </>
  );
}
