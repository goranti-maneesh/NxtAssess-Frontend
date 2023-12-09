import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterPageRoute from './Register/routes'
import LoginPageRoute from './Auth/routes'
import HomeRoute from './Assessment/components/Home'

import {LoginHookContext} from './Auth/hooks/useLoginHooks.js'
import { RegisterHookContext } from "./Register/hooks/useRegisterHooks.js";

const App = () => (
  <div>
    <BrowserRouter>
      <LoginHookContext>
        <RegisterHookContext>
          <Routes>
            <Route path="/register" element={<RegisterPageRoute/>}/>
            <Route path="/login" element={<LoginPageRoute/>}/>
            <Route path="/" element={<HomeRoute/>}/>
          </Routes>
        </RegisterHookContext>
      </LoginHookContext>
    </BrowserRouter>
  </div>
)

export default App