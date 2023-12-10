import tw from "twin.macro";
import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
    ${tw`w-full h-88px pl-12 pr-12 bg-Astronaut`}
`

export const HeaderContainer = styled.div`
    ${tw`flex justify-between items-center h-88px`}
`

export const LogoutBtn = styled.button`
    ${tw`text-fs12_lh16 font-medium border-2 border-white rounded-8px outline-none pl-6 pr-6 pt-3 pb-3 text-white`}
`