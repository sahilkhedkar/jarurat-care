import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PatientCard from '../components/PatientCard';
import PatientDetailsModal from '../components/PatientDetailsModal';
import AddPatientForm from '../components/AddPatientForm';
import { fetchPatients } from '../utils/mockData';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPatients();
  }, []);

  useEffect(() => {
    const filtered = patients.filter(patient =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPatients(filtered);
  }, [patients, searchQuery]);

  const loadPatients = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPatients();
      setPatients(data);
    } catch (err) {
      setError('Failed to load patients. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  const handleAddPatient = (newPatient) => {
    setPatients(prev => [...prev, newPatient]);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Patients</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={loadPatients}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Patient Records</h1>
          <p className="text-gray-600">Manage and view patient information</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex-1 max-w-md"
          >
            <input
              type="text"
              placeholder="Search patients by name..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAddFormOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Patient
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredPatients.length} of {patients.length} patients
          </p>
        </motion.div>

        {filteredPatients.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No patients found</h3>
            <p className="text-gray-600">
              {searchQuery ? 'Try adjusting your search criteria.' : 'Add your first patient to get started.'}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPatients.map((patient, index) => (
              <motion.div
                key={patient.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <PatientCard patient={patient} onViewDetails={handleViewDetails} />
              </motion.div>
            ))}
          </motion.div>
        )}

        <PatientDetailsModal
          patient={selectedPatient}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {isAddFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsAddFormOpen(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <AddPatientForm
                onAddPatient={handleAddPatient}
                onClose={() => setIsAddFormOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Patients;