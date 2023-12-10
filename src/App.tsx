import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {ObjContext} from './Common/context'
import RegisterPageRoute from './Register/routes'
import LoginPageRoute from './Auth/routes'
import HomeRoute from './Assessment/components/Home'
import AssessmentRoute from './Assessment/routes'

import {LoginHookContext} from './Auth/hooks/useLoginHooks.js'
import { RegisterHookContext } from "./Register/hooks/useRegisterHooks.js";

const mediaQuery = window.matchMedia("(min-width: 768px)");

const App = () => {

  const [isDesktopView, setScreenSize] = useState(
    mediaQuery.matches as boolean
  );

  useEffect(() => {
    const changeScreenSize = (event: MediaQueryListEvent) => {
        setScreenSize(event.matches);
    };

    mediaQuery.onchange = (event) => changeScreenSize(event);
  }, []);

  return (
    <ObjContext.Provider value={{isDesktopView: isDesktopView}}>
    <BrowserRouter>
      <LoginHookContext>
        <RegisterHookContext>
          <Routes>
            <Route path="/register" element={<RegisterPageRoute/>}/>
            <Route path="/login" element={<LoginPageRoute/>}/>
            <Route path="/" element={<HomeRoute/>}/>
            <Route path="/assessment" element={<AssessmentRoute/>}/>
          </Routes>
        </RegisterHookContext>
      </LoginHookContext>
    </BrowserRouter>
    </ObjContext.Provider>
  )
}

export default App