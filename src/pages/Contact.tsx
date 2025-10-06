import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-green-600 to-purple-600">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-80"
          style={{ backgroundImage: 'url("https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Images/mostafa-mahmoudi-47jO5Y8nsYo-unsplash.jpg?updatedAt=1759711302736")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-green-600/50 to-purple-600/50"></div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Get in Touch</h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              Let's work together to build a brighter future for South Africa's industries
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">Contact Information</h2>
              <p className="mb-8 text-lg text-gray-600">
                We're here to answer your questions and discuss how we can help with your electrical engineering and instrumentation needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-green-500">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600">
                      No. 31, Unit 22, Alumina Allee<br />
                      Alton, Richards Bay, 3900<br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-blue-500">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">Phone Numbers</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Office: <a href="tel:+27357601023" className="text-blue-600 hover:underline">+27 35 760 1023</a></p>
                      <p>Mobile: <a href="tel:+27665558555" className="text-blue-600 hover:underline">+27 66 555 8555</a></p>
                      <p>Mobile: <a href="tel:+27631002929" className="text-blue-600 hover:underline">+27 63 100 2929</a></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">Email Addresses</h3>
                    <div className="space-y-1 text-gray-600">
                      <p><a href="mailto:info@aclp.co.za" className="text-blue-600 hover:underline">info@aclp.co.za</a></p>
                      <p><a href="mailto:aclnrb@gmail.com" className="text-blue-600 hover:underline">aclnrb@gmail.com</a></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">Business Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: Closed</p>
                      <p className="mt-2 text-sm font-medium text-blue-600">24/7 Emergency Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="p-8 mb-8 text-white shadow-2xl bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 rounded-2xl">
                <h2 className="mb-6 text-3xl font-bold">Why Choose ACL Projects?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-300 rounded-full"></div>
                    <p className="text-blue-50">100% B-BBEE compliant, woman-owned business</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-300 rounded-full"></div>
                    <p className="text-blue-50">Professional engineers with Government Competence Certificates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-300 rounded-full"></div>
                    <p className="text-blue-50">15+ years of experience in heavy industry</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-300 rounded-full"></div>
                    <p className="text-blue-50">Comprehensive electrical engineering and instrumentation services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-300 rounded-full"></div>
                    <p className="text-blue-50">Trusted by leading organizations across South Africa</p>
                  </div>
                </div>
                <div className="pt-8 mt-8 border-t border-white/20">
                  <p className="text-2xl font-bold text-center text-yellow-300">
                    SUCCESS IS CONSTANCY OF PURPOSE
                  </p>
                </div>
              </div>

              <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl">
                <h3 className="mb-6 text-2xl font-bold text-gray-800">Connect With Us</h3>
                <p className="mb-6 text-gray-600">
                  Follow us on social media to stay updated with our latest projects and industry insights.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 transition-colors rounded-lg bg-blue-50 hover:bg-blue-100 group"
                  >
                    <Facebook className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700 group-hover:text-blue-600">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 transition-colors rounded-lg bg-pink-50 hover:bg-pink-100 group"
                  >
                    <Instagram className="w-6 h-6 text-pink-600" />
                    <span className="text-gray-700 group-hover:text-pink-600">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 transition-colors rounded-lg bg-blue-50 hover:bg-blue-100 group"
                  >
                    <Linkedin className="w-6 h-6 text-blue-700" />
                    <span className="text-gray-700 group-hover:text-blue-700">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 transition-colors rounded-lg bg-blue-50 hover:bg-blue-100 group"
                  >
                    <Twitter className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-700 group-hover:text-blue-500">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
            <div className="bg-gray-200 aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.8123456789!2d32.0378!3d-28.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ2JzU5LjkiUyAzMsKwMDInMTYuMSJF!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ACL Projects Location"
                className="w-full"
              ></iframe>
            </div>
            <div className="p-8 text-white bg-gradient-to-r from-green-500 to-blue-500">
              <h3 className="mb-2 text-2xl font-bold">Visit Our Office</h3>
              <p className="text-blue-100">
                We're conveniently located in Richards Bay, serving clients across South Africa and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Contact us today to discuss how we can help empower your industry with our exceptional electrical engineering and instrumentation services.
          </p>
          <div className="p-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
            <p className="mb-4 text-lg text-gray-700">
              <strong>Company Registration:</strong> 2024/162392/07
            </p>
            <p className="text-gray-600">
              ACL Projects (Pty) Ltd is a 100% B-BBEE compliant, woman-owned electrical engineering company committed to delivering excellence across all our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
