import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center mb-4 space-x-3">
              <div className="flex items-center justify-center bg-white rounded-full shadow-lg w-14 h-14">
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
            <p className="mb-4 text-sm text-gray-400">
              Empowering industries, enhancing lives through exceptional electrical engineering and instrumentation services.
            </p>
            <p className="text-xs text-gray-500">Reg no.: 2024/162392/07</p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-blue-400">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-green-400" />
                <p className="text-sm text-gray-300">
                  No. 31, Unit 22, Alumina Allee,<br />
                  Alton, Richards Bay, 3900
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-orange-400" />
                <div className="text-sm text-gray-300">
                  <p>+27 35 760 1023</p>
                  <p>+27 66 555 8555</p>
                  <p>+27 63 100 2929</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-red-400" />
                <div className="text-sm text-gray-300">
                  <p>info@aclp.co.za</p>
                  <p>aclnrb@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-purple-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/profile.php?id=61567131538415"
                className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-blue-600"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/aclprojects1/#"
                className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-pink-600"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/acl-projects-pty-ltd/"
                className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-blue-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/AclPty94864"
                className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-blue-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-yellow-400">SUCCESS IS CONSTANCY OF PURPOSE</p>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-800">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ACL Projects (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
