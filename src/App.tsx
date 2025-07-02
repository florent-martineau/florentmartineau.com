import { useState } from "react";
import { ThemeProvider } from "./components/ui/theme-provider";
import { ThemeToggle } from "./components/ui/theme-toggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <h1 className="text-sm">Vite + React</h1>
      <div className="card">
        <ThemeToggle />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
