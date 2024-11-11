

import MainPage from './pages/MainPage/MainPage';
import { AdviceProvider } from './context/adviceContext';

function App() {
  return (
    <AdviceProvider>
      <div>
        <MainPage />
      </div>
    </AdviceProvider>
  );
}

export default App;
