import React from 'react';
import DashboardLayout from './components/Layout/DashboardLayout';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <DashboardLayout>
      <ProfilePage />
    </DashboardLayout>
  );
}

export default App;