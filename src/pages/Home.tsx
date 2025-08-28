import React from 'react';
import { Phone, MapPin, Shield, Clock, Truck, Zap, Users, Award, Globe, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(10, 37, 64, 0.7), rgba(10, 37, 64, 0.7)), url("/images/image.png")'
        }}
      >
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-shadow">
            Driving Logistics into the Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow font-light">
            Reliable freight solutions with advanced technology
          </p>
          <a
            // href="tel:+18008294933"
            className="inline-flex items-center space-x-3 bg-accent text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 shadow-lg"
          >
            <Phone className="w-6 h-6" />
            <span>Call Us Now</span>
          </a>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Leading the Future of Freight Transportation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since our founding, HIGH-TECH HAULERS LTD has revolutionized the trucking industry by combining 
              decades of logistics expertise with state-of-the-art technology. We're not just moving freight – 
              we're pioneering the future of transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reliability */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-secondary p-3 rounded-lg w-fit mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Reliable Service
              </h3>
              <p className="text-gray-600">
                With our certifications, we provide fully compliant and insured 
                transportation services you can trust.
              </p>
            </div>

            {/* Technology */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-secondary p-3 rounded-lg w-fit mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Advanced Technology
              </h3>
              <p className="text-gray-600">
                Our fleet is equipped with state-of-the-art GPS tracking, real-time monitoring, 
                and digital logistics management systems.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="bg-secondary p-3 rounded-lg w-fit mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our dedicated support team is available around the clock to ensure your freight 
                reaches its destination safely and on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                About HIGH-TECH HAULERS LTD
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to transform the trucking industry, HIGH-TECH HAULERS LTD has grown 
                from a small Ohio-based operation to a nationally recognized leader in freight transportation. 
                Our commitment to innovation, safety, and customer satisfaction drives everything we do.
              </p>
              <p className="text-gray-600 mb-6">
                Based in Blue Ash, Ohio, we strategically serve major shipping corridors across the United States. 
                Our modern fleet of trucks is equipped with the latest technology, ensuring efficient, safe, 
                and environmentally responsible transportation solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700">EPA Compliant Fleet</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700">Real-Time Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700">Certified Drivers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700">Full Insurance Coverage</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="HIGH-TECH HAULERS fleet" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <div className="font-heading text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Modern Trucks</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <div className="font-heading text-3xl font-bold mb-2">48</div>
              <div className="text-gray-300">States Covered</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="font-heading text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="font-heading text-3xl font-bold mb-2">99.8%</div>
              <div className="text-gray-300">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From coast to coast, we provide specialized transportation services tailored to meet 
              the unique needs of businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Long Haul */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Long-Haul Transportation
              </h3>
              <p className="text-gray-600 mb-4">
                Cross-country freight delivery with our modern fleet of trucks equipped with 
                advanced safety and tracking systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Coast-to-coast delivery</li>
                <li>• Temperature-controlled options</li>
                <li>• Oversized load handling</li>
              </ul>
            </div>

            {/* Regional */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Regional Distribution
              </h3>
              <p className="text-gray-600 mb-4">
                Efficient regional transportation services connecting major distribution centers 
                across the Midwest and beyond.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Same-day delivery options</li>
                <li>• Multi-stop routing</li>
                <li>• Flexible scheduling</li>
              </ul>
            </div>

            {/* Specialized */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Specialized Freight
              </h3>
              <p className="text-gray-600 mb-4">
                Expert handling of specialized cargo including hazardous materials, 
                high-value goods, and time-sensitive deliveries.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• HAZMAT certified drivers</li>
                <li>• High-security transport</li>
                <li>• White glove service</li>
              </ul>
            </div>

            {/* Technology */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Fleet Management Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced GPS tracking, electronic logging devices, and real-time 
                communication systems for complete visibility.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Real-time GPS tracking</li>
                <li>• Electronic logging (ELD)</li>
                <li>• Route optimization</li>
              </ul>
            </div>

            {/* Warehousing */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Warehousing Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic warehousing and distribution services to optimize your 
                supply chain and reduce transportation costs.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Climate-controlled storage</li>
                <li>• Inventory management</li>
                <li>• Cross-docking services</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Logistics Consulting
              </h3>
              <p className="text-gray-600 mb-4">
                Expert consultation to optimize your transportation strategy, 
                reduce costs, and improve supply chain efficiency.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Supply chain analysis</li>
                <li>• Cost optimization</li>
                <li>• Process improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose HIGH-TECH HAULERS?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence, innovation, and customer satisfaction sets us apart 
              in the competitive world of freight transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                Our Competitive Advantages
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-2 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Safety First Approach</h4>
                    <p className="text-gray-600">
                      Our drivers undergo rigorous training and our fleet maintains the highest safety standards 
                      with regular inspections and maintenance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-2 rounded-lg flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Cutting-Edge Technology</h4>
                    <p className="text-gray-600">
                      From GPS tracking to predictive maintenance, we leverage technology to provide 
                      superior service and transparency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-2 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Experienced Team</h4>
                    <p className="text-gray-600">
                      Our team of logistics professionals brings decades of combined experience 
                      in freight transportation and supply chain management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                Industry Certifications
              </h3>
              <div className="bg-neutral p-6 rounded-xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">DOT Safety Rating</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Satisfactory</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">FMCSA Compliance</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Insurance Coverage</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">$1M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">HAZMAT Certified</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Yes</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent rounded-lg">
                <p className="text-primary font-medium text-center">
                  "Trusted by Fortune 500 companies and small businesses alike"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Experience the HIGH-TECH HAULERS Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust us with their most important shipments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+18008294933"
              className="flex items-center space-x-2 bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Quote Today</span>
            </a>
            <div className="flex items-center space-x-2 text-white opacity-90">
              <MapPin className="w-5 h-5" />
              <span>Serving all 48 contiguous states</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                Get Started with Your Freight Solution
              </h3>
              <p className="text-gray-600 mb-6">
                Whether you need a one-time shipment or ongoing logistics support, our team is ready to 
                provide you with a customized solution that meets your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* <a
                  href="tel:+18008294933"
                  className="flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1-800-829-4933</span>
                </a> */}
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Blue Ash, OH 45242</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Info */}
      <section className="py-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-heading text-2xl font-semibold">
              Fully Licensed & Insured
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;