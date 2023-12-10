import {createContext} from 'react'

const isDesktopView: boolean = window.matchMedia("(max-width: 768px)").matches

export const ObjContext = createContext({
    isDesktopView,
});