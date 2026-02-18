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
      {/* Project 1 */}
      <a
        href="#"
        className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      >
        <img
          src="/Project-1.jpg"
          alt="Inaaya Project"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold text-white">Inaaya Project</h3>
          <p className="text-white mt-2 text-sm">
            Creative board designs for modern interiors.
          </p>
        </div>
      </a>

      {/* Project 2 */}
      <a
        href="#"
        className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      >
        <img
          src="/Project-2.jpg"
          alt="Shalimar Project"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold text-white">Shalimar Project</h3>
          <p className="text-white mt-2 text-sm">
            Stunning interactive canvas experience.
          </p>
        </div>
      </a>

      {/* Project 3 */}
      <a
        href="#"
        className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      >
        <img
          src="/Project-3.jpg"
          alt="Villa Project"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold text-white">Villa Project</h3>
          <p className="text-white mt-2 text-sm">
            Specially curated villa designs and layouts.
          </p>
        </div>
      </a>
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
      src="/image1.jpg"
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
      src="/image2.jpg"
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
      src="/image3.jpg"
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
<a
  href="https://wa.me/919999999999"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition z-50 flex items-center justify-center"
>
  {/* WhatsApp SVG Logo */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="w-6 h-6"
  >
    <path d="M12.004 2C6.476 2 2 6.476 2 12c0 2.121.558 4.108 1.524 5.83L2 22l4.29-1.414A9.951 9.951 0 0012.004 22C17.532 22 22 17.524 22 12s-4.468-10-9.996-10zm5.64 15.21c-.243.682-1.431 1.3-1.963 1.377-.51.07-1.164.102-3.427-1.015a12.405 12.405 0 01-3.638-3.636c-1.119-2.265-1.087-2.91-1.015-3.418.076-.533.694-1.72 1.376-1.962.53-.188 1.176-.074 1.625.117.44.185 1.303.808 1.529.945.223.136.384.19.55.19.162 0 .328-.05.473-.11.21-.083.738-.385.91-.513.17-.13.283-.195.432-.19.144.003.28.023.403.202.13.188.503.684.634.914.13.232.22.19.377.127.156-.064.98-.463 1.178-.65.198-.187.354-.282.54-.28.186.003.423.073.646.35.222.276.952 1.171 1.057 1.407.103.236.103.43.074.465-.03.034-.11.056-.22.097-.11.04-.647.323-.747.36-.1.037-.174.056-.25.118-.074.062-.377.376-.462.503-.083.128-.167.106-.28.064-.112-.043-.71-.33-.85-.407-.14-.078-.24-.107-.35-.065-.11.043-.91.425-1.094.558-.183.133-.326.35-.363.468-.036.12-.037.222.025.36.062.136.414.856.89 1.41.48.553 1.1 1.025 1.245 1.156.144.13.244.184.355.156.11-.03.704-.323.81-.36.107-.035.212-.036.31-.02.1.015.626.264.755.31.128.045.273.065.345.04.072-.027.378-.17.434-.21.056-.038.437-.402.56-.498.124-.095.214-.148.278-.147.064 0 .23.045.35.134.122.09.497.412.57.487.072.074.17.194.222.298.054.104.06.166.03.262z"/>
  </svg>
</a>


    <Footer />

    </>
  );
}
