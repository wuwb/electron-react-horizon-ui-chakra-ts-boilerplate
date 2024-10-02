import {
  Routes,
  Route,
  Navigate,
  MemoryRouter as Router,
} from 'react-router-dom';
import {
  ChakraProvider,
  // extendTheme
} from '@chakra-ui/react';
import { useState } from 'react';
import AuthLayout from '@/layouts/auth';
import AdminLayout from '@/layouts/admin';
import RTLLayout from '@/layouts/rtl';
import initialTheme from '@/theme/theme'; //  { themeGreen }

import '@/assets/css/App.css';
// import '@/App.css';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  return (
    <ChakraProvider theme={currentTheme}>
      <Router>
        <Routes>
          <Route path="auth/*" element={<AuthLayout />} />
          <Route
            path="admin/*"
            element={
              <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
            }
          />
          <Route
            path="rtl/*"
            element={
              <RTLLayout theme={currentTheme} setTheme={setCurrentTheme} />
            }
          />
          <Route path="/" element={<Navigate to="/admin" replace />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
