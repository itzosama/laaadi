import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import HowWeWorkPage from './pages/HowWeWorkPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/how-we-work" element={<HowWeWorkPage />} />
    </Routes>
  )
}
