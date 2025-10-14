import { Cpu, Zap, Wrench, Shield, CheckCircle, ClipboardList } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Services() {
  const [heroRef, isHeroVisible] = useScrollAnimation({ threshold: 0.3 });
  const [servicesRef, isServicesVisible] = useScrollAnimation({ threshold: 0.2 });
  const [expertiseRef, isExpertiseVisible] = useScrollAnimation({ threshold: 0.2 });
  const [whyChooseRef, isWhyChooseVisible] = useScrollAnimation({ threshold: 0.2 });
  const [ctaRef, isCtaVisible] = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Power Electronics',
      color: 'from-blue-500 to-blue-150',
      items: [
        'Maintenance of variable speed drives (VSD), soft starters, and uninterrupted power supplies (UPS), and electronic controllers, including current maintenance services for ABB',
        'Design, fabrication, installation, and commissioning of VSDs, UPSs, BTUs, and soft starter panels',
        'Refurbishment and maintenance of power electronic equipment',
        'Supply of electronic equipment and components',
        'Backup service for power electronic equipment',
        'Auditing and spares management',
        'Fault finding on power electronic equipment',
        'Training on power electronic equipment',
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Electrical & Instrumentation Services',
      color: 'from-green-500 to-green-150',
      items: [
        'Electrical Installation & Maintenance (MCC Panels)',
        'DSC/PLC System Cabinets, UPS & Inverter Installations',
        'Complete Generator Solutions, Lightning Protection & Earthing',
        'Fault Finding & Power Factor Corrections',
        'Cabling/Racking & Energy Saving Projects',
        'Issue of Certificate of Compliance',
        'MV and LV installations',
        'Facilities Management',
        'Plant maintenance',
        'Labour supply',
        'VSD installation and repair',
        'Maintenance,calibration, process automation, and commissioning of various E&I components.',
      ],
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: 'Project Services',
      color: 'from-orange-500 to-red-150',
      items: [
        'Comprehensive project management services',
        'All stages of project life cycle management',
        'Plan development for approved projects',
        'Plan approval and documentation',
        'Progress updating and reporting',
        'Successful and fully documented project completion',
      ],
    },
  ];

  const expertise = [
    {
      title: 'Electrical Engineering & Design',
      description: 'Comprehensive electrical engineering solutions from concept to completion',
    },
    {
      title: 'Instrumentation & Control Systems',
      description: 'Advanced instrumentation and control system design and implementation',
    },
    {
      title: 'Industrial Automation & Process Control',
      description: 'Cutting-edge automation solutions for improved efficiency',
    },
    {
      title: 'Electrical Installation & Commissioning',
      description: 'Professional installation and commissioning services',
    },
    {
      title: 'Energy Efficiency & Optimisation',
      description: 'Solutions to reduce energy consumption and optimize performance',
    },
  ];

  return (
    <div className="bg-white">
      <section 
        ref={heroRef}
        className={`relative py-20 overflow-hidden text-white bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 scroll-fade-in ${isHeroVisible ? 'visible' : 'scroll-initial-visible'}`}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-80"
          style={{ backgroundImage: 'url("https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Images/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg?updatedAt=1759711297380")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 via-blue-600/50 to-purple-600/50"></div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="max-w-3xl mx-auto text-xl text-green-100">
              Comprehensive electrical engineering, instrumentation, and project management solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <section 
        ref={servicesRef}
        className={`py-20 scroll-fade-in ${isServicesVisible ? 'visible' : ''}`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">What We Offer</h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Expert solutions across all aspects of electrical engineering and instrumentation
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`overflow-hidden bg-white shadow-xl rounded-2xl scroll-scale-in ${index % 2 === 0 ? 'scroll-fade-left' : 'scroll-fade-right'} scroll-delay-${(index + 1) * 200} ${isServicesVisible ? 'visible' : ''}`}
              >
                <div className={`relative bg-gradient-to-r ${service.color} p-8 text-white overflow-hidden`}>
                  <div
                    className="absolute inset-0 bg-center bg-cover opacity-100"
                    style={{
                      backgroundImage: `url("${
                        index === 0
                          ? 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200'
                          : index === 1
                          ? 'https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Images/american-public-power-association-VuR4oHZ3ucc-unsplash.jpg?updatedAt=1759711298304'
                          : 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200'
                      }")`
                    }}
                  ></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`}></div>
                  <div className="relative flex items-center gap-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-green-500" />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See Projects Button */}
          <div className="mt-12 text-center">
            <a
              href="/Projects"
              className="inline-block px-8 py-4 text-lg font-semibold text-white transition bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              See Projects
            </a>
          </div>
        </div>
      </section>

      <section 
        ref={expertiseRef}
        className={`py-20 bg-gray-50 scroll-fade-in ${isExpertiseVisible ? 'visible' : ''}`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">Our Expertise</h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Specialized knowledge across critical engineering disciplines
            </p>
          </div>
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Expertise Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start p-6 transition-all transform bg-white shadow-lg rounded-xl scroll-hover scroll-scale-in scroll-delay-${(index + 1) * 100} ${isExpertiseVisible ? 'visible' : ''}`}
                >
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
              ))}
            </div>
            {/* Image Side */}
            <div className={`flex justify-center scroll-fade-right ${isExpertiseVisible ? 'visible' : ''}`}>
              <img
                src="https://ik.imagekit.io/eeyzqy1tn/ACL%20Projects/Images/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg?updatedAt=1759711297380"
                alt="Expertise"
                className="object-cover w-full max-w-2xl shadow-xl rounded-2xl scroll-hover"
              />
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={whyChooseRef}
        className={`py-20 text-white bg-gradient-to-r from-blue-600 to-green-600 scroll-fade-in ${isWhyChooseVisible ? 'visible' : ''}`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className={`scroll-fade-left ${isWhyChooseVisible ? 'visible' : ''}`}>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Choose ACL Projects?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="flex-shrink-0 w-6 h-6 mt-1 text-yellow-300" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Government Certified Professionals</h3>
                    <p className="text-blue-100">Our team holds Government Competence Certificates (GCC) and industry certifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="flex-shrink-0 w-6 h-6 mt-1 text-yellow-300" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Extensive Experience</h3>
                    <p className="text-blue-100">Average of 8+ years experience across all team members, with leadership having 15+ years in heavy industry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 w-6 h-6 mt-1 text-yellow-300" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">100% B-BBEE Compliant</h3>
                    <p className="text-blue-100">Fully aligned with South African empowerment requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="flex-shrink-0 w-6 h-6 mt-1 text-yellow-300" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Comprehensive Solutions</h3>
                    <p className="text-blue-100">Full-service capabilities from design to maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`p-8 bg-white/10 backdrop-blur-sm rounded-2xl scroll-fade-right ${isWhyChooseVisible ? 'visible' : ''}`}>
              <h3 className="mb-6 text-2xl font-bold">Industries We Serve</h3>
              <div className="space-y-3">
                {['Mining', 'Manufacturing', 'Infrastructure', 'Energy', 'Heavy Industry', 'Industrial Facilities'].map((industry, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <p className="text-lg">{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={ctaRef}
        className={`py-20 scroll-fade-in ${isCtaVisible ? 'visible' : ''}`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="p-12 text-center text-white shadow-2xl bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl scroll-scale">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-orange-100">
              Let's discuss how we can help power your next project with our comprehensive electrical engineering and instrumentation services
            </p>
            <div className="mb-6 text-2xl font-bold text-yellow-300">
              SUCCESS IS CONSTANCY OF PURPOSE
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
