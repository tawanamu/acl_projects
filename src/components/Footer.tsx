import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Logo%20&%20Branding/logo.png?updatedAt=1759706592622"
                  alt="ACL Projects Logo"
                  className="object-contain w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">ACL Projects</h3>
                <p className="text-sm text-gray-400">Pty Ltd</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering industries, enhancing lives through exceptional electrical engineering and instrumentation services.
            </p>
            <p className="text-xs text-gray-500">Reg no.: 2024/162392/07</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  No. 31, Unit 22, Alumina Allee,<br />
                  Alton, Richards Bay, 3900
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+27 35 760 1023</p>
                  <p>+27 66 555 8555</p>
                  <p>+27 63 100 2929</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-red-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>info@aclp.co.za</p>
                  <p>aclnrb@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-yellow-400 mb-2">SUCCESS IS CONSTANCY OF PURPOSE</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ACL Projects (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
