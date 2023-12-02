import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPageRoute from './Register/routes/index.tsx'

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPageRoute/>}/>
      </Routes>
    </BrowserRouter>
  </div>
)

export default App