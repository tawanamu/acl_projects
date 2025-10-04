import { Zap, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const highlights = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Electronics',
      description: 'Advanced VSD, UPS, and electronic controller solutions',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Professional engineers with 15+ years experience',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '100% B-BBEE',
      description: 'Fully aligned with South African empowerment goals',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Cutting-edge solutions for industrial automation',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-200"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1920")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/50 via-blue-500/50 to-purple-600/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  ACL
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Industries,<br />Enhancing Lives
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              ACL Projects (Pty) Ltd
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-50">
              Premier electrical engineering, construction, and instrumentation services with exceptional project management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('services')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Our Services
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
            <p className="mt-8 text-yellow-300 text-lg font-semibold tracking-wide">
              SUCCESS IS CONSTANCY OF PURPOSE
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Passionate About Making a Difference
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At ACL Projects (Pty) Ltd, we harness the power of electrical engineering and instrumentation to drive innovation and efficiency in South Africa's industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With a team of expert engineers and technicians, we design, develop, and deliver cutting-edge solutions for industrial automation, process control, and electrical infrastructure.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Professional Electrical Engineers with Government Competence Certificates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Master Electricians and ELCONOPS with 8+ years experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">100% B-BBEE aligned with Employment Equity initiatives</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="mt-8 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-600/30"></div>
                <div className="relative">
                  <p className="text-4xl font-bold mb-2">15+</p>
                  <p className="text-blue-100">Years of Experience</p>
                </div>
              </div>
              <div className="relative bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-green-600/30"></div>
                <div className="relative">
                  <p className="text-4xl font-bold mb-2">100%</p>
                  <p className="text-green-100">B-BBEE Compliant</p>
                </div>
              </div>
              <div className="relative bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-600/30"></div>
                <div className="relative">
                  <p className="text-4xl font-bold mb-2">Expert</p>
                  <p className="text-orange-100">Engineering Team</p>
                </div>
              </div>
              <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-purple-600/30"></div>
                <div className="relative">
                  <p className="text-4xl font-bold mb-2">24/7</p>
                  <p className="text-purple-100">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Trusted Clients</h2>
            <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto">
              We're proud to work with leading organizations across South Africa
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="bg-white rounded-lg p-6 h-24 flex items-center justify-center">
                <p className="text-gray-800 font-semibold text-center">Southex</p>
              </div>
              <div className="bg-white rounded-lg p-6 h-24 flex items-center justify-center">
                <p className="text-gray-800 font-semibold text-center">King Cetshwayo District</p>
              </div>
              <div className="bg-white rounded-lg p-6 h-24 flex items-center justify-center">
                <p className="text-gray-800 font-semibold text-center">RBIDZ</p>
              </div>
              <div className="bg-white rounded-lg p-6 h-24 flex items-center justify-center">
                <p className="text-gray-800 font-semibold text-center">Nini Butt Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to build a brighter future for South Africa's industries
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 text-lg flex items-center gap-2 mx-auto"
          >
            Get in Touch
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}
