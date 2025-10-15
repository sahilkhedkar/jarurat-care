import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Jarurat Care
          </h1>
          <p className="text-xl text-gray-600">
            Revolutionizing healthcare management with innovative technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Jarurat Care, we believe that quality healthcare should be accessible,
            efficient, and compassionate. Our mission is to empower healthcare providers
            with cutting-edge technology that streamlines patient care and improves outcomes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are committed to developing innovative solutions that address the real-world
            challenges faced by medical professionals, ensuring that every patient receives
            the care they deserve in a timely and effective manner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Compassionate care for every patient
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Innovation in healthcare technology
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Data security and privacy
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Continuous improvement and learning
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Impact</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Patients Served</span>
                <span className="font-semibold text-blue-600">10,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Healthcare Providers</span>
                <span className="font-semibold text-blue-600">500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Success Rate</span>
                <span className="font-semibold text-blue-600">98%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Years of Service</span>
                <span className="font-semibold text-blue-600">5+</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;