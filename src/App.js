import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/appData/AppContext";

import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex justify-center items-center h-screen max-w-full">
          <Dashboard />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
