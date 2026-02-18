import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col items-start">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/logo.png" 
                alt="Board Brush & Lights Logo"
                width={120}                      
                height={40}
                className="object-contain"
              />
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              Luxury interior design studio crafting elegant residential
              and commercial spaces.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide uppercase">
              Contact
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              📍 Your Office Address Here
            </p>
            <p className="text-sm text-gray-600 mb-2">
              📞 +91 00000 00000
            </p>
            <p className="text-sm text-gray-600">
              ✉️ info@boardbrushandlights.com
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide uppercase">
              Follow
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <a
                href="https://instagram.com/YOUR_USERNAME"
                target="_blank"
                className="block hover:text-black transition"
              >
                Instagram
              </a>

              <a
                href="https://youtube.com/YOUR_CHANNEL"
                target="_blank"
                className="block hover:text-black transition"
              >
                YouTube
              </a>

              <a
                href="https://linkedin.com/in/YOUR_PROFILE"
                target="_blank"
                className="block hover:text-black transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Board Brush & Lights.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
