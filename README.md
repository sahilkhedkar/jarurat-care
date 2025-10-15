# Jarurat Care - Healthcare Management System

A modern, responsive healthcare management application built with React, Vite, and Tailwind CSS. Streamline patient records, manage appointments, and provide efficient care coordination with an intuitive user interface.

## 🚀 Features

- **Patient Management**: Add, view, and search patient records
- **Digital Records**: Secure patient information with comprehensive medical history
- **Search Functionality**: Real-time search through patient database
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Beautiful animations and transitions using Framer Motion
- **Mock Data**: Pre-populated with sample patient data for demonstration

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Animations**: Framer Motion
- **Linting**: ESLint
- **Package Manager**: npm (with Bun support)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **Bun** (optional, for faster installs)

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd assignment
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using Bun (if available):
```bash
bun install
```

### 3. Start Development Server

Using npm:
```bash
npm run dev
```

Or using Bun:
```bash
bun run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

### 6. Lint Code

```bash
npm run lint
```

## 📁 Project Structure

```
assignment/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AddPatientForm.jsx      # Form for adding new patients
│   │   ├── Header.jsx              # Navigation header
│   │   ├── PatientCard.jsx         # Patient card component
│   │   └── PatientDetailsModal.jsx # Modal for patient details
│   ├── pages/
│   │   ├── About.jsx               # About page
│   │   ├── Home.jsx                # Landing page
│   │   └── Patients.jsx            # Patient management page
│   ├── utils/
│   │   └── mockData.js             # Mock patient data
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # App-specific styles
│   ├── index.css                   # Global styles
│   └── main.jsx                    # App entry point
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint configuration
└── README.md                       # This file
```

## 🎯 Usage

1. **Home Page**: Welcome screen with overview and navigation
2. **Patients Page**:
   - View all patients in a grid layout
   - Search patients by name
   - Click on a patient card to view detailed information
   - Add new patients using the "Add New Patient" button
3. **About Page**: Information about the application

## 🔧 Configuration

### Vite Configuration

The project uses Vite with React and Tailwind CSS plugins. Configuration can be found in `vite.config.js`.

### Tailwind CSS

Styling is handled by Tailwind CSS v4. Custom configurations can be added to the Vite config.

### ESLint

Code linting is configured with ESLint. Rules can be customized in `eslint.config.js`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions, please open an issue in the repository.

---

**Jarurat Care** - Transforming healthcare management with modern technology.
