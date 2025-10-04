import { Cpu, Zap, Wrench, Settings, Gauge, Battery, Cable, Shield, CheckCircle, ClipboardList } from 'lucide-react';

export default function Services() {
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
      title: 'Electrical Services',
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
      <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1920")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 via-blue-600/50 to-purple-600/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive electrical engineering, instrumentation, and project management solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert solutions across all aspects of electrical engineering and instrumentation
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`relative bg-gradient-to-r ${service.color} p-8 text-white overflow-hidden`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-100"
                    style={{
                      backgroundImage: `url("${
                        index === 0
                          ? 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200'
                          : index === 1
                          ? 'https://images.pexels.com/photos/162630/light-lamp-electricity-light-bulb-162630.jpeg?auto=compress&cs=tinysrgb&w=1200'
                          : 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200'
                      }")`
                    }}
                  ></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`}></div>
                  <div className="relative flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge across critical engineering disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Expertise Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col items-start"
                >
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
              ))}
            </div>
            {/* Image Side */}
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Expertise"
                className="rounded-2xl shadow-xl w-full max-w-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ACL Projects?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Government Certified Professionals</h3>
                    <p className="text-blue-100">Our team holds Government Competence Certificates (GCC) and industry certifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Extensive Experience</h3>
                    <p className="text-blue-100">Average of 8+ years experience across all team members, with leadership having 15+ years in heavy industry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">100% B-BBEE Compliant</h3>
                    <p className="text-blue-100">Fully aligned with South African empowerment requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Solutions</h3>
                    <p className="text-blue-100">Full-service capabilities from design to maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
              <div className="space-y-3">
                {['Mining', 'Manufacturing', 'Infrastructure', 'Energy', 'Heavy Industry', 'Industrial Facilities'].map((industry, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                    <p className="text-lg">{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help power your next project with our comprehensive electrical engineering and instrumentation services
            </p>
            <div className="text-2xl font-bold text-yellow-300 mb-6">
              SUCCESS IS CONSTANCY OF PURPOSE
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
