import tw from "twin.macro";
import styled from 'styled-components'
import { FaStarOfLife } from "react-icons/fa6";

export const InputFieldContainer = styled.div`
    ${tw`w-360px h-16 mb-6`}
`

export const LabelEle = styled.label`
    ${tw`text-fs12_lh16 text-Oslo-Gray font-bold m-0 p-0 block flex`}
`

export const InputElement = styled.input`
    ${tw`mt-2 pt-2 pb-2 pl-4 font-normal text-fs14_lh24 leading-6 text-Astronaut w-360px h-10 border rounded-2px border-solid bg-white outline-none`}
`

export const StarIcon = styled(FaStarOfLife)`
    ${tw`w-6px ml-3px mt-Neg_2px`}
`