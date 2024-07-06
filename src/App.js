import Navbar from './Navbar';
import './App.css';
import HeroSection from './HeroSection';
import AddExpense from './AddExpense';

function App() {
  return (
    <div className="App">
     <Navbar />
     <HeroSection/>
     <AddExpense/>
    </div>
  );
}

export default App;
