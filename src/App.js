import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./components/Homepage";



function App() {
  return (
      <main>
        <Nav/>
        <Header/>
        <HomePage />
        <Footer/>
      </main>
  );
}

export default App;
