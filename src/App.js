import Main from './components/Main';
import Navbar from './components/Navbar';
import { StocksProvider } from './context/StocksContext';

function App() {
  return (
    <StocksProvider>
      <div className="app">
        <Navbar />

        <Main />
      </div>
    </StocksProvider>
  );
}

export default App;
