import tw from "twin.macro";
import styled from 'styled-components'

export const NxtAssessLogoContainer = styled.div`
    ${tw`flex flex-col items-center`}
`

export const NxtAssessImg = styled.img`
    ${tw`h-38px w-77px`}
`

export const NxtAssessText = styled.p`
    ${tw`flex text-fs18_lh24 italic`}

    ${(props) => props.textColor === "white" ? tw`text-white` : tw`text-Astronaut`}
`

export const NxtText = styled.span`
    ${tw`font-bold mr-1`}
`