export const mockPatients = [
  {
    id: 1,
    name: "John Doe",
    age: 35,
    contact: "+1-555-0123",
    email: "john.doe@example.com",
    address: "123 Main St, City, State 12345",
    medicalHistory: "Hypertension, Diabetes",
    lastVisit: "2023-10-01",
    nextAppointment: "2023-11-15"
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    contact: "+1-555-0456",
    email: "jane.smith@example.com",
    address: "456 Oak Ave, City, State 12346",
    medicalHistory: "Asthma",
    lastVisit: "2023-09-20",
    nextAppointment: "2023-10-25"
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 42,
    contact: "+1-555-0789",
    email: "bob.johnson@example.com",
    address: "789 Pine Rd, City, State 12347",
    medicalHistory: "Back pain, Allergies",
    lastVisit: "2023-08-15",
    nextAppointment: "2023-11-01"
  },
  {
    id: 4,
    name: "Alice Brown",
    age: 31,
    contact: "+1-555-0321",
    email: "alice.brown@example.com",
    address: "321 Elm St, City, State 12348",
    medicalHistory: "Migraine",
    lastVisit: "2023-10-05",
    nextAppointment: "2023-12-10"
  },
  {
    id: 5,
    name: "Charlie Wilson",
    age: 55,
    contact: "+1-555-0654",
    email: "charlie.wilson@example.com",
    address: "654 Maple Dr, City, State 12349",
    medicalHistory: "Heart condition, High cholesterol",
    lastVisit: "2023-09-10",
    nextAppointment: "2023-10-20"
  },
  {
    id: 6,
    name: "Diana Davis",
    age: 24,
    contact: "+1-555-0987",
    email: "diana.davis@example.com",
    address: "987 Cedar Ln, City, State 12350",
    medicalHistory: "None",
    lastVisit: "2023-10-10",
    nextAppointment: "2023-11-30"
  }
];

export const fetchPatients = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockPatients;
};