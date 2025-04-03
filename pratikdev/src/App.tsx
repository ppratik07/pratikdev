import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProfilePage } from "./pages/ProfilePage"

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
