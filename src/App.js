import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPageRoute from './Register/routes/index.tsx'
import HomePageRoute from './Auth/routes/index.tsx'
import {LoginHookContext} from './Auth/hooks/useLoginHooks.js'
import { RegisterHookContext } from "./Register/hooks/useRegisterHooks.js";

const App = () => (
  <div>
    <BrowserRouter>
      <LoginHookContext>
        <RegisterHookContext>
          <Routes>
            <Route path="/register" element={<RegisterPageRoute/>}/>
            <Route path="/login" element={<HomePageRoute/>}/>
          </Routes>
        </RegisterHookContext>
      </LoginHookContext>
    </BrowserRouter>
  </div>
)

export default App