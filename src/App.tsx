import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/home"
import About from "./pages/about"
import ResultsPage from "./pages/results"
import NotFoundPage from "./pages/not-found"
import PrivacyPage from "./pages/privacy"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
