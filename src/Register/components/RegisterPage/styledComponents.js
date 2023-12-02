import tw from "twin.macro";
import styled from 'styled-components'
import { Link } from "react-router-dom";

export const RegisterPageMainContainer = styled.div`
    ${tw`bg-white p-12 shadow-loginPageCard`}
`

export const RegisterPageContainer = styled.div``

export const NxtAssessLogoContainer = styled.div`
    ${tw`flex flex-col items-center`}
`

export const NxtAssessLogo = styled.img`
    ${tw`h-38px w-77px`}
`

export const NxtAssessText = styled.p`
    ${tw`flex text-Astronaut text-fs18_lh24 italic mb-12`}
`

export const NxtText = styled.span`
    ${tw`font-bold mr-1`}
`

export const RegisterPageForm = styled.div``

export const ErrorText = styled.div``

export const SignUpBtn = styled.button`
    ${tw`w-360px h-10 bg-Astronaut rounded-8px outline-none text-white font-bold text-fs14_lh24 mb-2`}
`

export const AlreadyHaveAccText = styled.p`
    ${tw`text-fs14_lh24 text-Oslo-Gray`}
`

export const LinkComponent = styled(Link)`
    ${tw`text-blue-700`}
`