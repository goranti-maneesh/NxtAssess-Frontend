export interface inputPropsTypes {
    type: string, 
    onChangeMethod: (event: React.FormEvent<HTMLInputElement>) => void, 
    labelText: string,
    id: string, 
    placeholder: string, 
    value: string
}

export interface inputFieldPropsTypes {
    requiredProps: inputPropsTypes
}

export interface loaderPropsTypes{
    color: string,
    secondaryColor: string,
    width: number,
    height: number
}

export interface NxtAssessLogoPropsTypes {
    nxtAssessImg: string,
    textColor: string
}

export interface WrapperComponentPropsTypes{
    children: JSX.Element
}