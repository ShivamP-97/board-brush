"use client";
import { motion } from "framer-motion";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
              "url('/background_img.jpg')",
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

        {/* Testimonials Sections */}
        <section className="py-20 bg-white text-black">
  <h2 className="text-3xl font-semibold text-center mb-8">
    What Clients Say
  </h2>
  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    <blockquote>“Amazing attention to detail — transformed our home.” — Client A</blockquote>
    <blockquote>“Professional and creative — exceeded expectations.” — Client B</blockquote>
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

        {/* SOCIAL SHOWCASE SECTION */}
<section className="bg-[#F8F5F0] text-black py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-6"
    >
      Our Social Presence
    </motion.h2>

    <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
      Explore our latest interior projects, design ideas, and behind-the-scenes transformations.
    </p>

    {/* YOUTUBE FEATURED VIDEO */}
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/-jtnlrT8CB8"
          title="Board Brush & Lights YouTube"
          allowFullScreen
        ></iframe>
      </motion.div>

      <a
        href="https://www.youtube.com/@BoardBrushLights"
        target="_blank"
        className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition"
      >
        Visit Our YouTube Channel
      </a>
    </div>

    {/* INSTAGRAM GRID */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="grid md:grid-cols-3 gap-6"
>
  <a
    href="https://www.instagram.com/board_brush.lights/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/insta1.jpg"
      alt="Board Brush & Lights Instagram Post 1"
      className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
    />
  </a>

  <a
    href="https://www.instagram.com/board_brush.lights/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/insta2.jpg"
      alt="Board Brush & Lights Instagram Post 2"
      className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
    />
  </a>

  <a
    href="https://www.instagram.com/board_brush.lights/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/insta3.jpg"
      alt="Board Brush & Lights Instagram Post 3"
      className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
    />
  </a>
</motion.div>

<a
  href="https://www.instagram.com/board_brush.lights/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-10 border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
>
  Follow Us on Instagram
</a>


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

    <Footer />

    </>
  );
}
