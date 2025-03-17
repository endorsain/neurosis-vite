import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ReduxProvider from './context/ReduxProvider.jsx';
import './styles/index.css';

// StrictMode me generaba doble renderizado en modo desarrollador.
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ReduxProvider>
//       <App />
//     </ReduxProvider>
//   </StrictMode>
// );

createRoot(document.getElementById('root')).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
