import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Brand + Logo */}
          <div className="flex flex-col items-start">
            <Image
              src="logo.png"
              alt="Board Brush & Lights Logo"
              width={100}
              height={30}
              className="object-contain mb-3"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Luxury interior design studio crafting elegant residential
              and commercial spaces.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase">
              Contact
            </h4>
            <p className="text-sm text-gray-600 mb-2">📍 Your Office Address Here</p>
            <p className="text-sm text-gray-600 mb-2">📞 +91 00000 00000</p>
            <p className="text-sm text-gray-600">✉️ info@boardbrushandlights.com</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase">
              Follow
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <a href="https://instagram.com/YOUR_USERNAME" target="_blank" className="block hover:text-black">Instagram</a>
              <a href="https://youtube.com/YOUR_CHANNEL" target="_blank" className="block hover:text-black">YouTube</a>
              <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" className="block hover:text-black">LinkedIn</a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Board Brush & Lights. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
