import React from 'react';
import { AuthProvider } from './contextApi/AuthContext';
import Navigator from './routes/homeStack';

export default function App() {
  return (
     <AuthProvider>
      <Navigator />
     </AuthProvider> 
  );
}
