import React from 'react';
import './App.css'
import UseStatehook from './components/UseStatehook';
import UseEffecthook from './components/UseEffecthook';
import UesRefHook from './components/UesRefHook';
import UseMemohook from './components/useMemohook';
import UseCallbackhook from './components/UseCallbackhook';
import Profile from './components/datacomponent/Profile';
import Footer from './components/datacomponent/Footer';

function App() {
 

  return (
    <>
   {/* <UseStatehook /> */}
   {/* <UseEffecthook /> */}
   {/* <UseMemohook /> */}
   {/* <UseCallbackhook /> */}
   <Profile />
   <Footer />
   {/* <UesRefHook /> */}

    </>
  )
}

export default App
