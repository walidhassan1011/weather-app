import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/Header/Header";

import { ForecastProvider } from "./context/ForecastProvider";
function App() {
  return (
    <div className="App">
      <ForecastProvider>
        <Card />
        
      </ForecastProvider>
    </div>
  );
}

export default App;
