import Start from "./pages/start";
import { ThemeProvider } from "./components/local/theme-provider";
function App() {
  return (
    <main className="w-full h-full">
      <ThemeProvider>
        <Start />
      </ThemeProvider>
    </main>
  )
}

export default App;
