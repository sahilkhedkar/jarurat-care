import { motion } from 'framer-motion';

const PatientCard = ({ patient, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-blue-600 font-semibold text-lg">
              {patient.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{patient.name}</h3>
            <p className="text-gray-600">ID: {patient.id}</p>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Age:</span>
            <span className="font-medium">{patient.age} years</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Contact:</span>
            <span className="font-medium">{patient.contact}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onViewDetails(patient)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PatientCard;