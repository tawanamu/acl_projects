import { Briefcase, CheckCircle, MapPin, Calendar, Users, Target } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Industrial Automation System Upgrade',
      client: 'Southex',
      location: 'Richards Bay',
      date: '2024',
      category: 'Power Electronics',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete overhaul of industrial automation systems including VSD installations, PLC programming, and control system optimization.',
      highlights: [
        'Installation of 12 variable speed drives',
        'PLC system upgrade and commissioning',
        'Energy efficiency improvement of 25%',
        'Zero downtime during transition',
      ],
    },
    {
      title: 'Municipal Electrical Infrastructure',
      client: 'King Cetshwayo District',
      location: 'KwaZulu-Natal',
      date: '2023-2024',
      category: 'Electrical Services',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive electrical infrastructure development including MV/LV installations, power distribution, and street lighting systems.',
      highlights: [
        'Installation of 5km electrical distribution network',
        'LED street lighting system deployment',
        'Substation maintenance and upgrade',
        'Full compliance certification',
      ],
    },
    {
      title: 'Industrial Park Development',
      client: 'RBIDZ',
      location: 'Richards Bay',
      date: '2023',
      category: 'Project Management',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'End-to-end project management for electrical and instrumentation installation in new industrial development zone.',
      highlights: [
        'Complete electrical design and installation',
        'Instrumentation and control systems',
        'Project delivered on time and within budget',
        'Safety record: Zero incidents',
      ],
    },
    {
      title: 'UPS System Installation & Maintenance',
      client: 'Nini Butt Business',
      location: 'Richards Bay',
      date: '2024',
      category: 'Power Electronics',
      image: 'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Design, installation, and ongoing maintenance of uninterrupted power supply systems for critical business operations.',
      highlights: [
        '500kVA UPS system installation',
        'Battery backup configuration',
        '24/7 monitoring and maintenance contract',
        'Backup generator integration',
      ],
    },
    {
      title: 'Mining Facility Electrical Upgrade',
      client: 'Confidential Mining Client',
      location: 'KwaZulu-Natal',
      date: '2023',
      category: 'Electrical Services',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Major electrical system upgrade for mining operations including power distribution, motor control centers, and safety systems.',
      highlights: [
        'MCC panel design and installation',
        'High-voltage electrical installations',
        'Safety system integration',
        'Ongoing plant maintenance contract',
      ],
    },
    {
      title: 'Solar Power Integration Project',
      client: 'Industrial Client',
      location: 'Richards Bay',
      date: '2024',
      category: 'Energy Solutions',
      image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Integration of solar power systems with existing electrical infrastructure for sustainable energy solutions.',
      highlights: [
        'Solar panel installation and grid integration',
        'Energy management system deployment',
        '40% reduction in energy costs',
        'Environmental impact reduction',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 via-blue-600/50 to-purple-600/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Delivering excellence across electrical engineering, power electronics, and industrial automation projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of our recent work across various sectors and industries
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url("${project.image}")` }}
                    ></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>

                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <span className="text-sm">{project.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Project Highlights</h4>
                      <div className="space-y-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-gray-700">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Every project we undertake reflects our dedication to quality, safety, and client satisfaction. With our experienced team and comprehensive approach, we deliver results that exceed expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">Quality First</h3>
                <p className="text-blue-100">Highest standards in every aspect of our work</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">On Time, On Budget</h3>
                <p className="text-blue-100">Reliable delivery that respects your timeline and budget</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">Safety Excellence</h3>
                <p className="text-blue-100">Zero-incident safety record across all projects</p>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-2xl font-bold text-yellow-300">
                SUCCESS IS CONSTANCY OF PURPOSE
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can bring your electrical engineering and instrumentation project to life with the same excellence and dedication.
          </p>
        </div>
      </section>
    </div>
  );
}
