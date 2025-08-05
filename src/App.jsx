import { useEffect } from 'react';
import RoleSelectionScreen from './components/RoleSelectionScreen';

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <div className="App">
      <RoleSelectionScreen />
    </div>
  );
}

export default App;
