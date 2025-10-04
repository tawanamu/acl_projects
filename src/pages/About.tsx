import { Target, Eye, Heart, Lightbulb, Award, Users, TrendingUp, Shield, Star, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: "We're always looking for new and better ways to solve problems and improve our services.",
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality',
      description: "We're dedicated to delivering high-quality solutions that meet the highest standards.",
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Focus',
      description: "We're passionate about understanding our clients' needs and delivering solutions that exceed their expectations.",
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Service',
      description: "Identify the customer's expectations and strive to exceed them.",
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity',
      description: 'Behaving in a trusting and honest manner with our employees, clients, and associates.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Commitment',
      description: 'Creating the best projects, electrical installation, engineering, labour supply and instrumentation solutions for clients.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Technical and operational expertise.',
      color: 'from-blue-600 to-purple-600',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth',
      description: 'A genuine desire to learn, a willingness to teach, a commitment to contribute, enjoying friendships, sharing experiences and responsibility.',
      color: 'from-green-600 to-blue-600',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Respect',
      description: 'We treat others the way we would like to be treated.',
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Improvement',
      description: 'Success is constancy of purpose. We believe that continuous improvement is a way of life.',
      color: 'from-yellow-500 to-green-500',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-purple-600/50 to-green-600/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ACL Projects</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering industries, enhancing lives through exceptional electrical engineering and instrumentation services
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                ACL Projects (Pty) Ltd is 100% owned by a young black South African woman, making it fully aligned with the broad-based black economic empowerment (B-BBEE) requirement in the Republic of South Africa.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Employment Equity initiatives are fully integrated into the company's business objectives and philosophy.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                ACL Projects (Pty) Ltd is committed to all facets of project management services, electrical engineering, instrumentation, and ongoing plant maintenance.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-gray-700">
                  Our core staff consists of an Electrical Engineer, Electricians (Master), Electrical Construction Operators (ELCONOPS), semi-skilled workers, and assistants with a minimum average of 8 years of extensive experience.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Professional Excellence</h3>
              <p className="text-blue-100 mb-6">
                Our team is backed up on a full-time basis by a Professional Electrical Engineer who holds a Government Competence Certificate (GCC) and has more than 15 years of experience in heavy industry.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-yellow-300 font-semibold text-center">
                  Reg no.: 2024/162392/07
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-red-50 text-lg leading-relaxed">
                Our vision is to establish ourselves as the premier electrical engineering, construction, and instrumentation company, distinguished by exceptional project management services. We strive to be the industry leader and trusted expert in delivering outstanding quality services across all our key disciplines, consistently surpassing our clients' expectations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-blue-50 text-lg leading-relaxed">
                Our mission is to establish ourselves as a recognised and preferred service provider, renowned for delivering exceptional plant maintenance, electrical, and instrumentation services. We aim to achieve this across local, national, and African markets through our team of highly qualified professionals, who embody our unwavering commitment to integrity, excellence, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              We're committed to delivering high-quality solutions that meet the unique needs of our clients, from mining and manufacturing to infrastructure and energy. Our goal is to empower industries, enhance lives, and contribute to South Africa's economic growth and development.
            </p>
            <div className="mt-12 inline-block">
              <p className="text-2xl font-bold text-yellow-300">
                SUCCESS IS CONSTANCY OF PURPOSE
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              At ACL Projects (Pty) Ltd, we're passionate about making a difference through electrical engineering and instrumentation. Let's work together to build a brighter future for South Africa's industries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
