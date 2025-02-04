import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroPage from './pages/IntroPage'
import QrPage from './pages/QrPage'

function App() {

  const [showQr, setShowQr] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQr(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      {showQr ? <QrPage /> : <IntroPage />}
    </>
  )
}

export default App
