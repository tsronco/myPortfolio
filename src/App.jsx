import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Changelog } from "./pages/Changelog_page"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
