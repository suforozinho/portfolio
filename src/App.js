// import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

// let scrollPos = window.scrollY;

// function scrollAnimation(e) {
//   if (e.deltaY >= 0) {
//     if (scrollPos >= document.getElementById('Contact').scrollHeight * 3) {
//       return;
//     }
//     scrollPos += document.getElementById('Contact').scrollHeight;
//     window.scrollTo(0, scrollPos);
//     document.removeEventListener('wheel', scrollAnimation);
//   } else {
//     if (scrollPos === 0) {
//       return;
//     }
//     scrollPos -= document.getElementById('Contact').scrollHeight;
//     window.scrollTo(0, scrollPos);
//     document.removeEventListener('wheel', scrollAnimation);
//   }
// }

function App() {
  // useEffect(() => {
  //   document.addEventListener('wheel', scrollAnimation);
  // });
  
  return (
    <div className="App">
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
