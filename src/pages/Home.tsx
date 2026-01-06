import { Zap, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const slides = [
    {
      title: 'Power Electronics',
      description: 'Advanced VSD, UPS, and controller solutions for industrial reliability',
      image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1600',
      cta: { label: 'Explore Power Electronics', page: 'services' },
    },
    {
      title: 'Electrical & Instrumentation Services',
      description: 'Maintenance,calibration, process automation, and commissioning of various E&I components.',
      image: 'https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Images/american-public-power-association-VuR4oHZ3ucc-unsplash.jpg?updatedAt=1759711298304',
      cta: { label: 'See Electrical Services', page: 'services' },
    },
    {
      title: 'Project Management',
      description: 'End-to-end project delivery with documentation and zero-downtime focus',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1600',
      cta: { label: 'Project Services', page: 'services' },
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused, slides.length]);

  const goTo = (idx: number) => setCurrentSlide(idx % slides.length);
  const next = () => setCurrentSlide((s) => (s + 1) % slides.length);
  const prev = () => setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);

  // Scroll animations
  const [highlightsRef, isHighlightsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [aboutRef, isAboutVisible] = useScrollAnimation({ threshold: 0.2 });
  const [clientsRef, isClientsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [ctaRef, isCtaVisible] = useScrollAnimation({ threshold: 0.2 });
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
      <section 
        className="relative overflow-hidden text-white bg-gradient-to-br from-green-500 via-blue-500 to-purple-600"
      >
        {/* Slides background stack */}
        <div className="absolute inset-0">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-center bg-no-repeat bg-cover transition-all duration-700 ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
              style={{ backgroundImage: `url("${slide.image}")` }}
              aria-hidden={idx !== currentSlide}
            ></div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/50 via-blue-500/50 to-purple-600/50"></div>
        </div>

        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-32">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center bg-white rounded-full shadow-2xl w-60 h-60">
                <img
                  src="https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Logo%20&%20Branding/logo.png?updatedAt=1759706592622"
                  alt="ACL Projects Logo"
                  className="object-contain w-40 h-40 "
                />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              {slides[currentSlide].title}
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-lg md:text-xl text-blue-50">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => onNavigate(slides[currentSlide].cta.page)}
                className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-blue-600 transition-all transform bg-white rounded-lg shadow-lg hover:bg-blue-50 hover:scale-105"
              >
                {slides[currentSlide].cta.label}
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3 font-semibold text-white transition-all transform bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 hover:scale-105"
              >
                Contact Us
              </button>
            </div>
            <p className="mt-8 text-lg font-semibold tracking-wide text-yellow-300">
              SUCCESS IS CONSTANCY OF PURPOSE
            </p>

            {/* Carousel controls */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                aria-label="Previous slide"
                onClick={prev}
                className="px-3 py-1 text-sm font-semibold border rounded text-white/90 border-white/30 hover:bg-white/10"
              >
                Prev
              </button>
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
                  ></button>
                ))}
              </div>
              <button
                aria-label="Next slide"
                onClick={next}
                className="px-3 py-1 text-sm font-semibold border rounded text-white/90 border-white/30 hover:bg-white/10"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={highlightsRef}
        className={`py-16 bg-gray-50 scroll-fade-in ${isHighlightsVisible ? 'visible' : ''}`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1 scroll-scale-in scroll-delay-${(index + 1) * 100} ${isHighlightsVisible ? 'visible' : ''}`}
                >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={aboutRef}
        className={`py-20 scroll-fade-in ${isAboutVisible ? 'visible' : ''}`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
                Passionate About Making a Difference
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                At ACL Projects (Pty) Ltd, we harness the power of electrical engineering and instrumentation to drive innovation and efficiency in South Africa's industries.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                With a team of expert engineers and technicians, we design, develop, and deliver cutting-edge solutions for industrial automation, process control, and electrical infrastructure.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-700">Professional Electrical Engineers with Government Competence Certificates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-700">Master Electricians and ELCONOPS with 8+ years experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-orange-500 rounded-full"></div>
                  <p className="text-gray-700">100% B-BBEE aligned with Employment Equity initiatives</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="flex items-center gap-2 px-6 py-3 mt-8 font-semibold text-white transition-all transform rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:shadow-lg hover:scale-105"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </button>
            </div>
            <div className={`grid grid-cols-2 gap-4 scroll-fade-right ${isAboutVisible ? 'visible' : ''}`}>
              <div className="relative p-6 overflow-hidden text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-30"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-600/30"></div>
                <div className="relative">
                  <p className="mb-2 text-4xl font-bold">15+</p>
                  <p className="text-blue-100">Years of Experience</p>
                </div>
              </div>
              <div className="relative p-6 overflow-hidden text-white bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-30"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-green-600/30"></div>
                <div className="relative">
                  <p className="mb-2 text-4xl font-bold">100%</p>
                  <p className="text-green-100">B-BBEE Compliant</p>
                </div>
              </div>
              <div className="relative p-6 overflow-hidden text-white bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-30"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-600/30"></div>
                <div className="relative">
                  <p className="mb-2 text-4xl font-bold">Expert</p>
                  <p className="text-orange-100">Engineering Team</p>
                </div>
              </div>
              <div className="relative p-6 overflow-hidden text-white bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-30"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-purple-600/30"></div>
                <div className="relative">
                  <p className="mb-2 text-4xl font-bold">24/7</p>
                  <p className="text-purple-100">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={clientsRef}
        className={`py-20 text-white bg-gradient-to-r from-blue-600 to-purple-600 scroll-fade-in ${isClientsVisible ? 'visible' : ''}`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Some of Our Clients</h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-blue-100">
              We're proud to work with leading organizations across South Africa
            </p>
            <div className="grid items-center grid-cols-2 gap-8 md:grid-cols-5">
              <img
                src="https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Client%20Logos/South32_logo.svg.png?updatedAt=1759617763190"
                alt="Southex"
                className="object-contain h-20 mx-auto"
              />
              <img
                src="https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Client%20Logos/kc_logo_new.png?updatedAt=1759617763422"
                alt="King Cetshwayo District"
                className="object-contain h-20 mx-auto"
              />
              <img
                src="https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Client%20Logos/logo.png?updatedAt=1759617762996"
                alt="RBIDZ"
                className="object-contain h-20 mx-auto"
              />
              <img
                src="https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Client%20Logos/images.jpeg?updatedAt=1759617762974"
                alt="Nini Butt Business"
                className="object-contain h-20 mx-auto rounded"
              />
              <img
                src="https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Client%20Logos/QCC.png"
                alt="QCC"
                className="object-contain mx-auto h-21"
              />
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={ctaRef}
        className={`py-20 bg-gray-50 scroll-fade-in ${isCtaVisible ? 'visible' : ''}`}
      >
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
            Let's work together to build a brighter future for South Africa's industries
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-2 px-8 py-4 mx-auto text-lg font-semibold text-white transition-all transform rounded-lg bg-gradient-to-r from-green-500 to-blue-500 hover:shadow-xl hover:scale-105"
          >
            Get in Touch
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}
