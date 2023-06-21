import './App.css'

import { UserPreview } from "./components/UserPreview";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <UserPreview />
      </ThemeProvider>
    </>
  )
}

export default App
