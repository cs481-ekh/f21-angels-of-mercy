import './App.css';
import AppInMain from './components/main/AppInMain.js';
import Main from './components/main/Main.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <AppInMain />
      <Main />
      <Footer />
    </div>

  );
}

export default App;
